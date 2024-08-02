import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Profit() {
  const percentage = 70;
  return (
    <section className="profit">
      <div>
        <p>Net Profit</p>
        <h1>$6750.25</h1>
      </div>
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <span className="percentage">
          <FontAwesomeIcon icon={faArrowUp} className="up" /> 8%
        </span>
    </section>
  );
}
