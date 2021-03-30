import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import CreateSagaMiddleware from 'redux-saga';
import './styles/index';
import App from './App';
import reportWebVitals from './reportWebVitals';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';
import { watchAuth, watchOrder } from './store/sagas/index';


// process.env.NODE_ENV === 'development'
// Is line ka matlab ha ye enviornment variable ha jo k config folder mein env ki file k andr ha
// Is sa ho ga ye k jb hum production mode mein hon gy to koi hmara redux state wgaira ni daikh skta redux devtools mein 


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    order: orderReducer,
    auth: authReducer
});

const SagaMiddleware = CreateSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, SagaMiddleware)
));

SagaMiddleware.run(watchAuth);
SagaMiddleware.run(watchOrder);


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
reportWebVitals();



/* 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './components/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';  

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
 */