import React from 'react'
import styled, { css } from 'styled-components'
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School
} from '@material-ui/icons'
import FriendImg from '../../assets/person/2.jpeg'


export default function SideBar() {
    return (
        <WSideBar>
            <WSideContainer>
                <WSideBarList>
                    <WSideBarListItem>
                        <WRssFeedIcon />
                        <WSideBarListItemText>Feed</WSideBarListItemText>
                    </WSideBarListItem>
                    <WSideBarListItem>
                        <WChatIcon />
                        <WSideBarListItemText>Chats</WSideBarListItemText>
                    </WSideBarListItem>
                    <WSideBarListItem>
                        <WPlayCircleFilledOutlinedIcon />
                        <WSideBarListItemText>Videos</WSideBarListItemText>
                    </WSideBarListItem>
                    <WSideBarListItem>
                        <WGroupIcon />
                        <WSideBarListItemText>Groups</WSideBarListItemText>
                    </WSideBarListItem>
                    <WSideBarListItem>
                        <WBookmarkIcon />
                        <WSideBarListItemText>Bookmarks</WSideBarListItemText>
                    </WSideBarListItem>
                    <WSideBarListItem>
                        <WHelpOutlineIcon />
                        <WSideBarListItemText>Questions</WSideBarListItemText>
                    </WSideBarListItem>
                    <WSideBarListItem>
                        <WWorkOutlineIcon />
                        <WSideBarListItemText>Jobs</WSideBarListItemText>
                    </WSideBarListItem>
                    <WSideBarListItem>
                        <WEventIcon />
                        <WSideBarListItemText>Events</WSideBarListItemText>
                    </WSideBarListItem>
                    <WSideBarListItem>
                        <WSchoolIcon />
                        <WSideBarListItemText>Courses</WSideBarListItemText>
                    </WSideBarListItem>
                </WSideBarList>
                <WSidebarButton>
                    Show More
                </WSidebarButton>
                <WSideBarHr />
                <WSideBarFriendList>
                    <WSideBarFriend>
                        <WSideBarFriendImg src={FriendImg} alt="fakeImg"></WSideBarFriendImg>
                        <WSideBarFriendName>Jane Doe</WSideBarFriendName>
                    </WSideBarFriend>
                </WSideBarFriendList>

            </WSideContainer>
        </WSideBar>
    )
}

const WSideBar = styled.div`
    flex: 3;
    height:calc(100vh - 50px);
`

const WSideContainer = styled.div`
    padding:20px;
`

const WSideBarList = styled.ul`

`

const WSideBarListItem = styled.li`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`

const Icon = css`
    margin-right: 15px;
`

const WRssFeedIcon = styled(RssFeed)`
    ${Icon}
`

const WChatIcon = styled(Chat)`
    ${Icon}
`

const WPlayCircleFilledOutlinedIcon = styled(PlayCircleFilledOutlined)`
    ${Icon}
`

const WGroupIcon = styled(Group)`
    ${Icon}
`

const WBookmarkIcon = styled(Bookmark)`
    ${Icon}
`

const WHelpOutlineIcon = styled(HelpOutline)`
    ${Icon}
`

const WWorkOutlineIcon = styled(WorkOutline)`
    ${Icon}
`

const WEventIcon = styled(Event)`
    ${Icon}
`

const WSchoolIcon = styled(School)`
    ${Icon}
`

const WSideBarListItemText = styled.span`

`

const WSidebarButton = styled.button``;

const WSideBarHr = styled.hr``

const WSideBarFriendList = styled.ul``;

const WSideBarFriend = styled.li``

const WSideBarFriendImg = styled.img``;

const WSideBarFriendName = styled.span``;
