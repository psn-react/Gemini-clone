
// import { useContext } from "react"
// import { Context } from "../../context/Context"
import { assets } from "../../assets/assets"
import  PropTypes  from 'prop-types';
import "./conversation.css" 

const Conversation = ({resultData, recentPrompt, loading}) =>  {

// const {recentPrompt,resultData} = useContext(Context)
// console.log(resultData);
return (
    <>
        <div className="result">          
               
                <div className="result-title">
                    <img src={assets.user_icon} alt="user_icon" />
                        <p className="prev-prompt" >
                            {recentPrompt}
                        </p>
                </div> 
                

            <div className="result-data">
                <img className={loading ? 'responseIcon': ''} src={assets.gemini_icon} alt="" />

            
                <p dangerouslySetInnerHTML={{ __html:resultData }} ></p>                        
                    
                

            </div>

        </div>
    </>
  )
}

export default Conversation

Conversation.propTypes = {
    recentPrompt : PropTypes.any,
    resultData : PropTypes.any,
    loading: PropTypes.bool
}


