import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import getBase from "./api";
import { showError,showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import { withCookies } from "react-cookie";
import axios from "axios";
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
class ChangePassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            newpassword: '',
            confirmnewpassword: ''
        }
    }
    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if (this.state.newpassword != this.state.confirmnewpassword) {
            showError('new password and confirm new password does not match');
        }
        else {
            let form = new FormData();
            const { cookies } = this.props; //this is required to use cookies.
            form.append("id", cookies.get('userid'));
            form.append("oldpassword", this.state.password);
            form.append("newpassword", this.state.newpassword);
            console.log(form);
            //api calling
            let apiAddress = getBase() + "user_change_password.php";
            axios({
                method: 'post',
                responseType: 'json',
                url: apiAddress,
                data: form
            }).then((response) => {
                console.log(response.data);
                let error = response.data[0]['error'];
                if (error !== 'no')
                    showError(error);
                else {
                    let success = response.data[1]['success'];
                    let message = response.data[2]['message'];
                    if (success === 'no') {
                        showError(message);
                    }
                    else {
                        showMessage(message);

                    }
                }
            }).catch((error) => {
                showError('could not connect to server');
            });

        }
    }
    render() {
        return (<>
            <div>
                <Menu />
                <PageHeading title="change your password" />
                <section className="login section">
                    <div className="container">
                        <ToastContainer />
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                                <div className="form-head">
                                    <h4 className="title">Account Detail</h4>
                                    <form action="#!" method="post" onSubmit={this.submit}>

                                        <div className="form-group">
                                            <input name="password" type="password" placeholder="Current Password"
                                                onChange={(e) => this.onInputChange(e)}
                                                value={this.state.password}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input name="newpassword" type="password" placeholder="New Password"
                                                onChange={(e) => this.onInputChange(e)}
                                                value={this.state.newpassword}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input name="confirmnewpassword" type="password" placeholder="Confirm new password"
                                                onChange={(e) => this.onInputChange(e)}
                                                value={this.state.confirmnewpassword}
                                            />
                                        </div>
                                        <div className="button">
                                            <button type="submit" className="btn">Let do it</button>
                                        </div>

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
export default withCookies(ChangePassword);