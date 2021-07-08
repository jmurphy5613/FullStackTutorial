import React from 'react';
import '../App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {

    const [username, setUsername] = useState('');
    const [postText, setPostText] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [listOfPosts, setPosts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3002/post').then(response => {
        setPosts(response.data);
        })
    }, [])


      return(
        <div className="App">
            {listOfPosts.map(element => {
                return (
                    <div className="post">
                        <div className="title">{element.title}</div>
                        <div className="body">{element.postText}</div>
                        <div className="footer">{element.username}</div>
                    </div>
                );
            })}
        </div>
  )
}

export default Home;