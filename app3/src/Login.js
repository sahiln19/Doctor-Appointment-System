import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import axios from 'axios';
import getBase from './api';
import { showError, showMessage } from './toast-message'
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { withCookies } from 'react-cookie';

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
class Login extends React.Component {
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
        const { cookies } = this.props; //this is required to use cookies.
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
                    let id = response.data[3]['id'];
                    console.log('userid' + id);
                    // Set the cookie with a name, value, and options
                    cookies.set('userid',id, { path: '/' }); 
                    cookies.set('email',this.state.email, { path: '/' }); 
                    console.log('cookies has userid ',cookies.get('userid'))
                    showMessage(message);
                    setTimeout(() => {
                        window.location = "/";
                    }, 3000);
                }
            }

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
export default withCookies(Login);