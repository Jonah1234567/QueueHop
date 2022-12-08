from __future__ import print_function

import gc

import gspread
from oauth2client.service_account import ServiceAccountCredentials
from gspread_dataframe import set_with_dataframe
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


def write_to_database(people_count, time, date, creds_path, scope):
    creds = ServiceAccountCredentials.from_json_keyfile_name(creds_path, scope)
    filename = date + ".csv"
    # maybe change this to try catch, feels like i should split it into
    # create file and then write to file though
    spreadsheet_name, spreadsheet_id = check_file_exists(creds, scope, filename)
    write_to_sheet(people_count, time, creds, spreadsheet_id)


def search_file(creds, sc):
    try:
        # create drive api client
        service = build('drive', 'v3', credentials=creds)
        files = []
        page_token = None
        while True:
            response = service.files().list(q="mimeType='application/vnd.google-apps.spreadsheet'", spaces='drive', fields='nextPageToken, ''files(id, name)', pageToken=page_token).execute()
            files.extend(response.get('files', []))
            page_token = response.get('nextPageToken', None)
            if page_token is None:
                break

    except HttpError as error:
        print(F'An error occurred: {error}')
        files = None
    return files


# this is not written correctly, don't string append this bad form
def write_to_sheet(people_count, date, credentials, spreadsheet_id):
    service = build('sheets', 'v4', credentials=credentials)
    resource = {
        "majorDimension": "ROWS",
        "values": [[str(people_count) + " , " + str(date)]]
    }
    spreadsheetId = spreadsheet_id
    range = "Sheet1!A:C"
    gc.collect()
    service.spreadsheets().values().append(spreadsheetId=spreadsheetId, range=range, body=resource,  valueInputOption="USER_ENTERED").execute()


def create_new_file(creds, file_scope, file_name):
    client = gspread.authorize(creds)
    spreadsheetTitle = file_name
    folderId = '17p5O0bVi0LSI2pSI7RQtkntJF7veDf9W'
    workbook = client.create(spreadsheetTitle, folder_id=folderId)
    return file_name, workbook.id


# I don't like this name for the function its not really accurate
def check_file_exists(creds_path, search_scope, file_name):
    files = search_file(creds_path, search_scope)
    name, id = 0, 0
    create_file = True

    for file in files:
        # Process change
        if file.get("name") == file_name:
            create_file = False
        name, id = file.get("name"), file.get("id")

    if create_file:
        return create_new_file(creds_path, search_scope, file_name)
    return name, id




