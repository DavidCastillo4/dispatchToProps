import React from 'react';

export let Total = ({ store }) => {    
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Total:</h1>
            <h1>{store.cars.length}</h1>
        </div>
    )
};

