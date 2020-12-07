import React, { useState } from "react";
import "./styles.css";
// Creating Dict Of Geners And Places
var places = {
  Package_Holiday: [
    "Uttarakhand starting @ ₹4,510.00",
    "Jungle Safari starting @ ₹10,900.00",
    "Kashmir starting @ ₹13,100.00",
    "Madhya Pradesh starting @ ₹6,700.00",
    "Karnataka starting @ ₹6,320.00"
  ],
  Group_Tour: [
    "Manali",
    "Rishikesh",
    "Chadar Trek",
    "Andaman and Nicobar",
    "Pangong Lake"
  ],
  Road_Trip: [
    "Delhi to Leh Via Manali |  DIST: 1091 Kms",
    "Delhi to Spiti Valley  | DIST:730 Kms",
    "Jammu to Srinagar  | DIST:300 Kms",
    "Chandigarh to Kasol Road Trip  | DIST:273 Kms"
  ],
  Gap_Year: ["Thailand", "Australia", "USA", "South Africa", "Peru"]
};
var ConvertedPlaces = Object.keys(places);
var geners = [];

export default function App() {
  const [plc, setPlc] = useState();

  function ClickHandler(event) {
    // var comp = document.querySelector(".Op-Div");
    // comp.innerText = "";
    var text = event.target.innerText;
    var gen = places[text];
    setPlc(gen);
    geners = [];
    for (var i = 0; i < gen.length; i++) {
      if (i % 2 !== 0) {
        geners.push(<div className="Inside-div">{gen[i]}</div>);
      } else {
        geners.push(
          <div style={{ backgroundColor: "#E5E7EB" }} className="Inside-div">
            {gen[i]}
          </div>
        );
      }
    }
    // console.log(gen);
  }
  function enterMouse(event) {
    event.target.style.boxShadow = "0px 0px 5px white";
  }
  function mouseLeave(event) {
    event.target.style.boxShadow = "";
  }

  return (
    <div className="App">
      <h1>🏄‍♂️ Quick Travel Recommendations</h1>
      <h3>Select Travel Type ✈️</h3>
      <br />
      {ConvertedPlaces.map((places) => {
        return (
          <button
            onClick={ClickHandler}
            onMouseEnter={enterMouse}
            onMouseLeave={mouseLeave}
            className="btn-gener"
          >
            {places}
          </button>
        );
      })}
      <hr />
      <div className="gener-list">
        <div>{geners}</div>
      </div>
    </div>
  );
}
