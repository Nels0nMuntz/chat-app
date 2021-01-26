import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import generateAvatar from './../../utils/generateAvatar/generateAvatar';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%; 
    & .circle-form{
        width: 100%;
        height: 100%; 
        border-radius: 50%;
    }
    & > img{       
        object-fit: cover;
    };
    & > div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        font-weight: 700;
        color: white;
        background: ${props => `linear-gradient(135deg, ${props.color}, ${props.color}55)`}
    }
    `;

const Avatar = ({ user }) => {

    const hasAvatar = !!user.avatar;
 
    return (
        <Wrapper
            color={!hasAvatar ? generateAvatar(user.fullname) : null}
        >
            {hasAvatar ? (
                <img className="circle-form" src={user.avatar} alt="avatar"/>
            ) : (
                <div className="circle-form"><span>{user.fullname[0]}</span></div>
            )}
            <span></span>
        </Wrapper>
    )
};

Avatar.propTypes = {
    user: PropTypes.object,
};

export default Avatar
