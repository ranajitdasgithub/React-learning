import React from "react";

const AnalogClock = () => {
  let currentDate = Date.now();

  let date = new Date(currentDate);
  let hour = date.getHours();
  let sec = date.getSeconds();
  let min = date.getMinutes();

  const formatter = Intl.DateTimeFormat("en-AU", {
    timeZone: "Asia/Dhaka",
  });
  const dateWithZone = formatter.format(currentDate);
  console.log(dateWithZone.getHours());
  console.log("hour", hour, "sec", sec, "min", min);
  return <div>AnalogClock</div>;
};

export default AnalogClock;
