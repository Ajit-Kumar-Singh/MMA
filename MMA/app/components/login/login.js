import React, { Component,PropTypes } from 'react';
import {  Image, TouchableOpacity ,ActivityIndicator, StyleSheet, View} from 'react-native';
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

  componentWillReceiveProps(nextProps)
  {
    const {profile,navigation} = this.props;
    if (nextProps.login.loggedIn == true)
    {
      navigation.navigate('Tabs',profile);
    }
  }

  _login = () =>{
    this.props.actions.login();
  }
    render() {
      const {  login } = this.props;
      if (login.loading)
      {
        return (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#3b5998" />
        </View>
        );
      }

      return (
        <View style = {styles.wrapper}>
            <TouchableOpacity  onPress={this._login}>
                <Image source={require('../../Resources/images/fb-login-button.png')}/>
            </TouchableOpacity>
          </View>
        );
    }

}

Login.propTypes = {
    login: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        backgroundColor: '#d3d3d3',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    activityIndicator: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: '#01579B'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
