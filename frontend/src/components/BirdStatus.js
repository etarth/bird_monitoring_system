import React from 'react';

const BirdStatus = ({ data }) => {
  return (
    <div className="w-full h-full bg-white rounded-[24px]">
      <div className="">
        <h3 className="">Food Weight</h3>
        <p className="">{data.foodWeight} g</p>
      </div>
      <div className="">
        <h3 className="">Humidity</h3>
        <p className="">{data.humidity} %</p>
      </div>
      <div className="">
        <h3 className="">Light Level</h3>
        <p className="">{data.lightLevel} lux</p>
      </div>
      <div className="">
        <h3 className="">Temperature</h3>
        <p className="">{data.temperature} °C</p>
      </div>
    </div>
  );
};

export default BirdStatus;
