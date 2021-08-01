import React, {useState} from 'react';
import { Avatar } from '@material-ui/core';
import "./MessageSender.css";
import{ selectUserName, selectUserPhoto} from "../features/user/userSlice";
import {useSelector} from "react-redux";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import db from './firebase';
import firebase from 'firebase';

function MessageSender() {

	const userName =useSelector(selectUserName);
      const userPhoto =useSelector(selectUserPhoto);

   const [imageUrl, setImageUrl] = useState('');
  const [input, setInput] = useState('');
      

    const handleSubmit = (e) => {
    e.preventDefault();
        db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userPhoto: userPhoto,
      userName: userName,
      image: imageUrl
    })
   

     setInput('');
    setImageUrl('');
   
  };

	return (
		<div className="messageSender">
			<div className="messageSender__top">
                              <Avatar src={userPhoto} alt={userName}/>
			                      
			      {/*add username login here */}

			      <form>
             <input value={input} 
             onChange={(e) => setInput(e.target.value)}
             className="messageSender__input" placeholder={`Write your idea, ${userName}?`}/>
				     <input value={imageUrl}
               onChange={(e) => setImageUrl(e.target.value)}
              placeholder={'image URL (optional)'}/>
				     <button onClick={handleSubmit} type="submit">Submit</button>

			      </form>

			</div>



			<div className="messageSender__bottom">
                                 <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Add Photos To Attract Investors</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Write About Your Business</h3>
        </div>
                                      </div>
				      
		</div>
	)
}

export default MessageSender
