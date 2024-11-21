const admin = require('firebase-admin');

// Import the Firebase service account JSON directly
const serviceAccount = require('../serviceAccountKey.json'); // Use the correct path to your JSON file

// Initialize Firebase Admin SDK with service account credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://bird-monitoring-system-default-rtdb.asia-southeast1.firebasedatabase.app',
});

// Get the Realtime Database reference
const db = admin.database(); 

module.exports = db; // Export the database reference for use in other files
