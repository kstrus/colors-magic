import React, { useState, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import MagicButton from './components/MagicButton/MagicButton';
import MagicButtonWithForwardRef from './components/MagicButton/MagicButtonWithForwardRef';
import { buttonColors } from './components/MagicButton/colors';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        margin: 0;
        background-color: #f6e58d;
    }
`;

const StyledWrapper = styled.div`
    margin: 50px;
`;

const StyledTitle = styled.div`
    margin: 0 auto 50px;
    font-size: 24px;
    text-align: center;
    color: #130f40;
`;

function App() {
    const [ colorsIndex, setColorsIndex ] = useState(0);
    const buttonRef = useRef(null);

    const changeButtonColor = () => {
        const nextColorsIndex = (colorsIndex + 1) % buttonColors.length;

        buttonRef.current.style.backgroundColor = buttonColors[nextColorsIndex].background;
        buttonRef.current.style.borderColor = buttonColors[nextColorsIndex].border;
        setColorsIndex(nextColorsIndex);
    };

    return (
        <React.Fragment>
            <GlobalStyle />
            <StyledWrapper>
                <StyledTitle>Let's refs magic happen!</StyledTitle>
                <MagicButton type="click" label="Click me!" />
                <MagicButton type="hover" label="Enter me!" />
                <MagicButtonWithForwardRef ref={buttonRef} label="Click me too!" onClick={changeButtonColor} />
            </StyledWrapper>
        </React.Fragment>
    );
}

export default App;
