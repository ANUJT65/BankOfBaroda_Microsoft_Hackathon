import json
import time
from azure.core.exceptions import ResourceNotFoundError
from azure.core.credentials import AzureKeyCredential
from azure.ai.formrecognizer import FormRecognizerClient, FormTrainingClient

credentials = json.load(open('C:/Pratham/Academics/BTech/TY/hackathons/bob_hackathon/backend/credentials.json'))
API_KEY = credentials['API_KEY']
ENDPOINT = credentials['ENDPOINT']

form_recognizer_client = FormRecognizerClient(ENDPOINT, AzureKeyCredential(API_KEY))

form_url = 'https://raw.githubusercontent.com/ANUJT65/bob_hackathon/main/backend/sample_form.jpg'
#poller = form_recognizer_client.begin_recognize_receipts_from_url(receipt_url)
poller = form_recognizer_client.begin_recognize_content_from_url(form_url)
form_result = poller.result()

for page in form_result:
    for table in page.tables:
        for cell in table.cells:
            print(cell.text)
    for line in page.lines:
        print(line.text)
