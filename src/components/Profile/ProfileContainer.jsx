import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfileThunkCreator } from '../../redux/posts-reducer';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 31;
    }

    this.props.setUserProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }

}

let mapStateToProps = (state) => {
  return {
    profile: state.postsPage.profile,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (userId) => {
      dispatch(setUserProfileThunkCreator(userId));
    }
  }
}

//HOCs

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
) (ProfileContainer);