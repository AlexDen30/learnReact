import React from 'react';
import s from './users.module.css';
import userPhoto from '../../../src/assets/images/users.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { followAPI } from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? s.spanPage + s.selectedPage : s.spanPage}
                        onClick={(e) => { props.onPageChange(p) }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowing(true, u.id);
                                followAPI.unfollow(u.id)
                                    .then(data => {
                                        if (data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                        props.toggleFollowing(false, u.id);
                                    });
                                 }}>
                                unfollow</button>
                                
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowing(true, u.id);
                                followAPI.follow(u.id)
                                    .then(data => {
                                        if (data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowing(false, u.id   );
                                    });
                              }}>
                              follow</button>} 
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;