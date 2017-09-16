
import React, { Component } from 'react';
import { ScrollView, StyleSheet ,Image,View,StatusBar,
  Dimensions,Text} from 'react-native';
 
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../Config/Data';
import Icon from 'react-native-vector-icons';
import ViewPager from 'react-native-viewpager';


const deviceWidth = Dimensions.get('window').width;

const IMGS = [
  require('../../img/ajit.jpg'),
  require('../../img/ajit.jpg'),
  require('../../img/ajit.jpg'),
   require('../../img/ajit.jpg'),
];

class Profile extends Component {
constructor(props){
	super(props);
	const dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
	this.state ={
		dataSource: dataSource.cloneWithPages(IMGS),
		page: 0
	};
	this.renderPage = this.renderPage.bind(this);
};
 renderPage(item) {
    return (
      <Image
		source= {item}
        style={styles.page} />
    );
  }
  
  render() {
    return (
	<View style = {styles.container}>
      <ViewPager
        style={this.props.style}
        dataSource={this.state.dataSource}
        renderPage={this.renderPage}
	/>
		<ScrollView style={styles.textView}>
		<Text style={styles.ProfileNames}>Ajit Kumar Singh</Text>
		<View style={styles.PaddingBetween}>
			<Text style={styles.textPersonalInfo}>Personal Information</Text>
		</View>		
        <Text style={styles.text}>Software Engineer by Profession Bakchod by heart. I love only two things Beer Bakchodi and Netfix</Text>
		<Text style={styles.text}>Interest-Theatre, Parties And Movies</Text>
        <Text style={styles.text}>Education-IIT Guwahati</Text>
        <Text style={styles.text}>Work-Microsoft Pvt Limited</Text>
        <Text style={styles.text}>City-Hyderabad</Text>

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
    textAlign: 'center',
    fontSize: 20,
	fontWeight:'bold',
	paddingBottom:10,
	paddingLeft:10,
	color:'black',
  },
  
    PaddingBetween: {
	backgroundColor:'yellow',
	justifyContent: 'center',
  },
  
});

Profile.defaultProps = { ...me };

export default Profile;
