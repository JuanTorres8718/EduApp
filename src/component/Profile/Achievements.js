import React from "react";

import "../../style/Achievements.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const Achivements = () => {
  return (
    <div className="row col-5 p-1">
      <div className="col-6 d-flex flex-column align-items-center p-1">
        <FontAwesomeIcon icon={faTrophy} className="points " id="points" />
        <p>Logros</p>
      </div>
      <div className="col-6  d-flex flex-column align-items-center p-1">
        <FontAwesomeIcon icon={faMedal} className="points" />
        <p>Puntos</p>
      </div>
    </div>
  );
};

export default Achivements;
