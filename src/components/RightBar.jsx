import React from 'react'
import styled from 'styled-components'
import BirthdayImg from '../assets/gift.png'
import AdImg from '../assets/ad.png'

import { Users } from '../dummyData'
import OnlineFriend from './OnlineFriend'

export default function RightBar() {

    const RenderUser = Users.map(user => <OnlineFriend key={user.id} user={user} />)
    return (
        <WRightBar>
            <WRightBarContainer>
                <WBirthdayContainer>
                    <WBirthdayImg src={BirthdayImg} alt="birthdayImg" />
                    <WBirthdayText>
                        <b>Pola Foster</b> and <b>3 other friends</b>  have a birthday toady
                    </WBirthdayText>
                </WBirthdayContainer>
                <WRightBarAd src={AdImg} alt="adImg" />
                <WRightTitle>Online Friends</WRightTitle>
                <WRightBarFriendList>
                    {RenderUser}
                </WRightBarFriendList>
            </WRightBarContainer>
        </WRightBar>
    )
}

const WRightBar = styled.div`
    flex: 3.5;
    overflow-y: scroll;
    height: calc(100vh - 50px);
`

const WRightBarContainer = styled.div`
    padding: 20px 20px 0 0;
`

const WBirthdayContainer = styled.div`
    display:flex;
    align-items: center;
`

const WBirthdayImg = styled.img`
    width:40px;
    height:40px;
    margin-right: 10px;
`

const WBirthdayText = styled.span`
    font-weight: 300;
    font-size: 15px;
`;

const WRightBarAd = styled.img`
    width:100%;
    border-radius: 10px;
    margin:30px 0;
`

const WRightTitle = styled.h4`
    margin-bottom: 20px;
`

const WRightBarFriendList = styled.ul`

`

