<<<<<<< HEAD
import React, {Suspense} from "react";
=======
import React from 'react';
>>>>>>> d4d73b65d5084243293c3a2467c549a5fee39a99
import { FirebaseAppProvider } from 'reactfire';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';

const firebaseConfig = {
  apiKey: "AIzaSyD_KrSJ7JtCI7BpHpCYSAczsYyGndD9Bgk",
  authDomain: "anotherproj-d78c0.firebaseapp.com",
  projectId: "anotherproj-d78c0",
  storageBucket: "anotherproj-d78c0.appspot.com",
  messagingSenderId: "61411529454",
  appId: "1:61411529454:web:15d47c50b1388d192719ff",
  measurementId: "G-Z9WSTX3N14"
};

const app = firebase.initializeApp(firebaseConfig);
app.auth()
app.firestore()
ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense>
  <Suspense fallback={<div>Loading...</div>}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
