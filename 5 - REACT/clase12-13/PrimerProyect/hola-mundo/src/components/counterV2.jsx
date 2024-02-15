import React, { useState } from 'react';

const CounterV2 = props => {
    const [state, setState] = useState({
        clickCount: 0
    });
    const handleClick = () => {
        setState({
            clickCount: state.clickCount + 1
        });
    }

    return (
        <div>
            {state.clickCount}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default CounterV2;