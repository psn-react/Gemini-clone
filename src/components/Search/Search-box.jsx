// import React from "react";

import { useState } from "react";
import { assets } from "../../assets/assets";
import PropTypes from 'prop-types'
import "./Search_box.css";



const SearchBox = ({setInput,input,Sent,loading}) => {

  const [prompt, setPrompt ] = useState('');
  const handleSent = () => {
    Sent();
    setPrompt("")
  }

  const handleEnter = (anyKey) => {
    if(anyKey.key === 'Enter' && prompt ) handleSent();
  }

  return (
   
      <div className="main-bottom">
        <div className="search-box">
          
          <input onChange={(e) => {
            const val = e.target.value;
            setInput(val);
            setPrompt(val);
          }}
          value={input} type="text" placeholder="Enter a prompt here . . ." 
          onKeyDown={handleEnter}  className={`inputBox ${loading ? 'disableInput' : ''}`}
          />

          <div className="input_btn_wrap">
            <img src={assets.image_icon} />
            <img src={assets.mic_icon} />
            {!loading ? 
            <img className="sendBtn" src={assets.send_icon} alt="send" onClick={() =>  prompt && handleSent()} />      
            :
            <img className="sendBtn" src={assets.stop_icon} alt="stop" />
            }
          </div>
        </div>
        <div className="bottom-info">
          <p>
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    
  );
};


export default SearchBox;

SearchBox.propTypes = {
  setInput: PropTypes.func,
  input: PropTypes.string,
  Sent: PropTypes.func,
  loading: PropTypes.bool,

};