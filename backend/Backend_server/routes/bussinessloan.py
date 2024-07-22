import functools
import urllib.request
import json
import os
import ssl
import pyodbc
import uuid

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for , jsonify
)
from werkzeug.security import check_password_hash, generate_password_hash


def allowSelfSignedHttps(allowed):
    if allowed and not os.environ.get('PYTHONHTTPSVERIFY', '') and getattr(ssl, '_create_unverified_context', None):
        ssl._create_default_https_context = ssl._create_unverified_context

allowSelfSignedHttps(True)

def calculate_loan_ratios(data):
    ratios = {
        "Current Ratio": data["current_assets"] / data["current_liabilities"],
        "Quick Ratio": (data["current_assets"] - data["inventory"]) / data["current_liabilities"],
        "Debt-to-Equity Ratio": data["total_debt"] / data["total_equity"],
        "Debt Ratio": data["total_debt"] / data["total_assets"],
        "Net Profit Margin": data["net_income"] / data["net_sales"],
        "Return on Assets (ROA)": data["net_income"] / data["total_assets"],
        "Return on Equity (ROE)": data["net_income"] / data["total_equity"],
        "Interest Coverage Ratio": data["ebit"] / data["interest_expense"],
        "Operating Cash Flow to Total Debt Ratio": data["operating_cash_flow"] / data["total_debt"],
        "Free Cash Flow to Firm (FCFF)": data["operating_cash_flow"] - data["capital_expenditures"]
    }
    return ratios

def insert_into_db(application_id, data, ratios,result_data):
    server = 'cbnewbase.database.windows.net'
    database = 'bobdb'
    username = 'suraj'
    password = 'cyberwardens123@'
    connection_string = f'DRIVER={{ODBC Driver 18 for SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password};Trusted_Connection=no;'

    try:
        conn = pyodbc.connect(connection_string)
        cursor = conn.cursor()

        create_table_sql = '''
        IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='LoanApplications' and xtype='U')
        CREATE TABLE LoanApplications (
            application_id UNIQUEIDENTIFIER PRIMARY KEY,
            company_name NVARCHAR(100),
            auditing_company_name NVARCHAR(100),
            current_assets FLOAT,
            current_liabilities FLOAT,
            inventory FLOAT,
            total_debt FLOAT,
            total_equity FLOAT,
            total_assets FLOAT,
            net_income FLOAT,
            net_sales FLOAT,
            ebit FLOAT,
            interest_expense FLOAT,
            operating_cash_flow FLOAT,
            capital_expenditures FLOAT,
            Current_Ratio FLOAT,
            Quick_Ratio FLOAT,
            Debt_to_Equity_Ratio FLOAT,
            Debt_Ratio FLOAT,
            Net_Profit_Margin FLOAT,
            Return_on_Assets FLOAT,
            Return_on_Equity FLOAT,
            Interest_Coverage_Ratio FLOAT,
            Operating_Cash_Flow_to_Total_Debt_Ratio FLOAT,
            Free_Cash_Flow_to_Firm FLOAT,
            result INT
        )
        '''
        cursor.execute(create_table_sql)

        insert_values_sql = '''
        INSERT INTO LoanApplications (
            application_id, company_name, auditing_company_name, current_assets, current_liabilities, inventory, total_debt,
            total_equity, total_assets, net_income, net_sales, ebit, interest_expense, operating_cash_flow, capital_expenditures,
            Current_Ratio, Quick_Ratio, Debt_to_Equity_Ratio, Debt_Ratio, Net_Profit_Margin, Return_on_Assets, Return_on_Equity,
            Interest_Coverage_Ratio, Operating_Cash_Flow_to_Total_Debt_Ratio, Free_Cash_Flow_to_Firm, result
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        '''
        cursor.execute(insert_values_sql, application_id, data["company_name"], data["auditing_company_name"], data["current_assets"],
                       data["current_liabilities"], data["inventory"], data["total_debt"], data["total_equity"], data["total_assets"],
                       data["net_income"], data["net_sales"], data["ebit"], data["interest_expense"], data["operating_cash_flow"],
                       data["capital_expenditures"], ratios["Current Ratio"], ratios["Quick Ratio"], ratios["Debt-to-Equity Ratio"],
                       ratios["Debt Ratio"], ratios["Net Profit Margin"], ratios["Return on Assets (ROA)"], ratios["Return on Equity (ROE)"],
                       ratios["Interest Coverage Ratio"], ratios["Operating Cash Flow to Total Debt Ratio"], ratios["Free Cash Flow to Firm (FCFF)"],
                       data.get("result",result_data ))

        conn.commit()
    except pyodbc.Error as ex:
        sqlstate = ex.args[1]
        print(f"Error connecting to database: {sqlstate}")
    finally:
        if 'conn' in locals() and conn:
            conn.close()

bl = Blueprint('bussinessloan', __name__, url_prefix='/bussinessloan')


@bl.route('/calculate_and_send', methods=['POST'])
def calculate_and_send():
    data = request.json

    # Calculate the ratios
    ratios = calculate_loan_ratios(data)
    
    # Generate a unique application ID
    application_id = str(uuid.uuid4())

    # Insert data into the database
    
    # Prepare data for Azure endpoint
    azure_data = {
        "input_data": {
            "columns": [
                "Customer_id", "Company_name", "Auditing_Company_Name", "Current_Ratio", "Quick_Ratio", 
                "Debt_to_Equity_Ratio", "Debt_Ratio", "Net_Profit_Margin", "Return_on_Assets (ROA)",
                "Return_on_Equity (ROE)", "Interest_Coverage_Ratio", "Operating_Cash_Flow_to_Total_Debt_Ratio",
                "Free_Cash_Flow_to_Firm (FCFF)"
            ],
            "index": [1],
            "data": [
                [1, data["company_name"], data["auditing_company_name"], ratios["Current Ratio"], 
                ratios["Quick Ratio"], ratios["Debt-to-Equity Ratio"], ratios["Debt Ratio"], 
                ratios["Net Profit Margin"], ratios["Return on Assets (ROA)"], ratios["Return on Equity (ROE)"], 
                ratios["Interest Coverage Ratio"], ratios["Operating Cash Flow to Total Debt Ratio"], 
                ratios["Free Cash Flow to Firm (FCFF)"]]
            ]
        }
    }


    body = str.encode(json.dumps(azure_data))
    url = 'https://bld9502.australiaeast.inference.ml.azure.com/score'
    api_key = 'w5bMDNR5OMFhRWEf3p8KCdNCk5WUGMWi'
    
    headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_key), 'azureml-model-deployment': 'bld9502'}
    req = urllib.request.Request(url, body, headers)


    try:
        response = urllib.request.urlopen(req)
        result = response.read()
        print(json.loads(result)[0])
        insert_into_db(application_id, data, ratios,json.loads(result)[0])


        

        return jsonify({"application_id": application_id, "ratios": ratios, "azure_response": json.loads(result)}), 200
    except urllib.error.HTTPError as error:
        error_message = error.read().decode("utf8", 'ignore')
        return jsonify({"error": str(error), "message": error_message}), error.code
