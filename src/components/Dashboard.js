import React, { useContext } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Chart } from './Chart';
import { Total } from './Total';
import { AddCar } from './AddCar';
import { Context, ACTIONS } from '../redux/store';

export let Dashboard = () => {
    let state = useContext(Context);

    return (
        <Container maxWidth="lg" className="car-container">
            <h4>Welcome, {`${state.Store.user.username}`}</h4>
            <div className="flex-container">
                <Chart store={state.Store} />
                <Total store={state.Store} />
                <AddCar dispatch={state.Dispatch} />
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
                    {state.Store.cars.map(car => (
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
                                    onClick={() => state.Dispatch({ type: ACTIONS.DELETE_CAR, payload: { id: car.id } })}
                                    className="icon text-red" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
};
