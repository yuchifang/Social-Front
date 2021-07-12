import React from 'react'
import styled from 'styled-components'
import Share from './Share'
import Post from './Post'
import { Posts } from '../dummyData'

export default function Feed() {

    const PostRender = Posts.map(item =>
        <Post
            post={item}
            key={item.id} />)

    return (
        <WFeed>
            <WFeedContainer>
                <Share />
                {PostRender}
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