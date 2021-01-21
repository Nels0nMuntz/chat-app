import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import ruLocale from "date-fns/locale/ru";


const Time = ({ date }) => {
    return (
        <p>{distanceInWordsToNow(new Date(date), { addSuffix: true, locale: ruLocale })}</p>
    )
};

Time.propTypes = {
    date: PropTypes.string,
};

export default Time
