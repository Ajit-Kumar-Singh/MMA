function loginReducer(state = {loading: false, loggedIn: false, error: null}, action) {
    switch (action.type) {
    case 'LOADING':
        return Object.assign({}, state, {
            loading: true
        });

    case 'LOGIN':
        return Object.assign({}, state, {
            loading: false,
            loggedIn: true,
            error: null,
        });

    case 'LOGOUT':
        return Object.assign({}, state, {
            loading: false,
            loggedIn: false,
            error: null
        });

    case 'ERROR': {
        return Object.assign({}, state, {
            loading: false,
            loggedIn: false,
            error: action.err
        });
    }

    default:
        return state;
    }
}

function profileReducer(state = { id: null, name: null, email: null}, action) {
    switch (action.type) {
    case 'ADD_USER':
        return Object.assign({}, state, {
            id: action.id,
            name: action.name,
            email:action.email,
        });

    default:
        return state;
    }
}

export default function reducers(state = {}, action) {
    return {
        login: loginReducer(state.login, action),
        profile: profileReducer(state.profile, action)
    };
}
