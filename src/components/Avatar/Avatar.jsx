import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import avatarUrl from './../../assets/images/ava.png'

const Avatar = ({ user }) => {

    const Wrapper = styled.div`
    position: relative;
    & img{
        width: 42px;
        height: 42px;
        border-radius: 50%;
        object-fit: cover;
    }
    `
 
    return (
        <Wrapper>
            <img src={avatarUrl} alt="avatar"/>
            <span></span>
        </Wrapper>
    )
};

Avatar.propTypes = {
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
};

export default Avatar
