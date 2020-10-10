import React from 'react';
import { connect } from 'react-redux';
import {followThunkCreator, getUsersThunkCreator, setCurrentPageAC, toggleFollowingProgressAC, unfollowThunkCreator } from '../../redux/users-reducer';
import Users from './Users'
import Loader from '../Loader/Loader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
        { this.props.isFetching ? <Loader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                toggleFollowing={this.props.toggleFollowing}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,   
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followThunkCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowThunkCreator(userId));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        toggleFollowing: (isFetching, userId) => {
            dispatch(toggleFollowingProgressAC(isFetching, userId));
        },
        getUsers: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (UsersContainer);
