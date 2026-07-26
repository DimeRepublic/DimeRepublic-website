/**
 * =====================================================
 * DIMEREPUBLIC — JOB APPLICATION FORM HANDLER
 * =====================================================
 *
 * CONFIGURATION — Set these before deploying
 * =====================================================
 */
var CONFIG = {
  SHEET_ID: '1ILOAWSqA9ezp7BqP9gU6qUIwrp2BfAjxGq4EsEGgZ9Y',
  SHEET_NAME: 'DimeRepublic Job Applications',
  // Column headers (Row 1 of your sheet) — must match exactly
  COLUMNS: [
    'Timestamp',
    'Full Name',
    'Email',
    'Phone',
    'Date of Birth',
    'Gender',
    'City',
    'Country',
    'Nationality',
    'LinkedIn',
    'Portfolio',
    'Position',
    'Start Date',
    'Notice Period',
    'Hours/Week',
    'Work Hours',
    'Total Experience (Years)',
    'Relevant Experience (Years)',
    'Current Title',
    'Current Company',
    'Current Salary (USD)',
    'Expected Salary (USD)',
    'Remote Experience',
    'Key Skills',
    'Tools',
    'Education Level',
    'Field of Study',
    'University',
    'Graduation Year',
    'English Level',
    'Other Languages',
    'English Test Score',
    'Internet',
    'Internet Speed (Mbps)',
    'Workspace',
    'Laptop',
    'OS',
    'How Found Us',
    'Referral Name',
    'Job Board',
    'Why DimeRepublic',
    'Why Good Fit'
  ],
  // You can also store these via Properties Service instead:
  // ScriptApp.getScriptProperties().setProperty('SHEET_ID', 'your-sheet-id');
  // ScriptApp.getScriptProperties().setProperty('SHEET_NAME', 'DimeRepublic Job Applications');
};

/**
 * =====================================================
 * doPost(e) — Entry point for form submissions
 * =====================================================
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getSheet_();
    var row = mapDataToRow_(data);
    sheet.appendRow(row);
    return jsonResponse_({ status: 'success' });
  } catch (error) {
    return jsonResponse_({ status: 'error', message: error.toString() });
  }
}

/**
 * =====================================================
 * doGet(e) — Optional: for testing
 * =====================================================
 */
function doGet() {
  return HtmlService.createHtmlOutput('Service is running. Use POST to submit data.');
}

/**
 * =====================================================
 * getSheet_() — Get or create the target sheet
 * =====================================================
 */
function getSheet_() {
  var ss;
  var sheetId = ScriptApp.getScriptProperties().getProperty('SHEET_ID') || CONFIG.SHEET_ID;
  if (sheetId) {
    ss = SpreadsheetApp.openById(sheetId);
  } else {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  }
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    sheet.appendRow(CONFIG.COLUMNS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * =====================================================
 * mapDataToRow_(data) — Map form fields to column order
 * =====================================================
 */
function mapDataToRow_(data) {
  return [
    new Date(),                        // Timestamp
    data.fullName || '',               // Full Name
    data.email || '',                  // Email
    data.phone || '',                  // Phone
    data.dob || '',                    // Date of Birth
    data.gender || '',                 // Gender
    data.city || '',                   // City
    data.country || '',                // Country
    data.nationality || '',            // Nationality
    data.linkedin || '',               // LinkedIn
    data.portfolio || '',              // Portfolio
    data.position || '',               // Position
    data.startDate || '',              // Start Date
    data.noticePeriod || '',           // Notice Period
    data.hoursPerWeek || '',           // Hours/Week
    data.workHours || '',              // Work Hours
    data.totalExp || '',               // Total Experience
    data.relevantExp || '',            // Relevant Experience
    data.currentTitle || '',           // Current Title
    data.currentCompany || '',         // Current Company
    data.currentSalary || '',          // Current Salary
    data.expectedSalary || '',         // Expected Salary
    data.remoteExp || '',              // Remote Experience
    data.keySkills || '',              // Key Skills
    data.tools || '',                  // Tools
    data.educationLevel || '',         // Education Level
    data.fieldOfStudy || '',           // Field of Study
    data.university || '',             // University
    data.gradYear || '',               // Graduation Year
    data.englishLevel || '',           // English Level
    data.otherLanguages || '',         // Other Languages
    data.englishTest || '',            // English Test Score
    data.internet || '',               // Internet
    data.internetSpeed || '',          // Internet Speed
    data.workspace || '',              // Workspace
    data.laptop || '',                 // Laptop
    data.os || '',                     // OS
    data.howFound || '',               // How Found Us
    data.referralName || '',           // Referral Name
    data.jobBoard || '',              // Job Board
    data.whyDR || '',                 // Why DimeRepublic
    data.whyFit || ''                 // Why Good Fit
  ];
}

/**
 * =====================================================
 * jsonResponse_(obj) — Return JSON response
 * =====================================================
 */
function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * =====================================================
 * setupSheet() — Run once to create headers
 * =====================================================
 */
function setupSheet() {
  var sheet = getSheet_();
  Logger.log('Sheet ready: ' + sheet.getName());
  Logger.log('Row count: ' + sheet.getLastRow());
}

/**
 * =====================================================
 * DEPLOYMENT INSTRUCTIONS
 * =====================================================
 *
 * 1. Go to sheets.google.com and create a new spreadsheet.
 *    Name it "DimeRepublic Job Applications" (or update CONFIG.SHEET_NAME).
 *
 * 2. Go to Extensions > Apps Script, delete existing code, paste this file.
 *
 * 3. (Recommended) Save your sheet ID so the script always finds it:
 *    - Run setupSheet() once to create the sheet
 *    - Or run this in the Script Editor console:
 *        ScriptApp.getScriptProperties().setProperty('SHEET_ID', 'your-sheet-id-here');
 *
 * 4. Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy, then copy the Web app URL.
 *
 * 5. Open apply.html and set SCRIPT_URL (in the CONFIG object) to that URL.
 *
 * 6. Test by submitting the form.
 *
 * =====================================================
 */
