import { facebookLogin, facebookLogout } from '../utils/facebookAPI.js';

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
        facebookLogin().then((result) => {
            dispatch(loggedin());
            dispatch(addUser(result.id, result.name, result.email));
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
