import "./rightbar.css"
import { Users } from "../../userData"
import Online from "../online/Online"

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  )
}

export default Rightbar