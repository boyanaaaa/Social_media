import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";

function Topbar() {
  const [userQuery, setUserQuery] = useState('');
  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter'){
      searchQuery();
    }
  }
  const updateUserQuery = event => {
    setUserQuery(event.target.value);
  }




  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">BoyanaSocials</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon"/>
          <input placeholder="Search friends, post or video..." value={userQuery} className="searchInput" onChange={updateUserQuery} onKeyPress={handleKeyPress}/>
          <button onClick={searchQuery} className="searchButton">Search</button>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItems">
            <ChatIcon />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItems">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        <img  className="topbarImg" src="https://i.pinimg.com/736x/c0/08/16/c008166bc4dfba83586da76d7d80105e.jpg"/>
      </div>
    </div>
  )
}

export default Topbar