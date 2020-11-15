import React from 'react';

import { StyledButton } from './styledComponents';

const MagicButtonWithForwardRef = React.forwardRef((props, ref) => (
    <StyledButton type="button" ref={ref} onClick={props.onClick}>{props.label}</StyledButton>
));

export default MagicButtonWithForwardRef;
