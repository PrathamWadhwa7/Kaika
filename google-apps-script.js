const SHEET_ID = '1N5_J0aw_uq_a5ciwZwK93-vavC7WmFfrziBT5yDU4Ng'; // Your Sheet ID

/**
 * Handle GET requests (for testing connectivity)
 */
function doGet(e) {
  try {
    console.log('GET request received');
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Google Apps Script is working!',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error('Error in doGet:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error in doGet',
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Helper function to read form data sent via POST request (URLSearchParams format).
 * This is necessary for reliable cross-origin submissions.
 */
function readData(e) {
  const data = {};
  for (const key in e.parameter) {
    data[key] = e.parameter[key];
  }
  
  // The 'selectedServices' are sent as a JSON string from the React app, so we must parse them back.
  if (data.selectedServices) {
    try {
      data.selectedServices = JSON.parse(data.selectedServices);
    } catch (err) {
      console.error('Error parsing selectedServices:', err);
      data.selectedServices = []; // Fallback to empty array on parse error
    }
  } else {
    data.selectedServices = [];
  }
  return data;
}


function doPost(e) {
  try {
    console.log('=== NEW FORM SUBMISSION ===');
    console.log('Raw event data:', JSON.stringify(e));
    
    // Check if event data exists
    if (!e || !e.parameter) {
      console.error('No event data or parameters received');
      throw new Error('No form data received');
    }
    
    console.log('Event parameters:', JSON.stringify(e.parameter));
    
    // Read the data using the new format reader
    const data = readData(e);
    console.log('Parsed data:', JSON.stringify(data));
    
    // Open the Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    console.log('Sheet opened successfully');
    
    // Check if required data is missing (basic server-side check)
    if (!data.name || !data.email || data.selectedServices.length === 0) {
       console.error('Validation failed:', {
         hasName: !!data.name,
         hasEmail: !!data.email,
         servicesCount: data.selectedServices.length
       });
       throw new Error('Missing required fields (Name, Email, or Services).');
    }
    
    console.log('Validation passed');
    
    // Prepare the data for the sheet
    const timestamp = new Date();
    const selectedServicesString = data.selectedServices.map(service => 
      `${service.title} (${service.price})`
    ).join(', ');
    
    // Row data to insert
    const rowData = [
      timestamp,                    // A: Timestamp
      data.name,                   // B: Name
      data.email,                  // C: Email
      data.phone || '',            // D: Phone
      data.company || '',          // E: Company
      selectedServicesString,      // F: Selected Services
      data.notes || '',            // G: Notes
      data.submissionDate || timestamp.toISOString(), // H: Submission Date (use current time if missing)
      'New Lead'                   // I: Status
    ];
    
    // NOTE: We rely on setupSheet() to create headers, removing redundant header check here.
    
    // Add the new row
    console.log('Adding row to sheet:', rowData);
    sheet.appendRow(rowData);
    console.log('Row added successfully');
    
    // Auto-resize columns (optional, can be commented out for performance)
    sheet.autoResizeColumns(1, rowData.length);
    console.log('Columns auto-resized');
    
    // Send email notification (optional)
    console.log('Sending email notification...');
    sendEmailNotification(data, selectedServicesString);
    console.log('Email notification sent');
    
    // Return success response
    console.log('Returning success response');
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('=== ERROR PROCESSING FORM SUBMISSION ===');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Full error object:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error processing form submission',
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Send email notification when a new form is submitted
 */
function sendEmailNotification(data, selectedServicesString) {
  try {
    // !!! IMPORTANT: REPLACE THIS PLACEHOLDER WITH YOUR ACTUAL EMAIL !!!
    const emailAddress = 'prathamw777@gmail.com'; 
    const subject = `New Kaika Service Inquiry from ${data.name}`;
    
    const body = `
New service inquiry received:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company || 'Not provided'}
Selected Services: ${selectedServicesString}
Notes: ${data.notes || 'No additional notes'}

Timestamp: ${new Date()}

Please respond within 24 hours as promised.
    `;
    
    MailApp.sendEmail(emailAddress, subject, body);
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

/**
 * Test function to verify the script is working
 * Run this function manually in the Apps Script editor (after setupSheet)
 */
function testScript() {
  console.log('=== RUNNING TEST SCRIPT ===');
  
  const testData = {
    name: 'Test User (Success)',
    email: 'test@example.com',
    phone: '1234567890',
    company: 'Test Company',
    selectedServices: JSON.stringify([
      { title: 'Strategy', price: '$2,500' },
      { title: 'Design', price: '$4,500' }
    ]),
    notes: 'This is a test submission via testScript.',
    submissionDate: new Date().toISOString()
  };
  
  // Mock event uses the parameter structure, just like the real form submission
  const mockEvent = { parameter: testData };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
  console.log('=== TEST COMPLETED ===');
}

/**
 * Test function that simulates a direct function call (for debugging)
 * This is what happens when you run doPost() directly in the editor
 */
function testDirectCall() {
  console.log('=== TESTING DIRECT CALL ===');
  console.log('This simulates calling doPost() directly (which will fail)');
  
  try {
    const result = doPost(); // No parameters = undefined
    console.log('Unexpected success:', result);
  } catch (error) {
    console.log('Expected error (no parameters):', error.message);
  }
  
  console.log('=== DIRECT CALL TEST COMPLETED ===');
}

/**
 * Simple test to check if the script can access the sheet
 * Run this first to verify basic connectivity
 */
function testSheetAccess() {
  try {
    console.log('Testing sheet access...');
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    console.log('Sheet name:', sheet.getName());
    console.log('Sheet ID:', sheet.getSheetId());
    console.log('Last row:', sheet.getLastRow());
    console.log('Last column:', sheet.getLastColumn());
    console.log('Sheet access test: SUCCESS');
    return true;
  } catch (error) {
    console.error('Sheet access test: FAILED');
    console.error('Error:', error);
    return false;
  }
}

/**
 * Function to set up the Google Sheet with proper formatting
 * Run this function ONCE manually in the Apps Script editor after authorization
 */
function setupSheet() {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Clear existing data
    sheet.clear();
    
    // Add headers
    const headers = [
      'Timestamp',
      'Name', 
      'Email',
      'Phone',
      'Company',
      'Selected Services',
      'Notes',
      'Submission Date',
      'Status'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format header row
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#9000ad')
      .setFontColor('white')
      .setFontSize(12);
    
    // Set column widths
    sheet.setColumnWidth(1, 150); 
    sheet.setColumnWidth(2, 150);
    sheet.setColumnWidth(3, 200);
    sheet.setColumnWidth(4, 150);
    sheet.setColumnWidth(5, 150);
    sheet.setColumnWidth(6, 300);
    sheet.setColumnWidth(7, 300);
    sheet.setColumnWidth(8, 150);
    sheet.setColumnWidth(9, 100);
    
    // Freeze header row
    sheet.setFrozenRows(1);
    
    console.log('Sheet setup completed successfully');
  } catch (error) {
    console.error('Error setting up sheet:', error);
  }
}
