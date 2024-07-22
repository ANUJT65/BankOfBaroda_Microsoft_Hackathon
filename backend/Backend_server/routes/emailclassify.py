from flask import Flask, request, jsonify
import pyodbc
from datetime import datetime
from openai import AzureOpenAI
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for , jsonify
)
from werkzeug.security import check_password_hash, generate_password_hash
import uuid
server = 'cbnewbase.database.windows.net'
database = 'bobdb'
username = 'suraj'
password = 'cyberwardens123@'
connection_string = f'DRIVER={{ODBC Driver 18 for SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password};Trusted_Connection=no;'

# Azure OpenAI configuration
endpoint = "https://cyberopenailol.openai.azure.com/"
key = "fe01b893c8944ab7a59794c839e4c729"
model_name = "newmodelapi"

client = AzureOpenAI(
    azure_endpoint=endpoint,
    api_version="2024-02-01",
    api_key=key
)
def classify_email(email_content):
    prompt = f"""
    Classify the following email into one of the four categories:
    - Loans and Mortgages
    - Deposits and Withdrawals
    - Fraud and Security
    - Customer Service

    Only respond with the category name.

    Email: {email_content}

    The category is:
    """

    completion = client.chat.completions.create(
        model=model_name,
        messages=[
            {
                "role": "user",
                "content": prompt,
            },
        ],
        max_tokens=50,
        temperature=0.7,
        top_p=0.95,
        frequency_penalty=0,
        presence_penalty=0,
    )

    category = completion.choices[0].message.content.strip()
    if category not in ["Loans and Mortgages", "Deposits and Withdrawals", "Fraud and Security", "Customer Service"]:
        category = "Customer Service"

    return category
email = Blueprint('emailclassify', __name__, url_prefix='/emailclassify')

@email.route('/classify_email', methods=['POST'])
def classify_and_save_email():
    data = request.json
    email_id = data.get('email_id')
    email_content = data.get('email_content')
    user_id = data.get('user_id')
    
    if not email_id or not email_content or not user_id:
        return jsonify({"error": "email_id, email_content, and user_id are required"}), 400

    category = classify_email(email_content)
    application_id = str(uuid.uuid4())  # Generate a unique application_id

    try:
        conn = pyodbc.connect(connection_string)
        cursor = conn.cursor()

        # Prepare and execute the insert statement
        current_datetime = datetime.now()
        cursor.execute("""
            INSERT INTO EmailClassifications (application_id, email_id, email_content, category, status, reply_message, classification_date, user_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (application_id, email_id, email_content, category, 'Processed', f'Null', current_datetime, user_id))

        # Commit the transaction
        conn.commit()

        # Close the connection
        conn.close()

        return jsonify({
            "application_id": application_id,
            "email_id": email_id,
            "email_content": email_content,
            "category": category,
            "status": "Processed",
            "reply_message": f"Classified as {category}",
            "classification_date": current_datetime.strftime("%Y-%m-%d %H:%M:%S"),
            "user_id": user_id
        })
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500
