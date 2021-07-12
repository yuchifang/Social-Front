import React from 'react'
import styled from 'styled-components'
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'
import Feed from '../../components/Feed'
import RightBar from '../../components/RightBar'

export default function Home() {
    return (
        <div>
            <NavBar />
            <WHomeContainer>
                <SideBar></SideBar>
                <Feed></Feed>
                <RightBar></RightBar>
            </WHomeContainer>
        </div>
    )
}

const WHomeContainer = styled.div`
    display:flex;
    width: 100%;
`