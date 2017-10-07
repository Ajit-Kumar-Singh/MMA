import React from 'react'

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableHighlight,
  Picker,
} from 'react-native';

import Form from 'react-native-form';
import PhotoUpload from 'react-native-photo-upload';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

//Should move to a common place Task
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';

function mapStateToProps(state) {
    return {
        profileUpdatedData: state.profileUpdatedData,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

class ProfileEdit extends React.Component {
  constructor(props) {
      super(props);
      this.state = { name:this.props.navigation.state.params.name,
                    work:this.props.navigation.state.params.work,
                    education:this.props.navigation.state.params.education,
                    aboutMe:this.props.navigation.state.params.aboutMe,
                    };
                  }

  _submitForm = () =>  {
      const {actions,profileUpdatedData,navigation} = this.props;
      const data ={
          "name":this.refs.form.getValues().name,
          "about_me":this.refs.form.getValues().aboutMe,
          "gender":"male",
          "education":this.refs.form.getValues().education,
          "work":this.refs.form.getValues().work,
          "age":21,
          "mobile_number":"",
          "email":this.props.navigation.state.params.email,
          "is_mobile_verifed":'',
          "image":this.props.navigation.state.params.image,
          "user_type":"",
          "location_id":8,
          "auth_token":"",
      }

        actions.update(data,navigation.state.params.id);
  }

  componentWillReceiveProps(nextProps)
  {
    if(nextProps.profileUpdatedData.updated)
    {
      this.props.navigation.navigate('Profile',nextProps.profileUpdatedData.data);
    }
  }

  render() {
    return (
    <Form ref="form">
    <ScrollView style = {styles.containerProfileEdit}>
      {/* User Will upload photo here*/}
      <View style ={styles.uploadPhoto}>

      </View>
      {/*  User Profile Information*/}
      <View style = {styles.infoSection}>
          <Text style = {styles.infoText}> Name </Text>
        <View style = {styles.textInput}>
          <TextInput underlineColorAndroid="transparent" type="TextInput" name="name" value={this.state.name}  onChangeText={(text) => this.setState({name: text})}/>
        </View>
          <Text style = {styles.infoText}> Work </Text>
        <View style = {styles.textInput}>
          <TextInput underlineColorAndroid="transparent" type="TextInput" name="work" value={this.state.work}  onChangeText={(text) => this.setState({work: text})}/>
        </View >
          <Text style = {styles.infoText}> Education </Text>
        <View style = {styles.textInput}>
          <TextInput underlineColorAndroid="transparent" type="TextInput" name="education" value={this.state.education}  onChangeText={(text) => this.setState({education: text})}/>
        </View>

          <Text style = {styles.infoText}> About Me </Text>
        <View style = {styles.textInput}>
          <TextInput underlineColorAndroid="transparent" type="TextInput" name="aboutMe" value={this.state.aboutMe}  onChangeText={(text) => this.setState({aboutMe: text})}/>
        </View>
        <View style = {styles.buton}>
          <Button title="Save"
          onPress={this._submitForm}
          color='green'/>
        </View>
      </View>
    </ScrollView>
  </Form>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  uploadPhoto:{
    flex:4,
  },
infoSection:{
  flex:6,
},
buton:{
  paddingTop:5,
  height:50,
},
textInput:{
  height:50,
   backgroundColor: 'white',
   paddingLeft:10,
   borderWidth: 0.5,
   borderColor:'green',
},

infoText:{
  height:30,
  justifyContent:'center',
  paddingLeft:10,
  paddingTop:5,
},
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
