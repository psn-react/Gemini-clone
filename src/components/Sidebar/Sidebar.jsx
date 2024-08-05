import { useState, useContext } from "react";

import "./Sidebar.css";
import { assets } from "./../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {

  const {onSent, previousPrompt, setRecentPrompt, newChat} = useContext(Context);

  const reloadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  
  
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          onClick={() => setExtended((ex) => !ex)}
        />
        <div className="new_chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p onClick={() => newChat()}>New Chat</p> : null}
        </div>

        {extended  ? (
          <div className="recent">
            <p className="recent_title">Recent</p>
            {previousPrompt.slice().reverse().map(( item,i ) => {
                return (
                  <div className="recent_entry" key={i} onClick={() => reloadPrompt(item)}>
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18)} ...</p>
                </div>
                )
            })}
          
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom_item recent_entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom_item recent_entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activities</p> : null}
        </div>
        <div className="bottom_item recent_entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
