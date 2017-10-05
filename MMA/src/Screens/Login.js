import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    Button,
    Image,
    ActivityIndicator,
} from 'react-native';

import {
    SocialIcon
} from 'react-native-elements'

import {
    LoginManager,
    AccessToken,
    GraphRequest,
    GraphRequestManager,
} from 'react-native-fbsdk';

import {
    TabNavigator,
    StackNavigator
} from 'react-navigation'

import {
    Tabs
} from '../Config/Router.js'


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    //function to render spinner or button
    renderSpinnerOrButton = () => {

        //check state value of loading varibale
        if (this.state.loading) {

            //render spinner
            return <ActivityIndicator size = "large" style = {{height: 55,margin: 20}}/>
        } else {
            //render button
            return <SocialIcon title = 'Sign In With Facebook'
            button type = 'facebook'
            onPress = {
                this.login
            }
            alignSelf = 'stretch' / >

        }
    }


    login = () => {

        LoginManager.logInWithReadPermissions(["user_friends", "public_profile", "email", "user_birthday"]).then((res) => {
            if (res.isCancelled) {
                console.log("cancelled");
            } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                    const accessToken = data.accessToken
                    this.setState({
                        loading: true
                    });

                    const responseInfoCallback = (error, result) => {
                        if (error) {
                            console.log(error)
                        } else {
                            const data = {
                                "name": result.name,
                                "about_me": "",
                                "gender": "",
                                "education": "",
                                "work": "",
                                "age": 0,
                                "mobile_number": "",
                                "email": result.email,
                                "is_mobile_verifed": true,
                                "image": "",
                                "user_type": "",
                                "location_id": 8,
                                "auth_token": accessToken.toString(),
                            }

                            fetch('https://vast-badlands-97711.herokuapp.com/mma_user_profiles/', {
                                    method: "POST",
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(data)
                                })
                                .then((response) => {
                                    if (response.ok) {
                                        response.json().then(data => {
                                            console.log(data);
                                            this.setState({
                                                loading: false
                                            });
                                            this.props.navigation.navigate('App', data);
                                        });
                                    }
                                })
                        }
                    }

                    const infoRequest = new GraphRequest(
                        '/me', {
                            accessToken: accessToken,
                            parameters: {
                                fields: {
                                    string: 'email,name,first_name,middle_name,last_name,birthday'
                                }
                            }
                        },
                        responseInfoCallback
                    );

                    // Start the graph request.
                    new GraphRequestManager().addRequest(infoRequest).start();
                });
            }
        });
    }

    render() {
        return ( <Image source = {require('../../img/background.jpg')} style = { styles.backgroundImage} >
            {this.renderSpinnerOrButton()}
            </Image>
        );
    }
}

export const StacNavLoginToApp = StackNavigator({
    Login: {
        screen: Login
    },
    App: {
        screen: Tabs,
    }
},
{
    headerMode: 'none',
}
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    content: {
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
