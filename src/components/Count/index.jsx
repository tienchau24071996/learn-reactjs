import React, { useState } from 'react';
import PropTypes from 'prop-types';

Count.propTypes = {
    
};

function Count(props) {

    const [count,setCount] = useState(0);

    return (
        <div>
            <h2>
                Count: {count}
            </h2>
            <button onClick={() => setCount(x => x - 1)}>-</button>
            <button onClick={() => setCount(x => x + 1)}>+</button>
        </div>
    );
}

export default Count;