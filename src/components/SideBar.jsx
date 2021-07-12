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
import FriendImg from '../assets/person/2.jpeg'
import CloseFriend from './CloseFriend'
import { Users } from '../dummyData'

export default function SideBar() {

    const RenderCloseFriend = Users.map(user => <CloseFriend user={user} />)
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
                    {RenderCloseFriend}
                </WSideBarFriendList>
            </WSideContainer>
        </WSideBar>
    )
}

const WSideBar = styled.div`
    flex: 3;
    height:calc(100vh - 50px);
    overflow-y: scroll;
    position:sticky;
    top:50px;
    &::-webkit-scrollbar {
        width: 7px;
    }
    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
       
    }
    &::-webkit-scrollbar-thumb {
        background-color:rgb(179,179,179);
        border-radius: 10px;
    }

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

const WSidebarButton = styled.button`
    width:150px;
    border:none;
    padding: 10px;
    font-weight:bold;
    border-radius:5px;
    cursor:pointer;
`;

const WSideBarHr = styled.hr`
    margin:20px 0px;
`

const WSideBarFriendList = styled.ul`

`;

const WSideBarFriend = styled.li`
    display:flex;
    align-items:center;
    margin-bottom:15px;
    width:150px;
`

const WSideBarFriendImg = styled.img`
    width:32px;
    height:32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

const WSideBarFriendName = styled.span``;
