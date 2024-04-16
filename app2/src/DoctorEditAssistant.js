import { useEffect, useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import getBase from "./api";
import axios from "axios";
import { showError, showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function DoctorEditAssistant() {
  let { assistantid } = useParams();

  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [isFetched,setIsFetched] = useState(false);
  let [cookies,setCookie,removeCookie] = useCookies('theeasylearn');
  let navigate = useNavigate();
  useEffect(() => {
    console.log(assistantid);
    if (isFetched === false) {
      let apiAddress = getBase() + "assitant.php?assistantid=" + assistantid;
      axios({
        method: 'get',
        responseType: 'json',
        url: apiAddress
      }).then((response) => {
        console.log(response.data);
        let error = response.data[0]['error'];
        if (error !== 'no')
          showError(error);
        else 
        {
          setEmail(response.data[2]['email']);
          setPassword(response.data[2]['password']);
          setName(response.data[2]['name']);
          setIsFetched(true);
        }
      }).catch((error) => {
        showError('please contact administrator...');
      })
    }
  })
  let updateAssistant = function (e) {
    e.preventDefault();
    console.log(email, password, name);
    //call api 
    let apiAddress = getBase() + "update_assistant.php";
    let form = new FormData();
    form.append('id',assistantid);
    form.append('name',name);
    form.append('password',password);
    form.append('email',email);
    axios({
      method:'post',
      responseType:'json',
      url:apiAddress,
      data:form
    }).then((response)=> {
      console.log(response.data);
      let error = response.data[0]['error'];
      if(error !== 'no')
      {
          showError(error);
      }
      else 
      {
          let success = response.data[1]['success'];
          let message = response.data[2]['message'];
          if(success === 'yes')
          {
            showMessage(message);
            setTimeout(()=>{
              navigate("/admin-assitant/" + cookies['doctorid']);
            },2000);
          }
          else 
          {
            showError(message);
          }
      }
    }).catch((error) => {
        showError();
    })
  }
  return (<>
    <Menu />
    <main id="main" className="main">
      <div className="container">
        <ToastContainer />
        <div className="row">
          <div className="col-12">
            <div className="mb-3 fw-bolder">
              <h1>Doctor management</h1>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-header text-bg-primary h4 d-flex justify-content-between">Edit Assistant
                <Link to="/admin-assitant" className="btn btn-light"><i className="fa-solid fa-angle-left" /> Back</Link>
              </div>
              <div className="card-body mt-2">
                <form className="row g-3" onSubmit={updateAssistant}>
                  <div className="col-12">
                    <label htmlFor="name" className="form-label"><i className="fa-solid fa-pen-to-square fa-xs" /> Name</label>
                    <input type="text" name="name" id="name" className="form-control" required value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label"><i className="fa-solid fa-pen-to-square fa-xs" /> Email</label>
                    <input type="email" name="email" id="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label"><i className="fa-solid fa-pen-to-square fa-xs" /> Password</label>
                    <input type="password" name="password" id="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="col-12 text-end">
                    <div className="mt-2">
                      <button type="submit" className="btn btn-primary me-1">Save changes</button>
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