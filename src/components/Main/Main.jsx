// import React from "react";
/* eslint-disable  */
// https://www.youtube.com/watch?v=0yboGn8errU

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

  const {onSent,recentPrompt,showResult,loading,resultData, setInput, input, previousPrompt, previousData} = useContext(Context)

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
        
        <div className="top-result">
          {loading ?                
          <div className="loader">
              <hr/> <hr/> <hr/>
          </div> 
          :
            previousData.map((reply,i) => {
              return (
              <Conversation  resultData={reply} recentPrompt={previousPrompt[i]} key={i} loading={loading} />
              )
            })

          }
        </div>


        
        
        }
        <SearchBox setInput={setInput}  input={input} Sent={onSent} loading={loading}/>
      </div>
    </div>
  );
};

export default Main;
