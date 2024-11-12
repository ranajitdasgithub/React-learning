import React, { useEffect, useState } from "react";
import TimeZone from "./TimeZone";
import "../styles/analog.css";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());
  const [timezone, setTimezone] = useState("Asia/Kolkata");

  function handleTimeZone() {
    console.log("Handle timezone click");
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  let timeStr = new Intl.DateTimeFormat("default", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: timezone,
  }).format(time);

  let [hr, min, sec] = timeStr.split(":").map(Number);
  console.log(hr, min, sec);

  const rotationHour = (360 / 12) * hr;
  const rotationMinute = (360 / 60) * min;
  const rotationSecond = (360 / 60) * sec;

  return (
    <div>
      <h1>Analog Clock</h1>
      <TimeZone handleZone={handleTimeZone} />
      <div className="clock">
        <div
          className="minutes"
          style={{ transform: `translate(-50%) rotate(${rotationMinute}deg)` }}
        ></div>
        <div
          className="seconds"
          style={{ transform: `translate(-50%) rotate(${rotationSecond}deg)` }}
        ></div>
        <div
          className="hour"
          style={{ transform: `translate(-50%) rotate(${rotationHour}deg)` }}
        ></div>
        <div className="center"></div>
      </div>
    </div>
  );
};

export default AnalogClock;
