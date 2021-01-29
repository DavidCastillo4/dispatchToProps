import React, { useReducer, createContext } from 'react';
import { initState } from './state';
export let Context = createContext();

export let ACTIONS = { ADD_CAR: 'add car', DELETE_CAR: 'delete car' };

let addCar = (state, action) => {    
  let id = Object.keys(state.cars).map(i => state.cars[i].id);  
  let maxId = Math.max(...id);    
  action.payload.id = maxId+1;
  state.cars.push(action.payload);
  return { ...state };
};

let deleteCar = (state, action) => {
  let index = state.cars.findIndex(car => car.id === action.payload.id);
  state.cars.splice(index, 1);
  return { ...state };
};

let reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CAR:
      return addCar(state, action);
    case ACTIONS.DELETE_CAR:
      return deleteCar(state, action);
    default:
      return { ...state };
  }
};

export let StoreProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, initState);
  return (
    <Context.Provider value={{ Store: state, Dispatch: dispatch }}>
      {children}
    </Context.Provider>
  );
};
