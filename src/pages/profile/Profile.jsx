
import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"



function Profile() {
  return (
    <>
    <Topbar />
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img className="profileCoverImg" src="https://www.travelalaska.com/sites/default/files/2021-12/ThingsToDo_Adventure_Hero_%28ATIA%2C%20Michael%20DeYoung%29.jpg" alt="" />
                <img className="profileUserImg" src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName" >Boyana Dmitrova</h4>
                <span className="profileInfoDesc" >Hello my friends</span>
            </div>
        </div>
                <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                </div>
        </div>
    </div>
    </>
  );
}


export default Profile