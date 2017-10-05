
import React, { Component } from 'react';
import { ScrollView, StyleSheet ,Image,View,StatusBar,
  Dimensions,Text,TouchableHighlight} from 'react-native';

import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../Config/Data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconCity from 'react-native-vector-icons/MaterialIcons';

  class Profile extends Component {

    constructor(props){
      super(props);

      this.state ={
        page: 0,
        userProfile: {},
        profileIdSet : false,
        id :  '',
      };
    };

    componentDidMount()
    {
      this.state.id = this.props.navigation.state.params.id;
      console.log(this.state.id);
      const urlFetch = 'https://vast-badlands-97711.herokuapp.com/mma_user_profiles/'+this.state.id +'.json'

      fetch(urlFetch)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          userProfile: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }

    render() {
      const { state,navigate } = this.props.navigation;
      return (
      <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source = {require('../../img/ajit.jpg')}  style={styles.image}/>
            <View style ={styles.profileContainer}>
              <Text style={styles.ProfileNames}>{this.state.userProfile.name}</Text>
              <TouchableHighlight
                onPress={() => navigate("Detail",this.state.userProfile)}>
              <Icon name="account-edit" size={25} color='#0093AF' />
          </TouchableHighlight>
        </View>
      </View>
      <View style ={styles.infoSection}>
        <View style={styles.PaddingBetween}>
          <Text style={styles.textPersonalInfo}>Personal Information</Text>
        </View>

        <View style={styles.textStyle}>
          <Icon name="face-profile" size={25} color='#0093AF' />
        <Text style={styles.text}>{this.state.userProfile.about_me}</Text>
        </View>

        <View  style={styles.textStyle}>
          <Icon name="email" size={25} color='#0093AF' />
        <Text style={styles.text}>{this.state.userProfile.email}</Text>
        </View>

        <View  style={styles.textStyle}>
          <Icon name="school" size={25} color='#0093AF' />
        <Text style={styles.text}>{this.state.userProfile.education}</Text>
        </View>

        <View  style={styles.textStyle}>
          <Icon name="worker" size={25} color='#0093AF' alignSelf='center'/>
        <Text style={styles.text}>{this.state.userProfile.work}</Text>
        </View>

        <View  style={styles.textStyle}>
          <IconCity name="my-location" size={25} color='#0093AF' />
        <Text style={styles.text}>{this.state.userProfile.location_id}</Text>
        </View>
      </View>
    </View>
      )
    };

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    profileContainer:
    {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
  imageContainer:
   {
    flex:2,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent :'center',
    backgroundColor : 'white'
   },
   infoSection:{
    flex:4,
    backgroundColor:'white'
   },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50
  },
  editProfile: {
    flex:1,
    flexDirection: 'row'
  },
textStyle:
{
  borderBottomWidth :1,
  borderColor:'#E5E4E2',
  flexDirection:'row',
  height:40,
  alignItems:'center',
},
    page: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain'
    },
    textView: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    text: {
      textAlign: 'left',
      fontSize: 15,
      paddingLeft:15,
      color:'black',
      fontFamily:'Circular'
    },
    textPersonalInfo: {
      textAlign: 'left',
      fontSize: 15,
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:10,
      color:'black',
      fontWeight:'bold'
    },
    ProfileNames: {
      fontSize: 20,
      fontWeight:'bold',
      paddingBottom:10,
      paddingLeft:10,
      color:'black',
    },

    PaddingBetween: {
      backgroundColor:'#E6E6E6',
      justifyContent: 'center',
    },

  });

  Profile.defaultProps = { ...me };

  export default Profile;
