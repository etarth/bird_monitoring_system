import React from 'react';

const CameraStream = () => {
  // Replace the src URL with your ESP32-CAM IP address
  const streamURL = 'http://192.168.x.x:81/stream';

  return (
    <div className="w-full h-full bg-white rounded-[24px]">
      <img
        src={streamURL}
        alt="Live camera feed"
        className=""
      />
    </div>
  );
};

export default CameraStream;
