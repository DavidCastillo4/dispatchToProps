import React, { useState, createContext } from 'react';
import {state} from './state'
export let StoreContext = createContext();

export let StoreProvider = (props) => {
  let [store, setStore] = useState(state);
  return (
    <StoreContext.Provider value={{ store }}>
      {props.children}
    </StoreContext.Provider>
  );
};


