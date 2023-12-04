"use client";
import { oswald } from "../../fonts";
import React, { useEffect, useState } from "react";
import "./styles.css";

export default function Electricity() {
  const [number, setNumber] = useState(1134147814);
  const [formatted, setFormatted] = useState("1.134.147.814");

  useEffect(() => {
    formatNum(number);
  }, [number]);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 1000);
    return () => clearInterval(counterInterval);
  }, []);

  function formatNum(n) {
    let s = n.toLocaleString("en-US");
    s = s.replaceAll(",", ".");
    setFormatted(s);
  }
  return (
    <div className="elec-container">
      <div className="elec-wrp">
        <h1 className={`elec-title ${oswald.className}`}>
          Electricity we produced for all time
        </h1>
        <div className="elec-div" />
        <div className="counter">
          <h2 className={`counter-title ${oswald.className}`}>{formatted}</h2>
          <p className={`counter-dsc ${oswald.className}`}>kWh</p>
        </div>
      </div>
    </div>
  );
}
