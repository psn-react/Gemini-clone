// import React from "react";

import { assets } from "../../assets/assets";
import "./Search_box.css";

const SearchBox = ({setInput,input,Sent}) => {
  return (
   
      <div className="main-bottom">
        <div className="search-box">
          
          <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here . . ." />

          <div className="input_btn_wrap">
            <img src={assets.image_icon} />
            <img src={assets.mic_icon} />
            <img src={assets.send_icon} alt="send" onClick={Sent} />
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
