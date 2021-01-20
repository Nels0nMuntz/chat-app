import React from 'react'
import PropTypes from 'prop-types';

import readed from './../../assets/images/checked.svg'
import noReaded from './../../assets/images/no-checked.svg'


const Check = ({ isReaded }) => {
    return (
        isReaded ? (
            <img src={readed} alt="check" />
        ) : (
                <img src={noReaded} alt="check" />
            )
    )
};

Check.propTypes = {
    isReaded: PropTypes.bool,
};

export default Check;
