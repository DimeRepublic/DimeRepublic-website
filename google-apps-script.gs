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
    return HtmlService.createHtmlOutput('<html><body onload="google.script.host.close()"><h2>Submitted</h2></body></html>');
  } catch(error) {
    return HtmlService.createHtmlOutput('<html><body><h2>Error</h2><p>' + error.toString() + '</p></body></html>');
  }
}

function setupSheet() {
  var sheet = SpreadsheetApp.openById('1ILOAWSqA9ezp7BqP9gU6qUIwrp2BfAjxGq4EsEGgZ9Y').getSheets()[0];
  sheet.getRange(1, 1, 1, FORM_FIELDS.length).setValues([FORM_FIELDS]);
  sheet.setFrozenRows(1);
  Logger.log('Headers updated: ' + FORM_FIELDS.join(', '));
}
