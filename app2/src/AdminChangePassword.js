import { useState } from "react";
import Menu from "./Menu";
import VerifyLogin from "./VerifyLogin";
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";
import { showError,showMessage } from "./toast-message";
import getBase from "./api";
import axios from "axios";
export default function AdminChangePassword() {
    VerifyLogin();
    //create state variable for all 3 inputs
    let [password, setPassword] = useState();
    let [newPassword, setNewPassword] = useState();
    let [confirmNewPassword, setConfirmNewPassword] = useState();
    //create cookie variable
    let [cookies, setCookie, removeCookie] = useCookies('theeasylearn');

    let changePassword = function(e)
    {
        e.preventDefault();
        console.log(password,newPassword,confirmNewPassword);
        //check newPassword and confirmNewPassword must not be different
        if(newPassword!=confirmNewPassword) // < > >= <= == !=
        {
            showError('new password and confirm new password does not match');
        }
        else 
        {
            //api call
            let apiAddress = getBase() + "admin_change_password.php";
            let form = new FormData();
            let adminid = cookies['adminid'];

            form.append("id",adminid);
            form.append("oldpassword",password);
            form.append("newpassword",newPassword);
            console.log(form);
            axios({
                method:'post',
                responseType:'json',
                url:apiAddress,
                data:form
            }).then((response) => {
                console.log(response);
                let error = response.data[0]['error'];
                if(error!=='no')
                    showError(error);
                else 
                {
                    let success = response.data[1]['success'];
                    let message = response.data[2]['message'];
                    if(success === 'no')
                    {
                        showError(message);
                    }
                    else 
                    {
                        showMessage(message);

                    }
                }
            }).catch((error) => {
                showError(error);
            })
        }
    }
    return (<>
        <Menu />
        <main id="main" className="main">
            <ToastContainer />
            <div className="pagetitle">
                <h1>
                    Doctor Management
                </h1>
            </div>{/* End Page Title */}
            <div className="card shadow">
                <div className="card-header text-bg-primary">
                    <h5>Change Password</h5>
                </div>
                <div className="card-body pt-3">
                    <form action="" onSubmit={changePassword}>
                        <div className="form">
                            {/* Current Password */}
                            <div className="mb-3">
                                <label htmlFor="currentPassword" className="form-label">Current Password</label>
                                <input type="password" className="form-control" id="currentPassword" name="currentPassword" required
                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {/* New Password */}
                            <div className="mb-3">
                                <label htmlFor="newPassword" className="form-label">New Password</label>
                                <input type="password" className="form-control" id="newPassword" name="newPassword" required
                                    value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            </div>
                            {/* Confirm New Password */}
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                <input type="password" className="form-control"
                                    value={confirmNewPassword}
                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                    id="confirmPassword" name="confirmPassword" required />
                            </div>
                            <p className="text-end">
                                <button type="submit" className="btn btn-primary">Save changes</button>
                                <button type="reset" className="btn btn-secondary">Clear</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </>);
}