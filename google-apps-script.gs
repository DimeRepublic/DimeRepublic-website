var SHEET_NAME = 'Submissions';

function doGet(e) {
  return handle(e);
}

function doPost(e) {
  return handle(e);
}

function handle(e) {
  try {
    var params = e.parameter || {};
    var ss = SpreadsheetApp.openById('1ILOAWSqA9ezp7BqP9gU6qUIwrp2BfAjxGq4EsEGgZ9Y');
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'fullName', 'email', 'phone', 'dob', 'gender', 'city', 'country',
        'nationality', 'linkedin', 'portfolio', 'position', 'startDate', 'noticePeriod',
        'hoursPerWeek', 'workHours', 'totalExp', 'relevantExp', 'currentTitle',
        'currentCompany', 'currentSalary', 'expectedSalary', 'remoteExp', 'keySkills',
        'tools', 'educationLevel', 'fieldOfStudy', 'university', 'gradYear',
        'englishLevel', 'otherLanguages', 'englishTest', 'internet', 'internetSpeed',
        'workspace', 'laptop', 'os', 'howFound', 'referralName', 'jobBoard',
        'whyDR', 'whyFit']);
      sheet.setFrozenRows(1);
    }

    var row = [new Date()];
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    for (var i = 1; i < headers.length; i++) {
      row.push(params[headers[i]] || '');
    }
    sheet.appendRow(row);

    return HtmlService.createHtmlOutput('<html><body>OK</body></html>');
  } catch(error) {
    return HtmlService.createHtmlOutput('<html><body>Error: ' + error.toString() + '</body></html>');
  }
}
