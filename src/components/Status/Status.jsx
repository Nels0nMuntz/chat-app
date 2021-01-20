import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Status.scss';

const Status = ({ isOnline }) => {
    return (
        <div className={classnames(
            "status",
            isOnline && "status-online"
        )}>
            {isOnline ? 'онлайн' : 'офлайн'}
        </div>
    )
};

Status.propTypes = {
    isOnline: PropTypes.bool.isRequired,
};

export default Status;
