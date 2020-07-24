import React, {Component} from 'react';
import {Register} from "./Register";
import Login from './Login'
import Home from "./Home"
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="" render={this.getLogin}/>
                    <Route path="/home" render={this.getHome}/>
                </Switch>
            </div>
        );
    }

    getLogin = () => {
        return this.props.isLoggedIn
            ? <Redirect to = "/home"/>
            : <Login handleLoginSucceed={this.props.handleLoginSucceed}/>;
    }

    getHome = () =>{
        return this.props.isLoggedIn
            ? <Home/>
            : <Redirect to = "/login"/>
    }

}

export default Main;