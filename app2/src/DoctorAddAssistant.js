import Menu from "./Menu";
import { Link } from "react-router-dom";
import VerifyLogin from "./VerifyLogin";
import { useState } from "react";
import axios from "axios";
import getBase from "./api";
import { useCookies } from "react-cookie";
import { showError, showMessage } from "./toast-message";
import { useNavigate } from 'react-router-dom';

export default function DoctorAddAssistant() {
  let navigate = useNavigate();
  let [email, setEmail] = useState();
  let [name, setName] = useState();
  let [password, setPassword] = useState();
  let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("email is " + email);
    console.log("password is " + password);
    console.log("name is " + name);
    let doctorid = cookies['doctorid'];
    console.log("doctorid is " + doctorid);
    let formdata = new FormData();
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('password', password);
    formdata.append('doctorid', doctorid);
    console.log(formdata);
    axios({
      url: getBase() + 'add_assistance.php',
      responseType: 'json',
      method: 'post',
      data: formdata,
    }).then(function (res) {
      console.log(res);
      if (res.data[0]['error'] != 'no') {
        showError("Oops something went wrong ");
      }
      else if (res.data[1]['success'] === 'yes') {
        showMessage(res.data[2]['message']);
        setTimeout(() => {
          navigate("/admin-assitant/" + cookies['doctorid']);
        }, 2000);
      }
    })
  }

  return (<>
    <Menu />
    <main id="main" className="main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-3 fw-bolder">
              <h1>Doctor management</h1>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-header text-bg-primary h4 d-flex justify-content-between">Add new assistant
                <Link to="/admin-assitant" className="btn btn-light"><i className="fa-solid fa-angle-left" /> Back</Link>
              </div>
              <div className="card-body mt-2">
                <form className="row g-3 needs-validation" noValidate onSubmit={(e) => handleSubmit(e)}>
                  <div className="col-12">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" id="name" className="form-control" required onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="col-12 text-end">
                    <div className="mt-2">
                      <button type="submit" className="btn btn-primary me-1 ">Add</button>
                      <button type="reset" className="btn btn-danger ">Clear</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>


  </>
  );
}