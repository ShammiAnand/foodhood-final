import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import NearMeIcon from '@mui/icons-material/NearMe'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { ExpandMoreOutlined } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateValue } from "./StateProvider";
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function Post({ profilePic, image, username, timestamp, message }) {
    const [{ user }, dispatch] = useStateValue();

    const deletePost = (e) => {
        e.preventDefault(); // prevents the default behaviour
        // does not allows the page to refresh when button is clicked
        db.collection("posts").where("username", "==", user.displayName).get()
            .then(querySnapshot => {
                querySnapshot.docs[0].ref.delete();
            });
    }

    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar
                    src={profilePic}
                    className="post__avatar" />
                <div className='post__topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className='post__bottom'>
                <p>{message}</p>
            </div>
            <div className='post__image'>
                <img
                    src={image}
                    alt="" />
            </div>
            <div className='post__options'>
                <div className='post__option'>
                    <DeleteIcon onClick={deletePost} />
                    <p>Delete</p>
                </div>
                {/* <div className='post__option'>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className='post__option'>
                    <Avatar src={profilePic} />
                    <ExpandMoreOutlined />
                </div> */}
            </div>
        </div>
    )
}

export default Post