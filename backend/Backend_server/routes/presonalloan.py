import urllib.request
import json
import os
import ssl
import pyodbc
from flask import Flask, request, jsonify, Blueprint

app = Flask(__name__)
ploan = Blueprint('personalloan', __name__, url_prefix='/personalloan')

def allowSelfSignedHttps(allowed):
    if allowed and not os.environ.get('PYTHONHTTPSVERIFY', '') and getattr(ssl, '_create_unverified_context', None):
        ssl._create_default_https_context = ssl._create_unverified_context

allowSelfSignedHttps(True)  # This line is needed if you use self-signed certificate in your scoring service.

def make_api_request(data):
    body = str.encode(json.dumps(data))
    url = 'http://18bbb702-6e45-4800-a7b4-288c0ead5eed.australiaeast.azurecontainer.io/score'
    headers = {'Content-Type': 'application/json'}
    req = urllib.request.Request(url, body, headers)

    try:
        response = urllib.request.urlopen(req)
        result = response.read()
        return json.loads(result)
    except urllib.error.HTTPError as error:
        print("The request failed with status code: " + str(error.code))
        print(error.info())
        print(error.read().decode("utf8", 'ignore'))
        return None

def connect_to_db():
    server = 'cbnewbase.database.windows.net'
    database = 'bobdb'
    username = 'suraj'
    password = 'cyberwardens123@'
    connection_string = f'DRIVER={{ODBC Driver 18 for SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password};Trusted_Connection=no;'

    try:
        conn = pyodbc.connect(connection_string)
        print("Connection established successfully!")
        return conn
    except Exception as e:
        print(f"Failed to connect to database: {e}")
        return None

def create_table(conn):
    cursor = conn.cursor()
    create_table_sql = """
    IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='CustomerApplications' AND xtype='U')
    CREATE TABLE CustomerApplications (
        Application_id INT PRIMARY KEY,
        Customer_ID INT,
        Name NVARCHAR(100),
        Age INT,
        Occupation NVARCHAR(50),
        Annual_Income FLOAT,
        Monthly_Inhand_Salary FLOAT,
        Num_Bank_Accounts INT,
        Num_Credit_Card INT,
        Interest_Rate INT,
        Num_of_Loan INT,
        Delay_from_due_date INT,
        Num_of_Delayed_Payment INT,
        Changed_Credit_Limit FLOAT,
        Num_Credit_Inquiries INT,
        Outstanding_Debt FLOAT,
        Credit_Utilization_Ratio FLOAT,
        Credit_History_Age INT,
        Total_EMI_per_month FLOAT,
        Amount_invested_monthly FLOAT,
        Monthly_Balance FLOAT,
        Applied_date_time DATETIME DEFAULT GETDATE(),
        Status NVARCHAR(50),
        Result Varchar(100),
        Message_to_User NVARCHAR(MAX)
    )
    """
    cursor.execute(create_table_sql)
    conn.commit()
    print("Table created successfully!")

def insert_data(conn, application_id, customer_data, status, result, message_to_user):
    cursor = conn.cursor()
    insert_sql = """
    INSERT INTO CustomerApplications (
        Application_id, Customer_ID, Name, Age, Occupation, Annual_Income, Monthly_Inhand_Salary,
        Num_Bank_Accounts, Num_Credit_Card, Interest_Rate, Num_of_Loan, Delay_from_due_date,
        Num_of_Delayed_Payment, Changed_Credit_Limit, Num_Credit_Inquiries, Outstanding_Debt,
        Credit_Utilization_Ratio, Credit_History_Age, Total_EMI_per_month, Amount_invested_monthly,
        Monthly_Balance, Status, Result, Message_to_User
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """
    cursor.execute(insert_sql, (
        application_id, customer_data["Customer_ID"], customer_data["Name"], customer_data["Age"],
        customer_data["Occupation"], customer_data["Annual_Income"], customer_data["Monthly_Inhand_Salary"],
        customer_data["Num_Bank_Accounts"], customer_data["Num_Credit_Card"], customer_data["Interest_Rate"],
        customer_data["Num_of_Loan"], customer_data["Delay_from_due_date"], customer_data["Num_of_Delayed_Payment"],
        customer_data["Changed_Credit_Limit"], customer_data["Num_Credit_Inquiries"], customer_data["Outstanding_Debt"],
        customer_data["Credit_Utilization_Ratio"], customer_data["Credit_History_Age"], customer_data["Total_EMI_per_month"],
        customer_data["Amount_invested_monthly"], customer_data["Monthly_Balance"], status, result, message_to_user
    ))
    conn.commit()
    print("Data inserted successfully!")

@ploan.route('/ploan', methods=['POST'])
def submit():
    data = request.json
    application_id = data.get("application_id")
    customer_data = data.get("customer_data")

    if not all([application_id, customer_data]):
        return jsonify({"error": "Missing required fields"}), 400

    request_data = {
        "Inputs": {
            "data": [customer_data]
        },
        "GlobalParameters": {
            "method": "predict"
        }
    }

    response_data = make_api_request(request_data)

    if response_data:
        status = "Success"
        result = json.dumps(response_data)
        message_to_user = "Request processed successfully."
    else:
        status = "Failure"
        result = ""
        message_to_user = "Failed to process request."

    conn = connect_to_db()
    result_for_table = json.loads(result)
    print("Result: ", result)
    print(result_for_table["Results"][0])

    if conn:
        create_table(conn)
        insert_data(conn, application_id, customer_data, status, result_for_table["Results"][0], message_to_user)
        conn.close()
        return jsonify({"message": message_to_user}), 200
    else:
        return jsonify({"error": "Failed to connect to database"}), 500

app.register_blueprint(ploan)

if __name__ == '__main__':
    app.run(debug=True)
