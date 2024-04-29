import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { withCookies } from "react-cookie";
import getBase from './api';
import { showError, showMessage } from './toast-message'
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import axios from 'axios';

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
class Appointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            mobile: "",
            department: "",
            doctor: "",
            appointmentdate: "",
            time: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    componentDidMount() {
        const { cookies } = this.props; //this is required to use cookies.
        let doctorid = cookies.get('mydoctorid');
        let serviceid = cookies.get('serviceid');
        let apiAddress = getBase() + `get_doctor_name_service_name.php?doctorid=${doctorid}&serviceid=${serviceid}`;
        console.log(apiAddress);
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress,
        }).then((response) => {
            console.log(response);
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let doctorname = response.data[2]['name'];
                let servicename = response.data[3]['title'];
                console.log('doctorname ' + doctorname);
                console.log('servicename ' + servicename);
                this.setState({
                    doctor: doctorname,
                    department: servicename
                });
            }
        });
    }
    bookAppointment = (e) => {
        e.preventDefault();
        console.log(this.state);
        const { cookies } = this.props; //this is required to use cookies.
        console.log(this.state);
        let form = new FormData();
        form.append("doctorid", cookies.get('mydoctorid'));
        form.append("register_user_id", cookies.get('userid'));
        form.append("serviceid", cookies.get('serviceid'));
        form.append("servicedate", this.state.appointmentdate);
        form.append("servicetime", this.state.time);
        form.append("remarks", this.state.name + " has book appointment for " + this.state.department);
        console.log(form);
        let apiAddress = getBase() + "book_appointment.php";
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
                <PageHeading title="Book Appointment " />
                <ToastContainer />
                <section className="appointment page section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                                {/* Appointment Form */}
                                <form onSubmit={this.bookAppointment}>
                                    <div className="appointment-form">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="appointment-title">
                                                    <h2>Book An Appointment</h2>
                                                    <p>Please feel welcome to contact our friendly reception staff with any general or
                                                        medical
                                                        enquiry. Our doctors will receive or return any urgent calls.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12 p-0">
                                                <div className="appointment-input">
                                                    <label htmlFor="name"><i className="lni lni-user" /></label>
                                                    <input type="text" name="name" id="name" placeholder="Your Name" onChange={(e) => this.handleChange(e)} value={this.state.name} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12 p-0">
                                                <div className="appointment-input">
                                                    <label htmlFor="email"><i className="lni lni-envelope" /></label>
                                                    <input type="email" name="email" id="email" placeholder="Your Email" onChange={(e) => this.handleChange(e)} value={this.state.email} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12 p-0">
                                                <div className="appointment-input">
                                                    <label htmlFor="number"><i className="lni lni-phone-set" /></label>
                                                    <input type="text" name="mobile" id="mobile" placeholder="Phone Number" onChange={(e) => this.handleChange(e)} value={this.state.mobile} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12 p-0">
                                                <div className="appointment-input">
                                                    <label htmlFor="department"><i className="lni lni-notepad" /></label>
                                                    <input type="text" name="department" id="department" placeholder="Department" readOnly value={this.state.department} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12 p-0">
                                                <div className="appointment-input">
                                                    <label htmlFor="doctor"><i className="lni lni-sthethoscope" /></label>
                                                    <input type="text" name="doctor" id="doctor"
                                                        value={this.state.doctor} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12 p-0">
                                                <div className="appointment-input">
                                                    <label htmlFor="date"></label>
                                                    <input type="date" name="appointmentdate" id="appointmentdate"
                                                        onChange={(e) => this.handleChange(e)}   />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12 p-0">
                                                <div className="appointment-input">
                                                    <label htmlFor="time">Time</label>
                                                    <input type="time" name="time" id="time"
                                                        onChange={(e) => this.handleChange(e)} value={this.state.time} />
                                                </div>
                                            </div>

                                            <div className="col-12 p-0 text-end">
                                                <div className="appointment-btn button">
                                                    <button className="btn">Get Appointment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* End Appointment Form */}
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

        </>)
    }
}
export default withCookies(Appointment);