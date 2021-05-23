import React, { useState } from 'react';
import PropTypes from 'prop-types';

Change.propTypes = {
    
};

function Change(props) {
    const [change, setChange] = useState("White")
    return (
        <div>
            <h1>{change}</h1>
            <button onClick={() => setChange(x => "Black")}>Black</button>
            <button onClick={() => setChange(x => "White")}>White</button>
        </div>
    );
}

export default Change;