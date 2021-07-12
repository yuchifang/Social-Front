import React from 'react'
import styled from 'styled-components'

const image = require.context('../', true)

export default function CloseFriend({ user }) {
    const userName = user.username
    const profilePictureImg = user?.profilePicture ? image(`./${user?.profilePicture}`).default : ""
    return (
        <WSideBarFriend>
            <WSideBarFriendImg src={profilePictureImg} alt="fakeImg"></WSideBarFriendImg>
            <WSideBarFriendName>{userName}</WSideBarFriendName>
        </WSideBarFriend>
    )
}


const WSideBarFriend = styled.li`
    display:flex;
    align-items:center;
    margin-bottom:15px;
    width:150px;
`

const WSideBarFriendImg = styled.img`
    width:32px;
    height:32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

const WSideBarFriendName = styled.span``;