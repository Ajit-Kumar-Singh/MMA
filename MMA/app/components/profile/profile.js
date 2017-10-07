
import React, { Component } from 'react';
import { ScrollView, StyleSheet ,Image,View,StatusBar,
  Dimensions,Text,TouchableHighlight,ActivityIndicator} from 'react-native';

import { Tile, List, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconCity from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';

function mapStateToProps(state) {
    return {
        profileData: state.profileData,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

  class Profile extends Component {

    componentDidMount()
    {
      console.log('Ky abaat h');
      const {actions,navigation} = this.props;
        console.log(navigation.state.params);
      actions.fethProfileData(navigation.state.params.id);

    }


    render() {
      const {navigation,actions,profileData} = this.props;

        return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
              <View style ={styles.profileContainer}>
              <Image
               source={{uri:profileData.data.image}}
               style={styles.image}
             />
                <Text style={styles.ProfileNames}>{profileData.data.name}</Text>
                <TouchableHighlight
                  onPress={() => navigation.navigate("Detail",profileData.data)}>
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
            <Text style={styles.text}>{profileData.data.about_me}</Text>
          </View>

          <View  style={styles.textStyle}>
            <Icon name="email" size={25} color='#0093AF' />
          <Text style={styles.text}>{profileData.data.email}</Text>
          </View>

          <View  style={styles.textStyle}>
            <Icon name="school" size={25} color='#0093AF' />
          <Text style={styles.text}>{profileData.data.education}</Text>
          </View>

          <View  style={styles.textStyle}>
            <Icon name="worker" size={25} color='#0093AF' alignSelf='center'/>
          <Text style={styles.text}>{profileData.data.work}</Text>
          </View>

          <View  style={styles.textStyle}>
            <IconCity name="my-location" size={25} color='#0093AF' />
          <Text style={styles.text}>{profileData.data.location_id}</Text>
          </View>
        </View>
      </View>
        )
    }
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

  export default connect(mapStateToProps, mapDispatchToProps)(Profile);
