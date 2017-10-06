import { facebookLogin, facebookLogout } from '../utils/facebookAPI.js';
import {postProfileData} from '../utils/RESTCalls.js'
import {getProfileData} from '../utils/RESTCalls.js'
import {updateProfileData} from '../utils/RESTCalls.js'
export function attempt() {
    return {
        type: 'LOADING'
    };
}

export function errors(err) {
    return {
        type: 'ERROR',
        err
    };
}

export function loggedin() {
    return {
        type: 'LOGIN',
    };
}

export function loggedout() {
    return {
        type: 'LOGOUT'
    };
}

export function addUser(id, name, email) {
    return {
        type: 'ADD_USER',
        id,
        name,
        email,
    };
}

export function login() {
    return dispatch => {
        dispatch(attempt());
        facebookLogin().then((result,accessToken) => {
            postProfileData(result,accessToken).then((profileData) =>
            {
              dispatch(addUser(profileData.id, profileData.name, profileData.email));
              dispatch(loggedin());
            })
        }).catch((err) => {
            dispatch(errors(err));
        });
    };
}

export function logout() {
    return dispatch => {
        dispatch(attempt());
        facebookLogout().then(() => {
            dispatch(loggedout());
        });
    };
}

export function fetching() {
    return {
        type: 'FETCHING'
    };
}

export function errorsProfile(err) {
    return {
        type: 'FETCHING_ERROR',
        err
    };
}

export function fetched() {
    return {
        type: 'FETCHED_SUCCESS',
    };
}
export function sendProfileData(profileData)
{
  return{
    type: 'PROFILE_DATA',
    profileData,
  }
}


export function fethProfileData(profileId) {
    return dispatch => {
        dispatch(fetching());
            getProfileData(profileId).then((profileData) =>
            {
              dispatch(sendProfileData(profileData));
        }).catch((err) => {
            dispatch(errorsProfile(err));
        });
    }
  }

  export function update(data,profileId) {
      return dispatch => {
          dispatch(fetching());
              updateProfileData(data,profileId).then((profileData) =>
              {
                dispatch(sendProfileData(profileData));
          }).catch((err) => {
              dispatch(errorsProfile(err));
          });
      }
    }
