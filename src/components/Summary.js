import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faTruck,
  faXmark,
  faMoneyBill,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

function Summary() {
  return (
    <section className="summary">
      <div className="summary-item">
        <FontAwesomeIcon icon={faShop} className="icons" />
        <h4>Total Orders</h4>
        <h2>75</h2>
        <span className="percentage">
          <FontAwesomeIcon icon={faArrowUp} className="up" /> 3%
        </span>
      </div>
      <div className="summary-item">
        <FontAwesomeIcon icon={faTruck} className="icons" />
        <h4>Total Delivered</h4>
        <h2>70</h2>
        <span className="percentage">
          <FontAwesomeIcon icon={faArrowDown} className="down" /> 3%
        </span>
      </div>
      <div className="summary-item">
        <FontAwesomeIcon icon={faXmark} className="icons" />
        <h4>Total Cancelled</h4>
        <h2>05</h2>
        <span className="percentage">
          <FontAwesomeIcon icon={faArrowUp} className="up" /> 3%
        </span>
      </div>
      <div className="summary-item">
        <FontAwesomeIcon icon={faMoneyBill} className="icons" />
        <h4>Total Revenue</h4>
        <h2>$12k</h2>
        <span className="percentage">
          <FontAwesomeIcon icon={faArrowDown} className="down" /> 3%
        </span>
      </div>
    </section>
  );
}

export default Summary;
