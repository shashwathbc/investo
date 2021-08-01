import React ,{useState}from 'react'
import MessageSender from './MessageSender'; 
import Post from "./Post";
import db from './firebase';
import { useEffect } from 'react';
function Entrepreneur() {
	const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
    })
  }, [])
	return (
		<div className="feed">
			<MessageSender />
	{posts.map(post => (
      <Post
        key={post.data.id}
        userPhoto={post.data.userPhoto}
        message={post.data.message}
        timestamp={post.data.timestamp}
        userName={post.data.userName}
        image={post.data.image}
      />
      ))}
    
		</div>
	)
}

export default Entrepreneur
