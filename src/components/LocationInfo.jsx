import React from "react";

const LocationInfo = ({ info }) => {
  return (
    <div className="absolute top-5 right-5 w-300 min-h-150 px-5 py-5 bg-primary-dark bg-opacity-60 rounded-lg text-white text-base border-2 border-secondary text-left">
      <h2>Event Location Info</h2>
      <ul className="list-none p-0">
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfo;
