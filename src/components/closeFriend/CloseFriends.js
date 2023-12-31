import React from 'react'
import "./closeFriend.css"

function CloseFriends({user}) {
  return (
    <div>
        <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src={user.profilePicture} />
                    <span className="sidebarFriendName">{user.username}</span>
        </li>
    </div>
  )
}

export default CloseFriends