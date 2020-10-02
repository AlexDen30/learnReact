import React from 'react';
import HorizonePic from './HorizonePic/HorizonePic';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  return (
    <div>
      <HorizonePic />
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;