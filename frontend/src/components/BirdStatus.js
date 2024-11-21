const BirdStatus = ({ data }) => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      <div className="bg-blue-100 p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-blue-600">Food Level</h3>
        <p className="text-2xl font-bold text-gray-800">{data.foodLevel} g</p>
      </div>
      <div className="bg-green-100 p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-green-600">Humidity</h3>
        <p className="text-2xl font-bold text-gray-800">{data.humidity} %</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-yellow-600">Light Level</h3>
        <p className="text-2xl font-bold text-gray-800">{data.lightLevel} lux</p>
      </div>
      <div className="bg-red-100 p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-red-600">Temperature</h3>
        <p className="text-2xl font-bold text-gray-800">{data.temperature} °C</p>
      </div>
    </div>
  );
};

export default BirdStatus;
