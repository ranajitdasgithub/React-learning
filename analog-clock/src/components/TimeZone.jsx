import React, { useState } from "react";

const TimeZone = ({ selectedZone, handleSetTimezone }) => {
  const timezones = [
    "America/New_York",
    "Europe/London",
    "Asia/Tokyo",
    "Asia/Kolkata",
    "Australia/Sydney",
  ];
  return (
    <div>
      <h2>Time Zone</h2>
      <select
        value={selectedZone}
        onChange={(e) => handleSetTimezone(e.target.value)}
        // style={styles.dropdown}
      >
        {timezones.map((tz) => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeZone;
