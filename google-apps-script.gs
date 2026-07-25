/**
 * =====================================================
 * DIMEREPUBLIC — JOB APPLICATION FORM HANDLER
 * =====================================================
 *
 * HOW TO USE:
 *
 * 1. Create a Google Sheet named "DimeRepublic Job Applications"
 *
 * 2. Import the CSV template (dime-republic-job-applications-template.csv)
 *    into the sheet to set up column headers
 *
 * 3. Go to Extensions > Apps Script
 *
 * 4. Delete any existing code and paste this entire script
 *
 * 5. Click Save (Ctrl+S)
 *
 * 6. Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy
 *
 * 7. Copy the Web app URL
 *
 * 8. Open apply.html and replace:
 *      const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
 *    with your actual URL
 *
 * 9. Test by submitting a form
 * =====================================================
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
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
      data.howFound || '',              // How Found Us
      data.referralName || '',           // Referral Name
      data.jobBoard || '',              // Job Board
      data.whyDR || '',                 // Why DimeRepublic
      data.whyFit || ''                 // Why Good Fit
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
