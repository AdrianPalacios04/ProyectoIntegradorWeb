import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import firebase from 'firebase';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp({
    apiKey: "AIzaSyB3drWQDdnW8En9vOMlb-5qX3fS1kVImK0",
    authDomain: "saywithpics.firebaseapp.com",
    databaseURL: "https://saywithpics.firebaseio.com",
    projectId: "saywithpics",
    storageBucket: "saywithpics.appspot.com",
    messagingSenderId: "323760486919",
})
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
