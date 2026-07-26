function doGet(e) {
  try {
    var params = e.parameter || {};
    var sheet = SpreadsheetApp.openById('1ILOAWSqA9ezp7BqP9gU6qUIwrp2BfAjxGq4EsEGgZ9Y').getSheets()[0];
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    // If first sheet has no headers or wrong count, init it
    if (headers.length < 5 || headers[0] !== 'Timestamp') {
      var allHeaders = ['Timestamp', 'fullName', 'email', 'phone', 'dob', 'gender', 'city', 'country',
        'nationality', 'linkedin', 'portfolio', 'position', 'startDate', 'noticePeriod',
        'hoursPerWeek', 'workHours', 'totalExp', 'relevantExp', 'currentTitle',
        'currentCompany', 'currentSalary', 'expectedSalary', 'remoteExp', 'keySkills',
        'tools', 'educationLevel', 'fieldOfStudy', 'university', 'gradYear',
        'englishLevel', 'otherLanguages', 'englishTest', 'internet', 'internetSpeed',
        'workspace', 'laptop', 'os', 'howFound', 'referralName', 'jobBoard',
        'whyDR', 'whyFit'];
      sheet.clear();
      sheet.appendRow(allHeaders);
      sheet.setFrozenRows(1);
      headers = allHeaders;
    }

    var row = [new Date()];
    for (var i = 1; i < headers.length; i++) {
      var val = params[headers[i]];
      row.push(val !== undefined ? val : '');
    }
    sheet.appendRow(row);
    return ContentService.createTextOutput('OK').setMimeType(ContentService.MimeType.TEXT);
  } catch(error) {
    return ContentService.createTextOutput('Error: ' + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}
