import React from 'react';

import spinner from '../assets/spinner.gif'

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='loading'/>
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;