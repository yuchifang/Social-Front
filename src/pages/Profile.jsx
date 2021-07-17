import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import RightBar from '../components/RightBar/RightBar'
import ProfileImg from '../assets/post/3.jpeg'
import PersonImg from '../assets/person/7.jpeg'

export default function Profile() {
    return (
        <>
            <NavBar />
            <WProfile>
                <SideBar></SideBar>
                <WProfileRight>
                    <WProfileRightTop>
                        <WProfileCover>
                            <WProfileCoverImg src={ProfileImg} alt="fakeImg" />
                            <WProfileUserImg src={PersonImg} alt="fakeImg" />
                        </WProfileCover>
                        <WProfileInfo>
                            <WProfileInfoName>Dan</WProfileInfoName>
                            <WProfileInfoDesc>Dan Desc</WProfileInfoDesc>
                        </WProfileInfo>
                    </WProfileRightTop>
                    <WProfileRightBottom>
                        <Feed />
                        <RightBar />
                    </WProfileRightBottom>
                </WProfileRight>
            </WProfile>
        </>
    )
}

const WProfile = styled.div`
    display:flex;
`

const WProfileRight = styled.div`
    flex:9;
`

const WProfileRightTop = styled.div`
    // display:flex;
`

const WProfileRightBottom = styled.div`
    display:flex;
`

const WProfileCoverImg = styled.img`
    width: 100%;
    height: 250px;
`

const WProfileCover = styled.div`
    height:320px;
    position:relative;
`

const WProfileUserImg = styled.img`
    width:150px;
    height:150px;
    position:absolute;
    object-fit:cover;
    left:0;
    right:0;
    top:150px;
    border:3px solid white;
    border-radius: 50%;
    margin:auto;
`

const WProfileInfo = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`

const WProfileInfoName = styled.h4`
    font-size:24px;
`

const WProfileInfoDesc = styled.span`
    font-weight:bold;
`