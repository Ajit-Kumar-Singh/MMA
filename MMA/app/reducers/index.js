
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

function profileFetchReducer(state = { fetching: false, fetched: false, error: null, data:[]}, action) {
    switch (action.type) {
    case 'FETCHING':
        return Object.assign({}, state, {
          fetching:true,

    });
    case 'PROFILE_DATA':
        return Object.assign({}, state, {
          fetched:true,
          fetching:false,
          data:action.profileData
        });

    case 'ERROR':
        return Object.assign({}, state, {
          fetching:false,
          fetched:false,
          error:action.err,
    });
    default:
        return state;
    }
}

function profileUpdateReducer(state = { fetching: false, fetched: false, error: null, data:[]}, action) {
    switch (action.type) {
    case 'FETCHING':
        return Object.assign({}, state, {
          fetching:true,

    });
    case 'PROFILE_DATA':
        return Object.assign({}, state, {
          fetched:true,
          fetching:false,
          data:action.profileData
        });

    case 'ERROR':
        return Object.assign({}, state, {
          fetching:false,
          fetched:false,
          error:action.err,
    });
    default:
        return state;
    }
}

export default function reducers(state = {}, action) {
    return {
        login: loginReducer(state.login, action),
        profile: profileReducer(state.profile, action),
        profileData : profileFetchReducer(state.profileData,action),
        profileUpdatedData:profileUpdateReducer(state.profileData,action),
    };
}
