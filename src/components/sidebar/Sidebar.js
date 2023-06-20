import "./sidebar.css"
import FeedIcon from '@mui/icons-material/Feed';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Users } from "../../userData";
import CloseFriends from "../closeFriend/CloseFriends"


function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <FeedIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Feed</span>
                </li>

                <li className="sidebarListItem">
                <QuestionAnswerIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Chats</span>
                </li>

                <li className="sidebarListItem">
                <PlayCircleIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Video</span>
                </li>

                <li className="sidebarListItem">
                <GroupIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Groups</span>
                </li>

                <li className="sidebarListItem">
                <BookmarksIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Bookmarks</span>
                </li>

                <li className="sidebarListItem">
                <HelpOutlineIcon className="sidebarIcon" />
                <span className="sidebarListItemText">Questions</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                {Users.map(u=>(
                    <CloseFriends key={u.id} user={u} />
                ))}

            </ul>
        </div>
    </div>
  )
}

export default Sidebar