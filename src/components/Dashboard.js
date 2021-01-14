import React, { useContext, useReducer } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Chart } from './Chart';
import { Total } from './Total';
import { StoreContext } from '../redux/store';
import { AddCar } from './AddCar';
import { ACTIONS, reducer } from '../redux/reducers';

export let Dashboard = (props) => {
    let { store } = useContext(StoreContext);
    let [dispatch] = useReducer(reducer, store);

    return (
        <Container maxWidth="lg" className="car-container">
            <h4>Welcome, {`${store.user.username}`}</h4>
            <div className="flex-container">
                <Chart store={store} />
                <Total store={store} />
                <AddCar dispatch={dispatch} />
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make/Model</TableCell>
                        <TableCell>MPG</TableCell>
                        <TableCell>Cylinders</TableCell>
                        <TableCell>Horsepower</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {store.cars.map(car => (
                        <TableRow key={car.id}>
                            <TableCell component="th" scope="row">
                                {car.id}
                            </TableCell>
                            <TableCell>{car["name"]}</TableCell>
                            <TableCell>{car["mpg"]}</TableCell>
                            <TableCell>{car["cylinders"]}</TableCell>
                            <TableCell>{car["horsepower"]}</TableCell>
                            <TableCell>
                                <DeleteIcon
                                    onClick={() => dispatch({ type: ACTIONS.DELETE_CAR, payload: { id: car.id } })}
                                    className="icon text-red" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
};
