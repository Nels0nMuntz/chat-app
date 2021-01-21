import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbar = ({ children }) => {
    return (
        <Scrollbars>
            {children}
        </Scrollbars>
    )
};

export default CustomScrollbar;
