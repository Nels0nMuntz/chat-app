import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import generateAvatar from './../../utils/generateAvatar/generateAvatar';

const Wrapper = styled.div`
    position: relative;
    & .circle-form{
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
    & > img{        
        object-fit: cover;
    };
    & > div{
        text-align: center;
        line-height: 42px;
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
                <div className="circle-form">{user.fullname[0]}</div>
            )}
            <span></span>
        </Wrapper>
    )
};

Avatar.propTypes = {
    user: PropTypes.object,
};

export default Avatar
