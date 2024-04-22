import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
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
export default class Appointment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <div>
                <Menu />
                <PageHeading title="Book Appointment " />
                <section className="appointment page section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                                {/* Appointment Form */}
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
                                                <input type="text" name="name" id="name" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 p-0">
                                            <div className="appointment-input">
                                                <label htmlFor="email"><i className="lni lni-envelope" /></label>
                                                <input type="email" name="email" id="email" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 p-0">
                                            <div className="appointment-input">
                                                <label htmlFor="number"><i className="lni lni-phone-set" /></label>
                                                <input type="text" name="number" id="number" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 p-0">
                                            <div className="appointment-input">
                                                <label htmlFor="department"><i className="lni lni-notepad" /></label>
                                                <select name="department" id="department">
                                                    <option value="none" selected disabled>Department</option>
                                                    <option value="none">General Surgery</option>
                                                    <option value="none">Gastroenterology</option>
                                                    <option value="none">Nutrition &amp; Dietetics</option>
                                                    <option value="none">Cardiology</option>
                                                    <option value="none">Neurology</option>
                                                    <option value="none">Pediatric</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12 p-0">
                                            <div className="appointment-input">
                                                <label htmlFor="doctor"><i className="lni lni-sthethoscope" /></label>
                                                <select name="doctor" id="doctor">
                                                    <option value="none" selected disabled>Doctor</option>
                                                    <option value="none">Dr.Felica Queen</option>
                                                    <option value="none">Dr.Alice Williams</option>
                                                    <option value="none">Dr.Michael Bean</option>
                                                    <option value="none">Dr.Harry Russell</option>
                                                    <option value="none">Dr.Mellissa Doe</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12 p-0">
                                            <div className="appointment-input">
                                                <label htmlFor="date"></label>
                                                <input type="date" name="date" id="date" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12 p-0">
                                            <div className="appointment-input">
                                                <label htmlFor="time"></label>
                                                <input type="time" name="time" id="time" />
                                            </div>
                                        </div>
                                       
                                        <div className="col-12 p-0 text-end">
                                            <div className="appointment-btn button">
                                                <button className="btn">Get Appointment</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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