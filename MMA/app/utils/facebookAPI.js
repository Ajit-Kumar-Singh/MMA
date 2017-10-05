import {
    LoginManager,
    AccessToken,
    GraphRequest,
    GraphRequestManager,
} from 'react-native-fbsdk';

import {
  FBLogin,
   FBLoginManager,
 } from'react-native-facebook-login';

import { config } from '../configuration';

function getInfo(accessToken) {
    return new Promise((resolve, reject) => {
      const responseInfoCallback = (error, result) => {
          if (error) {
              console.log(error);
              reject('error making request. ' + error);
          } else {
              console.log('Successfully fetching data');
              resolve(result);
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

export function facebookLogin() {
    return new Promise((resolve, reject) => {
      LoginManager.logInWithReadPermissions(config.facebookReadPermissions).then((res) => {
          if (res.isCancelled) {
              console.log("cancelled");
              reject('cancelled');
          } else {
                  console.log('In Login');
                  AccessToken.getCurrentAccessToken().then((data) => {
                    console.log('In AccessToken');
                    console.log(data.accessToken);
                    getInfo(data.accessToken).then((userDetails) => {
                        resolve(userDetails);
                    }).catch((requestError) => {
                        reject(requestError);
                    });
              });
            }
        });
    });
}

export function facebookLogout() {
    return new Promise((resolve) => {
        FBLoginManager.logout();
        return resolve();
    });
}
