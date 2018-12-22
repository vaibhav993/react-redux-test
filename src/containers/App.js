import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { connect } from "react-redux"
import './App.css';
import Home from "../components/Home/Home"
import AddUser from "../components/AddUser/AddUser"
import UserList from "./UserList"
import { fetchUsers } from "../actions"

class App extends Component <{
    dispatch: Function
}>
{
    componentDidMount() {
        this.props.dispatch(fetchUsers())
    }

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
                            <Route path="/users" component={UserList}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default connect()(App);

