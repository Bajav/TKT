import React, { useState } from 'react';

const PassengerSelector = () => {
    const [passengers, setPassengers] = useState({
        adults: 1,
        children: 0,
        infants: 0
    });

    const increment = (type) => {
        setPassengers(prev => ({
            ...prev,
            [type]: prev[type] + 1
        }));
    };

    const decrement = (type) => {
        setPassengers(prev => ({
            ...prev,
            [type]: prev[type] > 0 ? prev[type] - 1 : 0
        }));
    };

    const getTotalPassengers = () => {
        return passengers.adults + passengers.children + passengers.infants;
    };

    return (
        <div className="passenger-selector">
            <h3>Select Passengers</h3>
            <div className="passenger-type">
                <div className="passenger-label">Adults</div>
                <button onClick={() => decrement('adults')} disabled={passengers.adults <= 1}>-</button>
                <span>{passengers.adults}</span>
                <button onClick={() => increment('adults')}>+</button>
            </div>
            <div className="passenger-type">
                <div className="passenger-label">Children</div>
                <button onClick={() => decrement('children')} disabled={passengers.children <= 0}>-</button>
                <span>{passengers.children}</span>
                <button onClick={() => increment('children')}>+</button>
            </div>
            <div className="passenger-type">
                <div className="passenger-label">Infants</div>
                <button onClick={() => decrement('infants')} disabled={passengers.infants <= 0}>-</button>
                <span>{passengers.infants}</span>
                <button onClick={() => increment('infants')}>+</button>
            </div>
            <div className="passenger-summary">
                <strong>Total Passengers:</strong> {getTotalPassengers()}
            </div>
        </div>
    );
};

export default PassengerSelector;
