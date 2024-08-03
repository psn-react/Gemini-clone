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
  const [previousData,setPreviousData] = useState("");

  const onSent = async (prompt) => {

    
    console.log("jelly");
    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    const response =  await run(input);
    setResultData(response)
    // setShowResult(false)
    setLoading(false)
    setInput("")

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
    setPreviousData

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
