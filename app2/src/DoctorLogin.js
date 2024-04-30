import React, { useState } from 'react';
import getBase from "./api";
import axios from "axios";
import { Link } from "react-router-dom";
import { NetworkError, showError, showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";


export default function DoctorLogin() {

    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let navigate = useNavigate();
    let [cookies, setCookie, removeCookie] = useCookies('theeasylearn');
    let verifyLogin = function (e) {
        e.preventDefault();
        var ButtonId = e.target.id; //return id of the cliecked submit button. 
        console.log(email, password, ButtonId);
        if (ButtonId === 'doctor') {
            let apiAddress = getBase() + "doctor_login.php";
            console.log(apiAddress);
            let form = new FormData();
            form.append("email", email);
            form.append("password", password);
            axios({
                method: 'post',
                url: apiAddress,
                responseType: 'json',
                data: form
            }).then((response) => {
                console.log(response.data);
                let error = response.data[0]['error'];
                if (error !== 'no') {
                    showError(error);
                }
                else {
                    let success = response.data[1]['success'];
                    let message = response.data[2]['message'];
                    if (success === 'no') {
                        showError(message);
                    }
                    else {
                        showMessage(message);
                        let doctorid = response.data[3]['id'];
                        setCookie("doctorid", doctorid);
                        //console.log(cookies['doctorid']);
                        //pause code for 3 seconds
                        setTimeout(() => {
                            navigate("/doctor-profile/");
                            // navigate("/admin-appointments/" + doctorid);
                        }, 3000);
                    }
                }
            }).catch((error) => {
                console.log(error);
                NetworkError(error);
            })
        } //end of if 
        else {
            //it means assitant button clicked.
            // let apiAddress = getBase() + "assistant_login.php";
            // console.log(apiAddress);
            // let form = new FormData();
            // form.append("email", email);
            // form.append("password", password);
            // axios({
            //     method: 'post',
            //     url: apiAddress,
            //     responseType: 'json',
            //     data: form
            // }).then((response) => {
            //     console.log(response.data);
            //     let error = response.data[0]['error'];
            //     if (error !== 'no') {
            //         showError(error);
            //     }
            //     else {
            //         let success = response.data[1]['success'];
            //         let message = response.data[2]['message'];
            //         if (success === 'no') {
            //             showError(message);
            //         }
            //         else {
            //             showMessage(message);
            //             let doctorid = response.data[3]['id'];
            //             setCookie("doctorid", doctorid);
            //             //console.log(cookies['doctorid']);
            //             //pause code for 3 seconds
            //             setTimeout(() => {
            //                navigate("/admin-appointments/" + doctorid);
            //             }, 3000);
            //         }
            //     }
            // }).catch((error) => {
            //     console.log(error);
            //     NetworkError(error);
            // });
            //temporary code 
            showMessage('login successfull');
            let assitantid = 1;
            let doctorid = 54; 
            setCookie("docid",doctorid);
            setCookie("assitantid",assitantid);
            //console.log(cookies['doctorid']);
            //pause code for 3 seconds
            setTimeout(() => {
                // navigate("/doctor-profile/");
                navigate("/admin-appointments/" + doctorid);;
            }, 3000);
        } //end of else 
    }
    return (
        <main>
            <div className="container">
                <ToastContainer />
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="d-flex justify-content-center py-4">
                                    <a href="index.html" className="d-flex align-items-center w-auto">
                                        <img src="../logo.png" alt="" height="64px" />
                                        <span className="d-none d-lg-block h2">Online Doctor Appointment</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="py-1">
                                            <h6 className="card-title text-center pb-0 fs-4">Login</h6>
                                        </div>
                                        <form className="row g-3" verifyLogin={verifyLogin}>
                                            <div className="col-12">
                                                <label htmlFor="yourUsername" className="form-label">Email</label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input type="email" name="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="form-control" id="yourUsername" required />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <input type="password" name="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="form-control" id="yourPassword" required />
                                            </div>

                                            <div className="col-12 d-flex justify-content-between">
                                                <button onClick={verifyLogin} id='doctor' className="btn btn-primary w-100" type="submit">Doctor Login</button>&nbsp;
                                                <button onClick={verifyLogin} id='assistant' className="btn btn-success w-100" type="submit">Assistant Login</button>
                                            </div>
                                            <p className="text-end">
                                                <Link to="/doctor-forgot">Forgot password</Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}