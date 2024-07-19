import json
from azure.core.credentials import AzureKeyCredential
from azure.ai.formrecognizer import FormRecognizerClient
from flask import Flask, jsonify, request

# Load credentials
credentials = json.load(open('C:/Pratham/Academics/BTech/TY/hackathons/bob_hackathon/backend/credentials.json'))
API_KEY = credentials['API_KEY']
ENDPOINT = credentials['ENDPOINT']

# Initialize the Form Recognizer client
form_recognizer_client = FormRecognizerClient(ENDPOINT, AzureKeyCredential(API_KEY))

app = Flask(__name__)

@app.route('/form_ocr', methods=['GET'])
def get_data():
    link = request.headers.get('link')
    if not link:
        return jsonify({"error": "No link provided"}), 400
    
    try:
        poller = form_recognizer_client.begin_recognize_content_from_url(link)
        form_result = poller.result()
        
        recognized_data = []
        for page in form_result:
            page_data = {
                "page_number": page.page_number,
                "tables": [],
                "lines": []
            }
            for table in page.tables:
                table_data = {
                    "cells": []
                }
                for cell in table.cells:
                    cell_data = {
                        "text": cell.text,
                        "row_index": cell.row_index,
                        "column_index": cell.column_index
                    }
                    table_data["cells"].append(cell_data)
                page_data["tables"].append(table_data)
            
            for line in page.lines:
                line_data = {
                    "text": line.text
                }
                page_data["lines"].append(line_data)
            
            recognized_data.append(page_data)
        
        return jsonify(recognized_data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
