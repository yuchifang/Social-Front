import React from 'react'
import styled from 'styled-components'
import Share from './Share'
import Post from './Post'
import { Posts } from '../dummyData'
export default function Feed() {
    return (
        <WFeed>
            <WFeedContainer>
                <Share />
                <Post />
                <Post />
                <Post />
            </WFeedContainer>
        </WFeed>
    )
}


const WFeed = styled.div`
    flex:5.5
`

const WFeedContainer = styled.div`
    padding:20px;
`