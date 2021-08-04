import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = credentials => dispatch => {
    dispatch(authActions.registerRequest());

    axios.post('/users/signup', credentials).then(({ data }) => {
        token.set(data.token)
        dispatch(authActions.registerSuccess(data))
    }).catch(({ message }) =>
        dispatch(authActions.registerError(message)));
};

const logIn = credentials => dispatch => {
    dispatch(authActions.loginRequest());

    axios.post('/users/login', credentials).then(({ data }) => {
        console.log(data);
        token.set(data.token)
        dispatch(authActions.loginSuccess(data))
    }).catch(({ message }) =>
        dispatch(authActions.loginError(message)));
};

const logOut = () => dispatch => {
    dispatch(authActions.logoutRequest());

    axios.post('/users/logout').then(() => {
        token.unset()
        dispatch(authActions.logoutSuccess())
    }).catch(({ message }) =>
        dispatch(authActions.logoutError(message)));
};

const getCurrentUser = () => (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return;
    }

    token.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest());

    axios.get('/users/current').then(({ data }) => {
        dispatch(authActions.getCurrentUserSuccess(data))
    }).catch(({ message }) =>
        dispatch(authActions.getCurrentUserError(message)));
};

export default { register, logOut, logIn, getCurrentUser };