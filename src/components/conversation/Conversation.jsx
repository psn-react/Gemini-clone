
// import { useContext } from "react"
// import { Context } from "../../context/Context"
import { assets } from "../../assets/assets"
import  PropTypes  from 'prop-types';
import "./conversation.css" 

const Conversation = ({resultData, recentPrompt}) =>  {

// const {recentPrompt,resultData} = useContext(Context)
// console.log(resultData);
return (
    <>
        <div className="result">          
            <div className="result-title">
                <img src={assets.user_icon} alt="user_icon" />
                <p className="prev-prompt">{recentPrompt}</p>
            </div>

            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                <p dangerouslySetInnerHTML={{ __html:resultData }}>
                   
                </p>
                {/* <p>
                    {resultData}
                </p> */}
            </div>

        </div>
    </>
  )
}

export default Conversation

Conversation.propTypes = {
    recentPrompt : PropTypes.string,
    resultData : PropTypes.any,
}
