import {
  faBagShopping,
  faClipboardCheck,
  faHouse,
  faSquarePollVertical,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SideMenu() {
  return (
    <nav className="side-menu">
      <ul>
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={faHouse} />
          </a>
        </li>
        <li>
          <a href="#activity">
            <FontAwesomeIcon icon={faSquarePollVertical} />
          </a>
        </li>
        <li>
          <a href="#orders">
            <FontAwesomeIcon icon={faClipboardCheck} />
          </a>
        </li>
        <li>
          <a href="#feedback">
            <FontAwesomeIcon icon={faWallet} />
          </a>
        </li>
        <li>
          <a href="#settings">
            <FontAwesomeIcon icon={faBagShopping} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SideMenu;
