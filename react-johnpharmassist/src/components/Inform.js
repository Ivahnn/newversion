import React from "react";
import "./Inform.css";
import CardItem from "./CardItem";

function Inform() {
  return (
    <div className="inform-container">
      <div className="cards">
        <div className="cards__containerinfo">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/gamot1.png"
                text="Coronavirus disease (COVID-19) pandemic"
                label="Medicine"
              />
            </ul>
          </div>
        </div>
        {/* Medicine Information */}
        <div className="medicine-info">
          <h1 style={{ fontSize: "3rem" }}>Medicine Information</h1>
          <ul style={{ fontSize: "1.8rem" }}>
            <li>
              <strong>Name:</strong> Example Medicine
            </li>
            <li>
              <strong>Scientific name:</strong> Pregabalin
            </li>
            <li>
              <strong>Type of drug:</strong> Capsule
            </li>
            <li>
              <strong>Dosage:</strong> 150mg
            </li>
            <li>
              <strong>Description:</strong> An anticonvulsant drug that works by
              affecting the levels of certain chemicals in the brain that send
              pain signals and cause seizures
            </li>
            <li>
              <strong>Side Effect:</strong> drowsiness, dizziness, blurred
              vision, weight gain, dry mouth, swelling, or trouble concentrating
            </li>
            <li>
              <strong>Manufacturer:</strong> Unilab
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Inform;
