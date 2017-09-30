
import React, { Component } from 'react';
import { ScrollView, StyleSheet ,Image,View,StatusBar,
  Dimensions,Text,TouchableHighlight} from 'react-native';

import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../Config/Data';
import Icon from 'react-native-vector-icons';
import ViewPager from 'react-native-viewpager';


  const deviceWidth = Dimensions.get('window').width;

  const IMGS = [
    require('../../img/ajit.jpg'),
    require('../../img/bg.jpg'),
    require('../../img/bg1.jpg'),
    require('../../img/bg2.jpg'),
  ];

  class Profile extends Component {
    constructor(props){
      super(props);
      const dataSource = new ViewPager.DataSource({
        pageHasChanged: (p1, p2) => p1 !== p2,
      });
      this.state ={
        dataSource: dataSource.cloneWithPages(IMGS),
        page: 0,
        userProfile: {}
      };
      this.renderPage = this.renderPage.bind(this);
    };

    componentDidMount() {
      fetch('https://vast-badlands-97711.herokuapp.com/mma_user_profiles/3.json')
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
    renderPage(item) {
      const { navigate } = this.props.navigation;
      return (
        <Image
        source= {item}
        style={styles.page} />
      );
    }

    render() {
      const { state,navigate } = this.props.navigation;
      return (
        <View style = {styles.container}>
        <ViewPager
        style={this.props.style}
        dataSource={this.state.dataSource}
        renderPage={this.renderPage}
        />
        <ScrollView style={styles.textView}>
          <View style = {styles.editProfile}>
          <Text style={styles.ProfileNames}>{this.state.userProfile.name}</Text>
          <TouchableHighlight
            onPress={() => navigate("Detail",this.state.userProfile)}>
            <Image source={require('../../img/edit.png')} style = {styles.image}/>
          </TouchableHighlight>
        </View>

        <View style={styles.PaddingBetween}>
          <Text style={styles.textPersonalInfo}>Personal Information</Text>
        </View>
        <Text style={styles.text}>{this.state.userProfile.about_me}</Text>
        <Text style={styles.text}>Interest-{this.state.userProfile.mobile_number}</Text>
        <Text style={styles.text}>Education-{this.state.userProfile.education}</Text>
        <Text style={styles.text}>Work-{this.state.userProfile.work}</Text>
        <Text style={styles.text}>City-{this.state.userProfile.location_id}</Text>
      </ScrollView>
    </View>
      )
    };

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex:2,
      width:40,
      height:40,
  },
  editProfile: {
    flex:1,
    flexDirection: 'row'
  },
    viewpager: {
      flex: 1,
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
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:10,
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
      flex:8,
      textAlign: 'left',
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
