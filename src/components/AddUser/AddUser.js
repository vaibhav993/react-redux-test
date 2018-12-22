import React from "react"
import { CNInput, CNRadio } from "../common"
import './AddUser.css';
import API from "../../api/api"

export default class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            gender: "female"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetForm() {
        this.setState({
            first_name: "",
            last_name: "",
            email: "",
            gender: "female"
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = this.state;

        API.post(`/users`, data)
            .then(res => {
                if( res.status === 200 ) {
                    this.resetForm();
                }
            })
    }

    render() {
        return (
            <div>
                <h1>Add User</h1>
                <p>Please fill in this form to create a user.</p>
                <form onSubmit={this.handleSubmit}>
                    <CNInput
                        name="first_name"
                        label="First Name: "
                        type="text"
                        value={this.state.first_name}
                        handleChange={this.handleChange}
                    />
                    <CNInput
                        name="last_name"
                        label="Last Name: "
                        type="text"
                        value={this.state.last_name}
                        handleChange={this.handleChange}
                    />
                    <CNInput
                        name="email"
                        label="Email: "
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <div>
                        <label>Gender: </label>
                        <CNRadio
                            name="female"
                            label="Female"
                            groupName="gender"
                            checked={this.state.gender === "female"}
                            handleChange={this.handleChange}
                        />
                        <CNRadio
                            name="male"
                            label="Male"
                            groupName="gender"
                            checked={this.state.gender === "male"}
                            handleChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}