import { delay } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import axios from 'axios';


import * as actions from '../actions/index';





export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put(actions.logoutSucceed());
};



export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logoutInitiate());
}



export function* authUserSaga(action) {
    yield put(actions.authStart());
    const authData = {
        name: action.name,
        email: action.email,
        password: action.password,
        address: action.address,
        zipCode: action.zipCode,
        country: action.country,
        returnSecureToken: true
    };
    
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB4OW8LekimIzmdyf9cX9gIflh5rJpofGo';
    if (!action.isSignup) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB4OW8LekimIzmdyf9cX9gIflh5rJpofGo';
    }
    try {
    const response = yield axios.post(url, authData)
    const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield localStorage.setItem('userId', response.data.localId);
    yield put(actions.authSuccess(response.data.idToken, response.data.localId));
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
    
}
catch (error){
    yield put(actions.authFail(error.response.data.error));
}
}
/* 
export function* authUserSaga2(action) {
    yield put(actions.authStart());
    const authData = {
        name: action.name,
        email: action.email,
        password: action.password,
        address: action.address,
        zipCode: action.zipCode,
        country: action.country,
        returnSecureToken: true
    };
    
   
    try {
        axios.post('https://myburger-fa836.firebaseio.com/SignUpData.json', authData)
        .then(response => console.log(response.data))
    
}
catch (error){
    yield put(actions.authFail(error.response.data.error));
}
}
 */


export function* authCheckStateSaga (action) {
  
        const token = yield localStorage.getItem('token');
        if (!token) {
            yield put(actions.logoutInitiate());
        } else {
            const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                yield put(actions.logoutInitiate());
            } else {
                const userId = yield localStorage.getItem('userId');
                yield put(actions.authSuccess(token, userId));
                yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
                console.log((expirationDate.getTime() - new Date().getTime()) / 1000)
            }
        }
    };

