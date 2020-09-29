import React from 'react';
import HorizonePic from './HorizonePic/HorizonePic';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  return (
    <div>
      <HorizonePic />
      <ProfileInfo />
      <MyPosts
        posts={props.posts}
        dispatch={props.dispatch} 
        newPostText={props.newPostText}
      />
    </div>
  )
}

export default Profile;