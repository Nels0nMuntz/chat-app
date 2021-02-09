import React from 'react';
import styled from 'styled-components';
import generateAvatar from '../../utils/generateAvatar/generateAvatar';
import { User } from '../../redux/dialogs/types'

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

type Props = {
    user: User
}

const Avatar: React.FC<Props> = ({ user }) => {

    const hasAvatar = !!user.avatar;
 
    return (
        <Wrapper
            color={!hasAvatar ? generateAvatar(user.firstName) : undefined}
        >
            {hasAvatar ? (
                <img className="circle-form" src={user.avatar} alt="avatar"/>
            ) : (
                <div className="circle-form"><span>{user.firstName[0]}</span></div>
            )}
            <span></span>
        </Wrapper>
    );
};

export default Avatar;