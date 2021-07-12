import React from 'react'
import styled from 'styled-components'
import ShareImg from '../assets/person/1.jpeg'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'



export default function Share() {
    return (
        <WShare>
            <WShareWrapper>
                <WShareTop>
                    <WShareProfileImg src={ShareImg} alt="fakeImg" />
                    <WShareInput placeholder="What is your mind" />
                </WShareTop>
            </WShareWrapper>
            <WShareHr />
            <WShareBottom>
                <WShareOptions>
                    <WShareOption>
                        <WPermMediaIcon htmlColor="tomato" />
                        <WShareOptionText>
                            Photo or Video
                        </WShareOptionText>
                    </WShareOption>
                    <WShareOption>
                        <WLabelIcon htmlColor="blue" />
                        <WShareOptionText>
                            Tag
                        </WShareOptionText>
                    </WShareOption>
                    <WShareOption>
                        <WRoomIcon htmlColor="green" />
                        <WShareOptionText>
                            Location
                        </WShareOptionText>
                    </WShareOption>
                    <WShareOption>
                        <WEmojiEmotionsIcon htmlColor="goldenrod" />
                        <WShareOptionText>
                            Feeling
                        </WShareOptionText>
                    </WShareOption>
                    <WShareButton>
                        Share
                    </WShareButton>
                </WShareOptions>
            </WShareBottom>
        </WShare>
    )
}

const WShare = styled.div`
    width: 100%;
    height:170px;
    border-radius: 10px;
    box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);   
`

const WShareWrapper = styled.div`
    padding:10px;
`

const WShareTop = styled.div`
    display: flex;
    align-items: center;
`

const WShareProfileImg = styled.img`
    width:50px;
    height:50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right:10px;
`
const WShareInput = styled.input`
    border:none;
    width:80%;
    &:focus{
       outline:none; 
    }
`

const WShareHr = styled.hr`
    margin: 20px;
`

const WShareBottom = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const WShareOptions = styled.div`
    display:flex;
    margin-left:20px;
`

const WShareOption = styled.div`
    display:flex;
    align-items: center;
    margin-right: 15px;
    cursor:pointer;
`


const WPermMediaIcon = styled(PermMedia)`
    font-size: 18px;
    margin-right:3px;
`

const WLabelIcon = styled(Label)`
    font-size: 18px;
    margin-right: 3px;
`

const WRoomIcon = styled(Room)`
    font-size: 18px;
    margin-right: 3px;
`

const WEmojiEmotionsIcon = styled(EmojiEmotions)`
    font-size: 18px;
    margin-right: 3px;
`

const WShareOptionText = styled.span`
    font-size: 14px;
    font-weight: bold;
`

const WShareButton = styled.button`
    border:none;
    padding: 7px;
    border-radius:5px;
    background-color: green;
    font-weight: bold;
    margin-right: 20px;
    cursor:pointer;
    color:white;

`
