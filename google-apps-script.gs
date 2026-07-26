function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.openById('1ILOAWSqA9ezp7BqP9gU6qUIwrp2BfAjxGq4EsEGgZ9Y').getSheets()[0];
    sheet.appendRow([
      new Date(),
      data.fullName || '', data.email || '', data.phone || '', data.dob || '',
      data.gender || '', data.city || '', data.country || '', data.nationality || '',
      data.linkedin || '', data.portfolio || '', data.position || '', data.startDate || '',
      data.noticePeriod || '', data.hoursPerWeek || '', data.workHours || '',
      data.totalExp || '', data.relevantExp || '', data.currentTitle || '',
      data.currentCompany || '', data.currentSalary || '', data.expectedSalary || '',
      data.remoteExp || '', data.keySkills || '', data.tools || '', data.educationLevel || '',
      data.fieldOfStudy || '', data.university || '', data.gradYear || '',
      data.englishLevel || '', data.otherLanguages || '', data.englishTest || '',
      data.internet || '', data.internetSpeed || '', data.workspace || '', data.laptop || '',
      data.os || '', data.howFound || '', data.referralName || '', data.jobBoard || '',
      data.whyDR || '', data.whyFit || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({status:'success'})).setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({status:'error',message:error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}
