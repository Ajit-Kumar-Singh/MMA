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

class ProfileEdit extends React.Component {
  constructor(props) {
      super(props);
      this._submitForm = this._submitForm.bind(this);
      this.state = {loadSuccessful: false,
                    name:this.props.navigation.state.params.name,
                    work:this.props.navigation.state.params.work,
                    education:this.props.navigation.state.params.education,
                    location_id:this.props.navigation.state.params.location_id,
                    aboutMe:this.props.navigation.state.params.aboutMe,
                     isModalVisible : false,
                   language:''};
    }
    callFunc = ()=>{
       if(this.isModalVisible){
         this.setState({isModalVisible:false});
       }else{
         this.setState({isModalVisible:true});
       }
    }
  _onPhotoUpload = () =>
  {
    const options = {
      quality: 1.0,
      maxWidth: 50,
      maxHeight: 50,
      storageOptions: {
              skipBackup: true,
                  },
                };
                ImagePicker.openPicker({
                  width: 300,
                  height: 400,
                  cropping: true
                }).then(image => {
                  console.log(image);
                });
  }
  _submitForm()
    {
      const data ={
          "name":this.refs.form.getValues().name,
          "about_me":this.refs.form.getValues().aboutMe,
          "gender":"male",
          "education":this.refs.form.getValues().education,
          "work":this.refs.form.getValues().work,
          "age":21,
          "mobile_number":"8125659730",
          "email":"ajit.sumitsingh@gmail.com",
          "is_mobile_verifed":true,
          "image":"",
          "user_type":"",
          "location_id":8,
          "auth_token":"",
      }
      console.log('falana');
      console.log(this.props.navigation.state.params.id);
      const urlEdit = 'https://vast-badlands-97711.herokuapp.com/mma_user_profiles/'+ (this.props.navigation.state.params.id).toString() +'/';

      fetch(urlEdit, {
        method: "PUT",
        headers:{ 'Accept': 'application/json',
        'Content-Type': 'application/json',},
        body:  JSON.stringify(data)
      })
      .then((response) => {
        if (response.ok) {
          response.json().then(data => {
          console.log(data) ;
          this.props.navigation.navigate('Profile',data);
        });
      }
      })
      .then(function(data){
        console.log(data);
      });
  }

  render() {
    const {state} = this.props.navigation;
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
          <Text style = {styles.infoText}> City </Text>
        <View style = {styles.textInput} >
          <TextInput underlineColorAndroid="transparent" type="TextInput" name="city" value={this.state.location_id}  onChangeText={(text) => this.setState({location_id: text})}/>
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

export default ProfileEdit;
