import {FETCH_USERS, START_LOADING, STOP_LOADING} from './types';
import axios from 'axios';

export const fetchUsers = (users) => {
    return {
        type: FETCH_USERS,
        payload: axios.get('http://jsonplaceholder.typicode.com/users')
    };
};



export const startLoading = () => {
    return {
        type: START_LOADING
    };
};

export const stopLoading = () => {
    return {
        type: STOP_LOADING
    };
};

//export const startFetchUsers = () => {
//    return (dispatch, getState) => {
//        dispatch(startLoading());
//        axios.get('http://jsonplaceholder.typicode.com/users').then((res) => {
//            dispatch(fetchUsers(res.data));
//            dispatch(stopLoading());
//        });
//    };
//};