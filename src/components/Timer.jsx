import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    console.log("Starting timer");
  });
  return <div className="timer-container" />;
}
