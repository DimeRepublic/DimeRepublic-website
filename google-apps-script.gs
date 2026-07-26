var FORM_FIELDS = [
  'Timestamp', 'fullName', 'email', 'phone', 'dob', 'gender', 'city', 'country',
  'nationality', 'linkedin', 'portfolio', 'position', 'startDate', 'noticePeriod',
  'hoursPerWeek', 'workHours', 'totalExp', 'relevantExp', 'currentTitle',
  'currentCompany', 'currentSalary', 'expectedSalary', 'remoteExp', 'keySkills',
  'tools', 'educationLevel', 'fieldOfStudy', 'university', 'gradYear',
  'englishLevel', 'otherLanguages', 'englishTest', 'internet', 'internetSpeed',
  'workspace', 'laptop', 'os', 'howFound', 'referralName', 'jobBoard',
  'whyDR', 'whyFit'
];

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById('1ILOAWSqA9ezp7BqP9gU6qUIwrp2BfAjxGq4EsEGgZ9Y').getSheets()[0];
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var data = e.parameter;
    var row = [];

    for (var i = 0; i < headers.length; i++) {
      var h = headers[i];
      if (h === 'Timestamp') {
        row.push(new Date());
      } else {
        row.push(data[h] || '');
      }
    }

    sheet.appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({status:'success'})).setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({status:'error',message:error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

function setupSheet() {
  var sheet = SpreadsheetApp.openById('1ILOAWSqA9ezp7BqP9gU6qUIwrp2BfAjxGq4EsEGgZ9Y').getSheets()[0];
  sheet.getRange(1, 1, 1, FORM_FIELDS.length).setValues([FORM_FIELDS]);
  sheet.setFrozenRows(1);
  Logger.log('Headers updated: ' + FORM_FIELDS.join(', '));
}
