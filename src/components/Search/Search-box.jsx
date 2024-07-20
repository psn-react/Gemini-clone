// import React from "react";

import { assets } from "../../assets/assets";
import "./Search_box.css";

const SearchBox = () => {
  return (
    <>
      <div className="main-bottom">
        <div className="search-box">
          <input type="text" placeholder="Enter a prompt here . . ." />
          <div className="input_btn_wrap">
            <img src={assets.image_icon} />
            <img src={assets.mic_icon} />
            <img src={assets.send_icon} />
          </div>
        </div>
        <div className="bottom-info">
          <p>
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
