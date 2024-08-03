// import React from "react";
/* eslint-disable  */

import { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import Card from "../Cards/Card";
import SearchBox from "./../Search/Search-box";
import { Context } from "../../context/Context";
import Greet from "../Greet/Greet";
import Conversation from "../conversation/Conversation";

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
    if (payload === selectedCard) setSelectedCard(null); 
  }

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main_container">
        
        {!showResult ? 
        <>
        
        <Greet/>
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
        </>
        : 
          <Conversation 
          resultData={resultData} recentPrompt={recentPrompt}
          />
        }
        <SearchBox setInput={setInput} 
        input={input}
        Sent={onSent}
        loading = {loading}
        />
      </div>
    </div>
  );
};

export default Main;
