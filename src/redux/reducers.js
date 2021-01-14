export let ACTIONS = {
  ADD_CAR: 'add car',
  DELETE_CAR: 'delete car'
}

export let reducer = (stateVals, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CAR:
      return addCar(stateVals, action);
    case ACTIONS.DELETE_CAR:
      return deleteCar(stateVals, action);
    default:
      return { ...stateVals };
  }
};

let addCar = (val, action) => {
  ++val.counter;
  action.payload.id = val.counter;
  val.cars.push(action.payload);
  return { ...val }
};

let deleteCar = (val, action) => {
  let i = val.cars.findIndex(car => car.id === action.payload.id);
  val.cars.splice(i, 1);
  return { ...val }
};