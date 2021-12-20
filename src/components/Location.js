import React, { useEffect } from "react";
const Location = ({ position, description }) => {
  return (
    <div className="max-w-7xl m-auto flex items-center justify-between inline-block shadow-gray-900">
      <div className="dark-mode p-4 mt-8 inline-block">
        {/* Title */}
        <div className="">
          <h1 className="text-2xl bold p-5 ">Your Details</h1>
        </div>
        <div className="items-center ">
          <div>
            <h1>Latitude:{position.lat} </h1>
          </div>
          <div>
            <h1> Longitude:{position.long} </h1>
          </div>
          <div>
            <h1>
              {" "}
              {description.countryName}
              <sup> {description.countryCode} </sup>{" "}
            </h1>
          </div>
          <div>
            <h1> city:{description.city} </h1>
          </div>
        </div>
        <div>
          <img
            src={`https://flagcdn.com/64x48/${description.countryCode.toLowerCase()}.png`}
            width="64"
            height="48"
            alt={`${description.countryName}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
