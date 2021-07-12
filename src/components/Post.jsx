import React from 'react'
import styled from 'styled-components'
import { MoreVert } from '@material-ui/icons'

import ProfileImg from '../assets/person/1.jpeg'
import PostImg from '../assets/post/1.jpeg'
import heartImg from '../assets/heart.png'
import likeImg from '../assets/like.png'

export default function Post() {
    return (
        <WPost>
            <WPostContainer>
                <WPostTop>
                    <WPostTopLeft>
                        <WPostProfileImg src={ProfileImg} alt="fakeImg" />
                        <WPostUsername>Something</WPostUsername>
                        <WPostDate>5 min go</WPostDate>
                    </WPostTopLeft>
                    <WPostTopRight>
                        <WMoreVertIcon />
                    </WPostTopRight>
                </WPostTop>
                <WPostCenter>
                    <WPostText>Hey its my first post</WPostText>
                    <WPostImg src={PostImg} alt="fakeImg" />
                </WPostCenter>
                <WPostBottom>
                    <WPostBottomLeft>
                        <WLeftPostIcon src={heartImg} />
                        <WLeftPostIcon src={likeImg} />
                        <WPostLikeCounter>32 people like it</WPostLikeCounter>
                    </WPostBottomLeft>
                    <WPostBottomRight>
                        <WPostCommentText>
                            9 comments
                        </WPostCommentText>
                    </WPostBottomRight>
                </WPostBottom>
            </WPostContainer>
        </WPost>
    )
}

const WPost = styled.div`
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
    margin:30px 0;
`

const WPostContainer = styled.div`
    padding: 10px;
`

const WPostTop = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

`

const WPostTopLeft = styled.div`
    display:flex;
    align-items:center;
`

const WPostTopRight = styled.div``

const WMoreVertIcon = styled(MoreVert)`

`

const WPostProfileImg = styled.img`
    width:32px;
    height:32px;
    border-radius: 50%;
    object-fit: cover;
`

const WPostUsername = styled.span`
    font-size: 15px;
    font-weight: bold;
    margin: 0 10px;
`

const WPostDate = styled.span`
    font-size: 12px;
`

const WPostCenter = styled.div`
    margin: 20px 0;
`

const WPostText = styled.span``;

const WPostImg = styled.img`
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit:contain;
`

const WPostBottom = styled.div`
    display:flex;
    align:-items:center;
    justify-content:space-between;
`;

const WPostBottomLeft = styled.div`
    display:flex;
    align-items: center;
`;

const WLeftPostIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 5px;
    cursor:pointer;
`;

const WPostBottomRight = styled.div``

const WPostLikeCounter = styled.span`
    font-size: 15px;
`

const WPostCommentText = styled.span`
    cursor:pointer;
    border-bottom: 1px dashed gray;
    font-size: 15px;
`