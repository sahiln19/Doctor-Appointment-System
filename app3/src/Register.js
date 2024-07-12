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
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            mobile: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        let form = new FormData();
        form.append("name", this.state.name);
        form.append("email", this.state.email);
        form.append("password", this.state.password);
        form.append("mobileno", this.state.mobile);
        let apiAddress = getBase() + "user_register.php";
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
                        window.location = "/login";
                    }, 3000);
                }
            }

        })
            .catch((error) => {
                showError('it seems you are offline or network is not available...');
            });
    }

    render() {
        const { name, email, password, confirmPassword, mobile } = this.state;

        return (
            <>
                <div>
                    <Menu />
                    <ToastContainer />
                    <PageHeading title="Sign up" />
                    <section className="login registration section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                                    <div className="form-head">
                                        <h4 className="title">Create your account</h4>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <input name="name" type="text" placeholder="Name" value={name}
                                                    onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <input name="email" type="email" placeholder="Email" value={email}
                                                    onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <input name="password" type="password" placeholder="Password" value={password} onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <input name="confirmPassword" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <input name="mobile" type="number" placeholder="Mobile" value={mobile} onChange={this.handleChange} />
                                            </div>
                                            <div className="button">
                                                <button type="submit" className="btn">Register</button>
                                            </div>
                                            <p className="outer-link">Already have an account? <Link to="/login"> Login Now</Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </>
        );
    }
}
export default Register;