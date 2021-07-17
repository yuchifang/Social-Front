import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import RightBar from '../components/RightBar/RightBar'

export default function Home() {
    return (
        <>
            <NavBar />
            <WHomeContainer>
                <SideBar></SideBar>
                <Feed></Feed>
                <RightBar></RightBar>
            </WHomeContainer>
        </>
    )
}

const WHomeContainer = styled.div`
    display:flex;
    width: 100%;
`