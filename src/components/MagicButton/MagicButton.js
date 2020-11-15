import React, { useRef, useState } from 'react';

import { StyledButton } from './styledComponents';
import { buttonColors } from './colors';

const MagicButton = ({ type, label }) => {
    const [ colorsIndex, setColorsIndex ] = useState(0);

    const buttonRef = useRef(null);

    const changeButtonColor = () => {
        const nextColorsIndex = (colorsIndex + 1) % buttonColors.length;

        buttonRef.current.style.backgroundColor = buttonColors[nextColorsIndex].background;
        buttonRef.current.style.borderColor = buttonColors[nextColorsIndex].border;
        setColorsIndex(nextColorsIndex);
    };

    const eventProps = type === 'click' ? { onClick: changeButtonColor } : { onMouseEnter: changeButtonColor };

    return <StyledButton type="button" ref={buttonRef} {...eventProps}>{label}</StyledButton>;
};

export default MagicButton;
