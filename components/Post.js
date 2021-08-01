import React from 'react'
import { Avatar } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "./Post.css";
function Post({userPhoto , image , userName , timestamp , message }) {
	
	
	return  (
		<div className="post">
			<div className="post__top">
				<Avatar src={userPhoto} 
				className="post__avatar"/>
				<div className="post__topInfo">
					<h3>{userName}</h3>
					<p>{new Date(timestamp?.toDate()).toUTCString()}</p>
				</div>
			</div>
			
			<div className="post__bottom">
				<p>{message}</p>
			</div>
                               
			       <div className="post__image">
				       <img src={image} alt="" />
			       </div>
			       <div className="post__options">
				      
				         <div className="post__option">
                                                    < CommentIcon/>
						      <p>Comments</p>                                                            
				       </div>
				       <div className="post__option">
                                                    < EditIcon/>
						      <p>EDIT-POST</p>                                                            
				       </div>
				        <div className="post__option">
                                                    < DeleteIcon/>
                                                    <p
						  
						    >Delete-Post</p>
				       </div>
				   
			       </div>
		</div>
	)
}

export default Post
