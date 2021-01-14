import React, {useContext} from 'react';
import { Card, CardContent, CardActions, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {StoreContext} from '../redux/store';

export let Home = (props) => {
    let { store } = useContext(StoreContext);
    return (
        <div className="card-container">            
            {store.cars.map((car, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{car.name.toUpperCase()}</span>
                        <ul>
                        <li>Miles per Gallon: {car["mpg"]}</li>
                        <li>Cylinders: {car["cylinders"]}</li>
                        <li>Horsepower: {car["horsepower"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/car/${car.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
};

