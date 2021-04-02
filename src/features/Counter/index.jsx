import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeatures.propTypes = {
    
};

function CounterFeatures(props) {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count)
    
    const handleIncreaseClick = () =>{
        const action = increase();
        console.log(action);
        dispatch(action);
    }

    const handleDecreaseClick = () =>{
        const action = decrease();
        console.log(action);
        dispatch(action);
    }

    return (
        <div>
            Counter Features : {count}

            <button onClick={handleIncreaseClick}>
                Increase
            </button>

            <button onClick={handleDecreaseClick}>
                Decrease
            </button>
        </div>
        
    );
}

export default CounterFeatures;