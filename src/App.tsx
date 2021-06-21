import {AuthCheck,useAuth } from 'reactfire';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import React from "react";
import Login from "./Login";
import Blog from "./Blog";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


/*
*Function: App
*Return: HTML
*About: Handles authentication, if the user is logged in, they will
*be taken to the Blog site, otherwise they will be taken to the Login page
*/
function App() {
    const classes = useStyles();
    const auth = useAuth();

    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    Get the Latest News
                    </Typography>
                    <Button id="loginBtn" color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
              <AuthCheck fallback={<Login/>} auth={auth}>
            	<Route exact path="/" component={Blog} />
              </AuthCheck>
        </Router>
    );

}

export default App;
