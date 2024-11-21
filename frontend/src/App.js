import React, { useEffect, useState } from 'react';
import { database } from './firebaseConfig'; // Import the database instance
import { ref, onValue } from 'firebase/database';
import BirdStatus from './components/BirdStatus';

const App = () => {
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    // Reference to the path where the sensor data is stored in Firebase
    const sensorDataRef = ref(database, '/'); // Root path, adjust if needed

    // Listening for changes in the database
    onValue(sensorDataRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Data from Firebase:", data);
      setSensorData(data); // Set the data to state
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Bird Monitoring System</h1>
        <p className="text-center text-gray-600 mb-4">Firebase is connected!</p>

        {sensorData ? (
          <BirdStatus data={sensorData} />
        ) : (
          <p className="text-center text-gray-500">Loading sensor data...</p>
        )}
      </div>
    </div>
  );
};

export default App;
