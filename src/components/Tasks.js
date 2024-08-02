import React from "react";
import {
  faConciergeBell,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons/faCrosshairs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Arrow from "../images/Arrow.png";

function Tasks() {
  return (
    <section className="tasks">
      <div className="task-item">
        <div className="task-header">
          <div className="icons goal-icon">
            <FontAwesomeIcon icon={faCrosshairs} className="fontIcon" />
          </div>
          <h3>Goals</h3>
        </div>
        <img src={Arrow} className="arrow" alt="arrow icon" />
      </div>
      <div className="task-item">
        <div className="task-header">
          <div className="icons dishes-icon">
            <FontAwesomeIcon icon={faHamburger} className="fontIcon" />
          </div>
          <h3>Popular Dishes</h3>
        </div>
        <img src={Arrow} className="arrow" alt="arrow icon" />
      </div>
      <div className="task-item">
        <div className="task-header">
          <div className="icons menu-icon">
            <FontAwesomeIcon icon={faConciergeBell} className="fontIcon" />
          </div>
          <h3>Menus</h3>
        </div>
        <img src={Arrow} className="arrow" alt="arrow icon" />
      </div>
    </section>
  );
}

export default Tasks;
