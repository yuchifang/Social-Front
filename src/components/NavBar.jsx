import React from 'react'
import styled from 'styled-components'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import someImg from '../assets/person/1.jpeg'
export default function NavBar() {
    return (
        <WNavbarContainer>
            <WNavbarLeft>
                <WLogo>Something</WLogo>
            </WNavbarLeft>
            <WNavbarCenter>
                <WSearchBar>
                    <WSearchIcon />
                    <WSearchInput></WSearchInput>
                </WSearchBar>
            </WNavbarCenter>
            <WNavbarRight>
                <WNavBarLinks>
                    <WNavBarLink>
                        Home
                    </WNavBarLink>
                    <WNavBarLink>
                        Timeline
                    </WNavBarLink>
                </WNavBarLinks>
                <WNavBarIcons>
                    <WNavBarIconItem>
                        <Person />
                        <WNavBarIconBadge>1</WNavBarIconBadge>
                    </WNavBarIconItem>
                    <WNavBarIconItem>
                        <Chat />
                        <WNavBarIconBadge>2</WNavBarIconBadge>
                    </WNavBarIconItem>
                    <WNavBarIconItem>
                        <Notifications />
                        <WNavBarIconBadge>1</WNavBarIconBadge>
                    </WNavBarIconItem>
                </WNavBarIcons>
                <WNavBarImg src={someImg} alt="fakeImg" />
            </WNavbarRight>
        </WNavbarContainer>
    )
}

const WNavbarContainer = styled.div`
    height:50px;
    width: 100%;
    display:flex;
    align-items:center;
    background-color:#1877f2;
    position:sticky;
    top:0;
    z-index:10;
`

const WNavbarLeft = styled.div`
    flex: 3;
`

const WLogo = styled.span`
    font-size: 24px;
    margin-left: 20px;
    font-weight:bold;
    color:white;
    cursor:pointer;
`

const WNavbarCenter = styled.div`
    flex: 5;
`

const WSearchBar = styled.div`
    width:100%;
    height:30px;
    background-color:white;
    border-radius:30px;
    display:flex;
    align-items:center;
`
const WSearchIcon = styled(Search)`
    font-size:20px;
    margin-left:10px;
`

const WSearchInput = styled.input.attrs({
    placeHolder: "Search for friend, post or video"
})`
    border:none;
    width: 70%;
    &:focus{
        outline: none;
    }
`

const WNavbarRight = styled.div`
    display:flex;
    flex: 4;
    align-items:center;
    justify-content:space-around;
    color:white;
`


const WNavBarLinks = styled.div`
`

const WNavBarLink = styled.span`
    margin-right: 10px;
    font-size: 14px;
    cursor:pointer;
   
`

const WNavBarIcons = styled.div`
    display:flex;
`

const WNavBarIconItem = styled.div`
    margin-right: 15px;
    cursor:pointer;
    position:relative;
`

const WNavBarIconBadge = styled.span`
    width:15px;
    height:15px;
    background-color: red;
    border-radius: 50%;
    color:white;
    position: absolute;
    top: -5px;
    right: -5px;
    line-height: 15px;
    text-align: center;
    font-size:12px
`

const WNavBarImg = styled.img`
    width:32px;
    height:32px;
    border-radius: 50%;
    object-fit:cover;
    cursor:pointer;

`