import "./rightbar.css"
import { Users } from "../../userData"
import Online from "../online/Online"

function Rightbar({ profile }) {


  
  const HomeRightbar = () => {
    return(
      <>
      
        <div className="birthdayContainer">
          <img className="birthdayImg" src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Happy-Birthday-Gift-Green-and-Light-Blue-by-Surya-Darmawan-580x386.jpg" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends </b> have birthday todat</span>
        </div>
        <img className="rightbarAd" src="https://images.saymedia-content.com/.image/t_share/MTg4NzYyNjY1OTAyOTQxNzI4/alternative-ways-to-say-happy-birthday.png"/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">

          {Users.map(u=>(
            <Online key={u.id} user={u} />
            ))}
        </ul>
          </>
        )  
        };

     const ProfileRightbar = () => {
        return (
          <>
          <h4 className="rightbarTitle" >User Information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbatInfoKey">City:</span>
              <span className="rightbatInfoValue">New York</span>
            </div>

            <div className="rightbarInfoItem">
              <span className="rightbatInfoKey">From:</span>
              <span className="rightbatInfoValue">Madrid</span>
            </div>

            <div className="rightbarInfoItem">
              <span className="rightbatInfoKey">Relationship:</span>
              <span className="rightbatInfoValue">Single</span>
            </div>
          </div>
          <h4 className="rightbarTitle" >User friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img className="rightbarFollowingImg" src="https://i2-prod.dailyrecord.co.uk/incoming/article26949550.ece/ALTERNATES/s615/280736056_5215739155160579_2994299419128774691_n.jpg" alt="" />
              <span className="rightbarFollowingName">Joanna Mandi</span>
            </div>

            <div className="rightbarFollowing">
              <img className="rightbarFollowingImg" src="https://i2-prod.dailyrecord.co.uk/incoming/article26949550.ece/ALTERNATES/s615/280736056_5215739155160579_2994299419128774691_n.jpg" alt="" />
              <span className="rightbarFollowingName">Joanna Mandi</span>
            </div>

            <div className="rightbarFollowing">
              <img className="rightbarFollowingImg" src="https://i2-prod.dailyrecord.co.uk/incoming/article26949550.ece/ALTERNATES/s615/280736056_5215739155160579_2994299419128774691_n.jpg" alt="" />
              <span className="rightbarFollowingName">Joanna Mandi</span>
            </div>

            <div className="rightbarFollowing">
              <img className="rightbarFollowingImg" src="https://i2-prod.dailyrecord.co.uk/incoming/article26949550.ece/ALTERNATES/s615/280736056_5215739155160579_2994299419128774691_n.jpg" alt="" />
              <span className="rightbarFollowingName">Joanna Mandi</span>
            </div>

            <div className="rightbarFollowing">
              <img className="rightbarFollowingImg" src="https://i2-prod.dailyrecord.co.uk/incoming/article26949550.ece/ALTERNATES/s615/280736056_5215739155160579_2994299419128774691_n.jpg" alt="" />
              <span className="rightbarFollowingName">Joanna Mandi</span>
            </div>

            <div className="rightbarFollowing">
              <img className="rightbarFollowingImg" src="https://i2-prod.dailyrecord.co.uk/incoming/article26949550.ece/ALTERNATES/s615/280736056_5215739155160579_2994299419128774691_n.jpg" alt="" />
              <span className="rightbarFollowingName">Joanna Mandi</span>
            </div>
          </div>
          </>
        )
        }

    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
          {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
      </div>
    )

    
   }

export default Rightbar;