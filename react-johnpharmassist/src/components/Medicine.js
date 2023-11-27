import React from "react";
import "./Medicine.css";
import CardItem from "./CardItem";

function Medicine() {
  const handleButtonClick = () => {
  
    console.log("Button clicked!");
    // You can perform any action or navigate to another page
  };

  return (
    <div className="cardsmed">
      <h1>MEDICINE INFORMATION</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/gamot1.png"
              text="Pregabalin Funxion"
              label="Medicine"
              path="/med-info"
            />
            <CardItem
              src="images/gamot2.png"
              text="Gabapentin Reinin"
              label="Medicine"
              path="/med-info"
            />
            <CardItem
              src="images/gamot3.png"
              text="Paracetamol Biogesic Tablet"
              label="Medicine"
              external={true}
              path="https://www.mims.com/Philippines/drug/info/Biogesic/"
            />
        
            <CardItem
              src="images/gamot5.png"
              text="Paracetimol Biogesic Syrup"
              label="Medicine"
              external={true}
              path="https://www.mims.com/Philippines/drug/info/Biogesic/"
            />

            <CardItem
              src="images/gamot4.png"
              text="Aspirin"
              label="Medicine"
              external={true}
              path="https://www.mims.com/Philippines/drug/info/Biogesic/"
            />
          </ul>
        </div>
      </div>

      <button className="custom-button" onClick={handleButtonClick}>
        Add New Medicine
      </button>
    </div>
  );
}

export default Medicine;
