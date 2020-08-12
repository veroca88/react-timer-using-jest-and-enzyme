import React, { useState, useEffect } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    console.log("Starting timer");
  });
  return (
    <div className="timer-container">
      <div className="timer-display"></div>
      <div className="timer-button-container">
        <TimerButton buttonAction={() => setIsOn(true)} buttonValue={"Start"} />
        <TimerButton buttonAction={() => setIsOn(false)} buttonValue={"Stop"} />
        <TimerButton buttonAction={() => setIsOn(isOn)} buttonValue={"Reset"} />
      </div>
    </div>
  );
}
