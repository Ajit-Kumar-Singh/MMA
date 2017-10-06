import {config} from '../configuration'

export function postProfileData(userProfile, accessToken) {
    return new Promise((resolve, reject) => {
      const data = {
          "name": userProfile.name,
          "about_me": "",
          "gender": "",
          "education": "",
          "work": "",
          "age": 0,
          "mobile_number": "",
          "email": userProfile.email,
          "is_mobile_verifed": true,
          "image": 'https://graph.facebook.com/' + userProfile.id + '/picture?type=large' ,
          "user_type": "",
          "location_id": 8,
          "auth_token": accessToken,
      }

      fetch(config.url, {
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
                        resolve(data);
                      });
                  }
                  else {
                    reject('error');
                  }
              });
          });
      }

      export function updateProfileData(data,id) {
          return new Promise((resolve, reject) => {
            const url = config.url + id + '/';
            fetch(url, {
              method: "PUT",
              headers:{ 'Accept': 'application/json',
              'Content-Type': 'application/json',},
              body:  JSON.stringify(data)
            })
            .then((response) => {
              if (response.ok) {
                response.json().then(data => {
                resolve(data);
              });
            }
          })
        });
      }

      export function getProfileData(id) {
          return new Promise((resolve, reject) => {
          const url = config.url + id +'.json';
          fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log('value of response');
            console.log(responseJson);
            resolve(responseJson);
          })
          .catch((error) => {
            reject(error);
          });
        })
      }
