import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatusThunkCreator, setUserProfileThunkCreator, updateStatusThunkCreator } from '../../redux/posts-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.logedUserID;
    }

    this.props.setUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
  }

}

let mapStateToProps = (state) => {
  return {
    profile: state.postsPage.profile,
    status: state.postsPage.status, 
    logedUserID: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (userId) => {
      dispatch(setUserProfileThunkCreator(userId));
    },

    getStatus: (userId) => {
      dispatch(getStatusThunkCreator(userId));
    },

    updateStatus: (status) => {
      dispatch(updateStatusThunkCreator(status));
    },
  }
}

//HOCs

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
) (ProfileContainer);