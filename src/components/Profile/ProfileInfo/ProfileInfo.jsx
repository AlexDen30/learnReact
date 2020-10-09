import React from 'react';
import Loader from '../../Loader/Loader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    if (props.profile === null || props.profile === undefined) {
        return <Loader />
    }

    return (
        <div>
            <div>
                <img className={s.usersPhoto} src={props.profile.photos.large} />
                <div className={s.text}>{props.profile.fullName}</div>
                <div className={s.text}>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;