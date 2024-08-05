import { createContext, useState } from "react";

import run from './../config/gemini';
import { PropTypes } from 'prop-types';

export const Context = createContext();

/* eslint-disable  */


const ContextProvider = (props) => {


  const [input,setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult,setShowResult] = useState(false);
  const [loading,setLoading] = useState(false);
  const [resultData,setResultData] = useState("");
  const [previousData,setPreviousData] = useState([]);


  const delayParagraph = (i, eachWord) => {
    setTimeout(() => {
      setResultData(pre => pre + eachWord);
    }, 60 * i);
  }

  const newChat = () => {
    setLoading(false)
    setShowResult(false)
  }

  const onSent = async (prompt) => {

    
    try {
      setResultData("")
      setLoading(true)
      setShowResult(true)
      let response;

      if(prompt !== undefined) {
  
        response =  await run(prompt);
        setRecentPrompt(prompt)
      
      }else{

        setPreviousPrompt(prev => [...prev,input]);
        setRecentPrompt(input)
        response =  await run(input);
      }
      
      let responseArray = await response.split("**");
      let newResponse;
  
      responseArray.forEach((e,i)=> {
        if(i == 0 || i%2 !== 1 ) newResponse += e
        newResponse += "<b>" + responseArray[i] + "</b>"
      });
  
      let newResponse_2 = newResponse.split("*").join("</br>");
  
      setPreviousData(prevData => [...prevData,newResponse_2]);
      
      newResponse_2.split(" ").forEach((e,i) => {
        delayParagraph( i , e + " " )
      });
    } catch (error) {
      console.log(error);
      
    } finally {   
      setLoading(false)
      setInput("")
    }

  

    //  await run(input);
  };

  // onSent("Hello");



  const contextValue = {
    setInput,
    input,
    setRecentPrompt,
    recentPrompt,
    previousPrompt,
    setPreviousPrompt,
    showResult,
    loading,
    resultData,
    onSent,
    previousData,
    setPreviousData,
    previousData,
    newChat

  };
  
  return (
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  

export default ContextProvider;
