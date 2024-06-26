import { useEffect, useState } from "react";
import getBase from "./api";
import axios from "axios";
import { NetworkError, showError, showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
//create default function
export default function AdminLogin() {
  //state variable
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);

  //create an object using useNavigate Hook
  let navigate = useNavigate();
  let verifyLogin = function (event) {
    //event is implicit argument. implicit argument means arguments received in function automatically
    event.preventDefault(); //required to stop reloading module
    console.log(email, password);
    let apiAddress = getBase() + "admin_login.php";
    console.log(apiAddress);
    // to send to data to api using post method, create object of formData class 
    let form = new FormData(); //FormData is library class of javascript
    form.append("email", email);
    form.append("password", password);
    axios({
      method: 'post',
      url: apiAddress,
      responseType: 'json',
      data: form
    }).then((response) => {
      console.log(response.data);
      // [0: Object { error: "no" }
      // 1: Object { success: "no" }
      // 2: Object { message: "Invalid Login Attempt " }]
      let error = response.data[0]['error'];
      if (error !== 'no')
        showError(error);
      else {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];

        if (success === 'no')
          showError(message);
        else 
        {
          //successfull login
          showMessage(message);
          let id = response.data[3]['id'];
          setCookie('adminid', id, { path: '/' }); //create cookie
          //check whether cookies has been created or not
          console.log("admin id", cookies['adminid']);

          //pause below code execution for 2 seconds
          setTimeout(() => {
            //display other screen to the user
            navigate("/admin-doctor-management");
          },3000);

        }
      }
    })
      .catch((error) => {
        NetworkError(error)
      });
  }
  return (<main>
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <ToastContainer />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="d-flex justify-content-center py-4">
                <a href="index.html" className="d-flex align-items-center w-auto">
                  <img src="../logo.png" alt height="64px" />
                  <span className="d-none d-lg-block h2">Online Doctor Appointment</span>
                </a>
              </div>{/* End Logo */}
            </div>
            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="py-1">
                    <h6 className="card-title text-center pb-0 fs-4">Admin Login</h6>
                  </div>
                  <form className="row g-3 needs-validation" onSubmit={verifyLogin}>
                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">Email</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="email" name="username" className="form-control" id="yourUsername" required
                          value={email} onChange={(event) => setEmail(event.target.value)} />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">Password</label>
                      <input type="password" name="password" className="form-control" id="yourPassword" required value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">Login</button>
                    </div>
                    <p className="text-end">
                      <a href="admin-forgot-password.html">Forgot password</a>
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