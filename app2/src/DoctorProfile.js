import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getBase from "./api";
import axios from "axios";
import { NetworkError, showError, showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

export default function DoctorProfile() {
  let [qualification, setQualification] = useState("");
  let [city, setCity] = useState("");
  let [address, setAddress] = useState("");
  let [gender, setGender] = useState("");
  let [dob, setDob] = useState("");
  let [website, setWebsite] = useState("");
  let [photo, setPhoto] = useState(null);
  let navigate = useNavigate();
  let [cookies, setCookie, removeCookie] = useCookies('theeasylearn');
  useEffect(() => {
    let apiAddress = getBase() + `get_doctor_profile.php?doctorid=${cookies['doctorid']}`;
    axios({
      method: 'get',
      url: apiAddress,
      responseType: 'json'
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no') {
        showError(error);
      }
      else {
        let total = response.data[0]['total'];
        if (total === 0) 
        {
          showError('no profile data found');
        }
        else
        {
          setQualification(response.data[2]['qualification']);
          setCity(response.data[2]['city']);
          setAddress(response.data[2]['address']);
          setDob(response.data[2]['dob']);
          setWebsite(response.data[2]['website']);
          if(response.data[2]['gender'] === '0')
              setGender('female');
          else
              setGender('male');
        }
      }
    }).catch((error) => {
      showError('no such api is available....');
      console.log(error);
    });
  })
  let updateDoctorProfile = function (e) {
    e.preventDefault();
    console.log(qualification, city, address, gender, dob, website, photo);
    let apiAddress = getBase() + "doctor_update_profile.php";
    console.log(apiAddress);
    let form = new FormData();
    form.append("doctor_id", cookies['doctorid']);
    form.append("city", city);
    form.append("qualification", qualification);
    form.append("address", address);
    form.append("gender", gender);
    form.append("dob", dob);
    form.append("website", website);
    form.append("photo", photo);
    console.log(form);
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
        let success = response.data[0]['success'];
        let message = response.data[0]['message'];
        if (success === 'yes') {
          showMessage(message);
          setTimeout(() => {
            navigate("/admin-appointments/" + cookies['doctorid']);
          }, 2000);
        }
        else
          showError(message);
      }
    }).catch((error) => {
      showError('no such api is available....');
      console.log(error);
    });
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
                  <Link to="/index" className="d-flex align-items-center w-auto">
                    <img src="../logo.png" alt height="64px" />
                    <span className="d-none d-lg-block h2">Online Doctor Appointment</span>
                  </Link>
                </div>{/* End Logo */}
              </div>
              <div className="col-lg-8 col-md-8 d-flex flex-column align-items-center justify-content-center">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="py-1">
                      <h5 className="card-title text-center pb-0 fs-4">Create Profile</h5>
                    </div>
                    <form onSubmit={updateDoctorProfile}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="qualification" className="form-label">Qualification</label>
                          <input type="text" className="form-control" id="qualification" name="qualification" required
                            value={qualification} onChange={(e) => setQualification(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="city" className="form-label">City</label>
                          <input type="text" className="form-control" id="city" name="city" required
                            value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="col-md-12">
                          <label htmlFor="address" className="form-label">Address</label>
                          <input type="text" className="form-control" id="address" name="address" required
                            value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="gender" className="form-label">Gender</label>
                          <select className="form-select" id="gender" name="gender" required
                            value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value='' >Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="dob" className="form-label">Date of Birth</label>
                          <input type="date" className="form-control" id="dob" name="dob" required value={dob} onChange={(e) => setDob(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="website" className="form-label">Website</label>
                          <input type="url" className="form-control" id="website" name="website" required
                            value={website} onChange={(e) => setWebsite(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="photo" className="form-label">Photo</label>
                          <input type="file" className="form-control" id="photo" name="photo" accept="image/*" required
                            onChange={(e) => setPhoto(e.target.files[0])} />

                        </div>
                        <div className="col-12 mt-3 text-end">
                          <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div></section>
      </div>
    </main>
  );
}