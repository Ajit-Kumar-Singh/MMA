import React, { Component,PropTypes } from 'react';
import {  Image, TouchableOpacity ,ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';

function mapStateToProps(state) {
    return {
        login: state.login,
        profile: state.profile,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

class Login extends Component {

  _login = () =>{
    this.props.actions.login();
  }
    render() {
      const { actions, login, profile } = this.props;
      if (login.loading)
      {
        return  <ActivityIndicator size="large" color="#3b5998" />
      }
      if(login.loggedIn)
      {
        this.props.navigation.navigate('Tabs',profile);
      }
      return (
            <TouchableOpacity  onPress={this._login}>
                <Image source={require('../../Resources/images/fb-login-button.png')}/>
            </TouchableOpacity>
        );
    }

}

Login.propTypes = {
    login: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
