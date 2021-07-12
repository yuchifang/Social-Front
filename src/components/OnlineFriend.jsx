import React from 'react'
import styled from 'styled-components'
const image = require.context('../', true)
export default function OnlineFriend({ user }) {

    const userName = user.username
    const profilePictureImg = user?.profilePicture ? image(`./${user?.profilePicture}`).default : ""
    return (
        <WRightBarFriend>
            <WRightBarProfileImgContainer>
                <WRightBarProfileImg src={profilePictureImg} alt="person" />
                <WRightBarOnline />
            </WRightBarProfileImgContainer>
            <WRightBarUsername>
                {userName}
            </WRightBarUsername>
        </WRightBarFriend>
    )
}

const WRightBarFriend = styled.li`
    display:flex;
    align-items: center;
    margin-bottom: 15px;
`

const WRightBarProfileImgContainer = styled.div`
    margin-right: 10px;
    position: relative;
`;

const WRightBarProfileImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const WRightBarOnline = styled.span`
    width:12px;
    height: 12px;
    border-radius: 50%;
    background-color:limegreen;
    position:absolute;
    top: -2px;
    right:0;
    border:2px solid white;
`

const WRightBarUsername = styled.div`
    font-weight: bold;
`