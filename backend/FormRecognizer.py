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
        
        key_value_pairs = {}
        for page in form_result:
            for table in page.tables:
                cells = {}
                for cell in table.cells:
                    if cell.row_index not in cells:
                        cells[cell.row_index] = {}
                    cells[cell.row_index][cell.column_index] = cell.text
                
                for row in cells.values():
                    if 0 in row and 1 in row:  # Assuming the first column is 'field' and the second column is 'value'
                        key_value_pairs[row[0]] = row[1]
        
        '''
        if "Capital Expenditure:" in key_value_pairs:
            return jsonify({"message": "All ok", "data": key_value_pairs})
        else:
            return jsonify({"message": "Field 'Capital Expenditure' not found", "data": key_value_pairs})
        '''

        return jsonify(key_value_pairs)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
