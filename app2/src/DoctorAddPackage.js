import { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import getBase from "./api";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./toast-message";
import { useNavigate } from 'react-router-dom';
export default function DoctorAddPackage() {
    let [title, setTitle] = useState();
    let [detail, setDetail] = useState();
    let [charge, setCharge] = useState();
    let [duration, setDuration] = useState();
    let [photo, setPhoto] = useState();
    let [cookies, setCookie, removeCookie] = useCookies('theeasylearn');
    let navigate = useNavigate();
    let addPackage = function (e) {
        e.preventDefault();
        //console.log(title,detail,charge,duration,photo);
        //api call
        let form = new FormData();
        form.append("title", title);
        form.append("detail", detail);
        form.append("charges", charge);
        form.append("duration", duration);
        form.append("photo", photo);
        form.append("doctorid", cookies['doctorid']);

        console.log(form);
        let apiAddress = getBase() + "add_package.php";
        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data: form,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no')
                showError(error);
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'yes') {
                    showMessage(message);
                    setTimeout(() => {
                        navigate("/admin-package/" + cookies['doctorid']);
                    }, 2000);
                }
                else {
                    showError(message);

                }
            }
        }).catch((error) => {
            showError('could not save data to server... please contact administrator');
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
                            <div className="card-header text-bg-primary h4 d-flex justify-content-between">Add new package
                                <Link to="/admin-package" className="btn btn-light"><i className="fa-solid fa-angle-left" /> Back </Link>
                            </div>
                            <div className="card-body mt-2">
                                <form className="row g-3 needs-validation" onSubmit={addPackage} >
                                    <div className="col-6">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" name="title" id="title" className="form-control" required
                                            value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="detail" className="form-label">Details</label>
                                        <input type="text" name="detail" id="detail" className="form-control" required
                                            value={detail} onChange={(e) => setDetail(e.target.value)} />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="charge" className="form-label">Charges</label>
                                        <input type="number" name="charge" id="charge" className="form-control" required
                                            value={charge} onChange={(e) => setCharge(e.target.value)} />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="duration" className="form-label">Duration</label>
                                        <input type="number" name="duration" id="duration" className="form-control" required
                                            value={duration} onChange={(e) => setDuration(e.target.value)} />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="photo" className="form-label">Photo</label>
                                        <input type="file" name="file" id="file" className="form-control" required
                                            onChange={(e) => setPhoto(e.target.files[0])} />
                                    </div>
                                    <div className="col-12 text-end">
                                        <div className="mt-2">
                                            <button type="submit" className="btn btn-primary me-1">Add</button>
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