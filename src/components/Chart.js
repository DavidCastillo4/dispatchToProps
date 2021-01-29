import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export let Chart = ({ store }) => {    
    let over = store.cars.reduce((accumulator, car) =>
        accumulator + (car.horsepower >= 200 ? 1 : 0), 0
    );

    let under = store.cars.reduce((accumulator, car) =>
        accumulator + (car.horsepower < 200 ? 1 : 0), 0
    );

    let Legend = () => {
        return (
            <h6>Horsepower: &nbsp;
                <span style={{ background: '#C13C37' }}>&nbsp;&nbsp;&nbsp;</span>&nbsp;
                <span>Over 200</span>&nbsp;
                <span style={{ background: '#E38627' }}>&nbsp;&nbsp;&nbsp;</span>&nbsp;
                <span>Under 200</span>
            </h6>
        )
    };

    return (
        <div>
            <PieChart style={{ width: '200px', height: '200px' }}
                data={[
                    { title: 'Over', value: over, color: '#C13C37' },
                    { title: 'Under', value: under, color: '#E38627' }
                ]}
                label={({ dataEntry }) => dataEntry.value}
                labelStyle={{ fill: 'white', fontSize: 'small' }}
            />
            <Legend />
        </div>
    )
};


