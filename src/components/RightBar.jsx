import React from 'react'
import styled from 'styled-components'
import BirthdayImg from '../assets/gift.png'
import AdImg from '../assets/ad.png'
import PersonImg from '../assets/person/3.jpeg'

export default function RightBar() {
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
                    <WRightBarFriend>
                        <WRightBarProfileImgContainer>
                            <WRightBarProfileImg src={PersonImg} alt="person" />
                            <WRightBarOnline />
                        </WRightBarProfileImgContainer>
                        <WRightBarUsername>
                            John Carter
                        </WRightBarUsername>
                    </WRightBarFriend>
                    <WRightBarFriend>
                        <WRightBarProfileImgContainer>
                            <WRightBarProfileImg src={PersonImg} alt="person" />
                            <WRightBarOnline />
                        </WRightBarProfileImgContainer>
                        <WRightBarUsername>
                            John Carter
                        </WRightBarUsername>
                    </WRightBarFriend>  <WRightBarFriend>
                        <WRightBarProfileImgContainer>
                            <WRightBarProfileImg src={PersonImg} alt="person" />
                            <WRightBarOnline />
                        </WRightBarProfileImgContainer>
                        <WRightBarUsername>
                            John Carter
                        </WRightBarUsername>
                    </WRightBarFriend>  <WRightBarFriend>
                        <WRightBarProfileImgContainer>
                            <WRightBarProfileImg src={PersonImg} alt="person" />
                            <WRightBarOnline />
                        </WRightBarProfileImgContainer>
                        <WRightBarUsername>
                            John Carter
                        </WRightBarUsername>
                    </WRightBarFriend>  <WRightBarFriend>
                        <WRightBarProfileImgContainer>
                            <WRightBarProfileImg src={PersonImg} alt="person" />
                            <WRightBarOnline />
                        </WRightBarProfileImgContainer>
                        <WRightBarUsername>
                            John Carter
                        </WRightBarUsername>
                    </WRightBarFriend>  <WRightBarFriend>
                        <WRightBarProfileImgContainer>
                            <WRightBarProfileImg src={PersonImg} alt="person" />
                            <WRightBarOnline />
                        </WRightBarProfileImgContainer>
                        <WRightBarUsername>
                            John Carter
                        </WRightBarUsername>
                    </WRightBarFriend>
                </WRightBarFriendList>
            </WRightBarContainer>
        </WRightBar>
    )
}

const WRightBar = styled.div`
    flex: 3.5
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
