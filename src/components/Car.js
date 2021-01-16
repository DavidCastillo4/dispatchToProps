import React, { useContext } from 'react';
import { Container, Paper, Chip } from '@material-ui/core';
import { Context } from '../redux/store';

export let Car = (props) => {
    let id = props.match.params.id;
    let state = useContext(Context);
    let car = state.Store.cars.find(c => c.id.toString() === id)
    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{car.name}</h2>
                {
                    Object.keys(car).map((key, idx) => {
                        return <Chip key={idx} label={`${key}: ${car[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
};

