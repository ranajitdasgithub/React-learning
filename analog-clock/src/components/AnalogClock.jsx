import React, { useState } from "react";
import TimeZone from "./TimeZone";
import "../styles/analog.css";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [rotnSec, setRotSec] = useState(0);
  const [rotnMin, setRotMin] = useState(0);
  const [rotnHr, setRotHr] = useState(0);

  function handleTimeZone() {
    console.log("Handle timezone click");
  }
  let timeStr = new Intl.DateTimeFormat("default", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: timezone,
  }).format(time);
  let [hr, min, sec] = timeStr.split(":");
  console.log(Number(hr), min, sec);
  const rotationHour = 12 / Number(hr);
  const rotationMinute = 60 / Number(min);
  const rotationSecond = 60 / Number(sec);

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
