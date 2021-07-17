import React from 'react'
import styled from 'styled-components'
import FollowingImg from '../../assets/person/1.jpeg'

const ProfileRightBar = () => {
    return (
        <>
            <RightBarTitle>User Information</RightBarTitle>
            <RightBarInfo>
                <RightBarInfoItem>
                    <RightBarInfoKey>
                        City:
                    </RightBarInfoKey>
                    <RightBarInfoValue>
                        New York
                    </RightBarInfoValue>
                </RightBarInfoItem>
                <RightBarInfoItem>
                    <RightBarInfoKey>
                        From:
                    </RightBarInfoKey>
                    <RightBarInfoValue>
                        Madrid
                    </RightBarInfoValue>
                </RightBarInfoItem>
                <RightBarInfoItem>
                    <RightBarInfoKey>
                        Relationship:
                    </RightBarInfoKey>
                    <RightBarInfoValue>
                        Single
                    </RightBarInfoValue>
                </RightBarInfoItem>
            </RightBarInfo>
            <RightBarTitle>User friends</RightBarTitle>
            <RightBarFollowings>
                <RightBarFollowing>
                    <RightBarFollowingImg src={FollowingImg} alt="fakeImg" />
                    <RightBarFollowingName>John Car</RightBarFollowingName>
                </RightBarFollowing>
                <RightBarFollowing>
                    <RightBarFollowingImg src={FollowingImg} alt="fakeImg" />
                    <RightBarFollowingName>John Car</RightBarFollowingName>
                </RightBarFollowing>
                <RightBarFollowing>
                    <RightBarFollowingImg src={FollowingImg} alt="fakeImg" />
                    <RightBarFollowingName>John Car</RightBarFollowingName>
                </RightBarFollowing>
                <RightBarFollowing>
                    <RightBarFollowingImg src={FollowingImg} alt="fakeImg" />
                    <RightBarFollowingName>John Car</RightBarFollowingName>
                </RightBarFollowing>
                <RightBarFollowing>
                    <RightBarFollowingImg src={FollowingImg} alt="fakeImg" />
                    <RightBarFollowingName>John Car</RightBarFollowingName>
                </RightBarFollowing>
            </RightBarFollowings>
        </>
    )
}

const RightBarTitle = styled.h4`
    font-size: 18px;
    font-weight: bold;
    margin-bottom:10px;
`

const RightBarInfo = styled.div`
    margin-bottom:30px;
`

const RightBarInfoItem = styled.div`
    margin-bottom:10px;
`

const RightBarInfoKey = styled.span`
    font-weight:bold;
    margin-right: 15px;
    color:#555;
`

const RightBarInfoValue = styled.span`
    font-weight: bold;
`

const RightBarFollowings = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: start;
`;

const RightBarFollowing = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom:20px;
    margin-right:20px;
    cursor:pointer;
`

const RightBarFollowingImg = styled.img`
    width: 100px;
    height:100px;
    object-fit:cover;
    border-radius:5px;
`

const RightBarFollowingName = styled.span``

export default ProfileRightBar