import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfileActionCreator } from '../../redux/posts-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 31;
    }   

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        debugger;
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }

}

let mapStateToProps = (state) => {
  return {
    profile: state.postsPage.profile 
  }
} 

let mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (profile) => {
      dispatch(setUserProfileActionCreator(profile));
    }
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps) (WithUrlDataContainerComponent);