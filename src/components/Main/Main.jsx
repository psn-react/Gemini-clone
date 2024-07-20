// import React from "react";

import { useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import Card from "../Cards/Card";
import "@fortawesome/fontawesome-free";

const cards = [
  {
    text: "Lorem ipsum dolor sit amet consec tetur adipi sicing elit. Eos doloribus quas sequi.",
    icon: "compass_icon",
  },
  {
    text: "Sit amet consec tetur adipi sicing elit. Eos doloribus quas sequi.amet consec tetur",
    icon: "code_icon",
  },
  {
    text: "Ipsum dolor sit amet consec tetur adipi sicing elit. Eos doloribus quas sequi.",
    icon: "message_icon",
  },
  {
    text: "Eos doloribus quas sequi. Lorem ipsum dolor sit amet consec tetur adipi sicing elit. ",
    icon: "bulb_icon",
  },
];

const Main = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardSelect(payload) {
    setSelectedCard(payload);
    if (payload === selectedCard) {
      setSelectedCard(null);
    }
  }

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main_container">
        <div className="greet">
          <p>
            <span>Hello, Mg Mg</span>
          </p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          {/*  */}

          {cards.map((card, i) => (
            <Card
              card={card}
              index={i}
              key={i}
              selectedCard={selectedCard}
              handleCardSelect={handleCardSelect}
              assets={assets}
            />
          ))}
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here . . ." />
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
