import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import './App.css';
import Home from "./Home/Home"
import AddUser from "./AddUser/AddUser";
import Users from "./Users/Users";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <ul className="breadcrumb">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/add_user">Add User</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/add_user" component={AddUser}/>
                            <Route path="/users" component={Users}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
