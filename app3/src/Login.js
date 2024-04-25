import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import axios from 'axios';
import getBase from './api';
import { showError, showMessage } from './toast-message'
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

let PageHeading = (props) => {
    return (<div className="breadcrumbs overlay">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                    <div className="breadcrumbs-content">
                        <h1 className="page-title">{props.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form = new FormData();
        form.append("email", this.state.email);
        form.append("password", this.state.password);
        let apiAddress = getBase() + "user_login.php";
        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data: form
        }).then((response) => {
            console.log(response);
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success !== 'yes')
                    showError(message);
                else {
                    showMessage(message);
                    setTimeout(() => {
                        window.location = "/";
                    }, 3000);
                }
            }

        })
            .catch((error) => {
                showError('it seems you are offline or network is not available...');
            });
    }
    render() {
        return (<>
            <div>
                <Menu />
                <PageHeading title="Sign In" />
                <ToastContainer />
                <section className="login section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                                <div className="form-head">
                                    <h4 className="title">Login To Your Account</h4>
                                    <form action="#!" method="post" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input name="email" type="email" placeholder="Email" onChange={(e) => this.handleChange(e)} value={this.state.email} />
                                        </div>
                                        <div className="form-group">
                                            <input name="password" type="password" placeholder="Password" onChange={(e) => this.handleChange(e)} value={this.state.password} />
                                        </div>

                                        <div className="button">
                                            <button type="submit" className="btn">Login Now</button>
                                        </div>
                                        <p className="outer-link">Forgot password? <Link to="/forgot-password">Click here</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

        </>)
    }
}