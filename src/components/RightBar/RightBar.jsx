import React from 'react'
import styled from 'styled-components'

import HomeRightBar from './HomeRightBar'
import ProfileRightBar from './ProfileRightBar'
export default function RightBar({ profile }) {


    return (
        <WRightBar>
            <WRightBarContainer>
                {profile ? <HomeRightBar /> : <ProfileRightBar />}
            </WRightBarContainer>
        </WRightBar>
    )
}

const WRightBar = styled.div`
    flex: 3.5;
    overflow-y: scroll;
    height: calc(100vh - 50px);
    top:50px;
    position:sticky;
`

const WRightBarContainer = styled.div`
    padding: 20px 20px 0 0;
`

