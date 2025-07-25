
import { Button } from '@mui/material';

import React from 'react';

const Mybutton = ({ variant, color , text,type}) => {
    return(
    <Button type = {type} variant={variant} color={color}>
        {text} 
    </Button>
    );
    
};
export default Mybutton;