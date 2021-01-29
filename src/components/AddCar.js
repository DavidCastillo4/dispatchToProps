import React, { Fragment, useState } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { ACTIONS } from '../redux/store';

export let AddCar = ({ dispatch }) => {  
  let vehicle = { 'id': 0, 'name': '', 'mpg': '', 'cylinders': '', 'horsepower': '' };
  let [dialog, setDialog] = useState(false);
  let [state, setState] = useState(vehicle);

  let toggleDialog = () => setDialog((prevState) => !prevState);

  let txtChange = (e) => {    
    let newState = { ...state };
    newState[e.target.id] = e.target.value;
    setState(newState);
  };

  let submit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_CAR, payload: { ...state } })
    setState(vehicle);
    toggleDialog();
  };

  return (
    <Fragment>
      <div style={{ textAlign: 'center' }}>
        <h1>Add Car:</h1>
        <Button variant="contained" className="add-car" onClick={toggleDialog}>Add Car</Button>
      </div>
      <Dialog open={dialog} onClose={toggleDialog} >
        <DialogTitle>Add New Car</DialogTitle>
        <DialogContent>
          <form onSubmit={submit}
            style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
            <TextField id="name" placeholder="Name" value={state.name}
              onChange={(e) => txtChange(e)}
              required />
            <TextField id="mpg" placeholder="Miles per gallon" value={state.mpg}
              onChange={(e) => txtChange(e)}
              required />
            <TextField id="cylinders" placeholder="Cylinders" value={state.cylinders}
              onChange={(e) => txtChange(e)}
              required />
            <TextField id="horsepower" placeholder="Horsepower" value={state.horsepower}
              onChange={(e) => txtChange(e)}
              required />
            <br />
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  )
};


