/* eslint-disable no-unused-expressions */

import React from 'react';

import {StyledDisplay} from './styles/StyledDisplay';

const Display = ({ gameOver, text }) => {
    return(
        <StyledDisplay galeOver={gameOver}>
            {text}
        </StyledDisplay>
    );
}

export default Display;