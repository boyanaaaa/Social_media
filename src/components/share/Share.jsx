import "./share.css";

import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share() {

   
  return (
    <div>
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="https://i.pinimg.com/736x/c0/08/16/c008166bc4dfba83586da76d7d80105e.jpg" alt="" />
                    
                    
                    <input  placeholder="What is in your mind?"  name='text' className="shareInput" />
                    
                
                
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>

                        <div className="shareOption">
                            <LabelIcon className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>

                        <div className="shareOption">
                            <LocationOnIcon className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>

                        <div className="shareOption">
                            <EmojiEmotionsIcon className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                        
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Share