import { createContext } from "react";

import run from './../config/gemini';
import { PropTypes } from 'prop-types';

export const Context = createContext();



const ContextProvider = (props) => {


  const onSent = async (prompt) => {
    await run(prompt);
  };

  onSent("can u tell me your version?");



  const contextValue = {


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
