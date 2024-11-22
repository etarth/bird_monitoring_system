const admin = require('firebase-admin');

const serviceAccount = require('../serviceAccountKey.json');

// Initialize Firebase Admin SDK with service account credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://bird-monitoring-system-default-rtdb.asia-southeast1.firebasedatabase.app',
});

// Get the Realtime Database reference
const db = admin.database(); 

module.exports = db;
