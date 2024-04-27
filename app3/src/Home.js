import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import axios from 'axios';
import getBase from './api';
import { showError, showMessage } from './toast-message'
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

let Slider = (props) => {
    return (<section className="hero-area ">
        <div className="hero-slider">
            <div className="single-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="hero-text">
                                {/* Start Hero Text */}
                                <div className="section-heading">
                                    <h2 className="wow fadeInLeft" data-wow-delay=".3s">Find A Doctor &amp; <br />Book Appointment
                                    </h2>
                                    <p className="wow fadeInLeft" data-wow-delay=".5s">Experience the convenience of booking your doctor appointments online! Say goodbye to long waiting times and the hassle of phone calls. With our user-friendly online booking system, you can schedule appointments with ease, anytime and anywhere. Take control of your healthcare journey and prioritize your well-being. Don't delay your medical needs – book your appointment today and embark on the path to better health! </p>
                                    <div className="button wow fadeInLeft" data-wow-delay=".7s">
                                        <a href="appointment.html" className="btn">Book Appointment</a>
                                    </div>
                                </div>
                                {/* End Hero Text */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="hero-image wow fadeInRight" data-wow-delay=".5s">
                                <img src="site/assets/images/hero/02.png" alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
let BookAppointment = (props) => {
    return (<section className="appointment">
        <div className="container">
            {/* Appointment Form */}
            <div className="appointment-form">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="appointment-title">
                            <span>Appointment</span>
                            <h2>Book An Appointment</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 p-0">
                        <div className="appointment-input">
                            <select className="form-select" required>
                                <option value=''>Select city</option>
                                {props.cities.map((item) => {
                                    return <option value={item.city}>{item.city}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 p-0">
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
                    <div className="col-lg-4 col-md-6 col-12 custom-padding">
                        <div className="appointment-btn button">
                            <button className="btn">Get Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Appointment Form */}
        </div>
    </section>
    )
}
let SpecalitiesItem = (props) => {
    return (<div className="col-lg-4 col-md-12 col-12">
        <div className="portfolio-sidebar">
            <div className="single-widget researcher-details">
                <h2 className="text-center text-success">Dental Care Treatment</h2>
            </div>

        </div>
    </div>)
}
let Specalities = (props) => {
    return (<section className="departments section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h3>Departments</h3>
                        <h2 className="wow fadeInUp" data-wow-delay=".4s">Specialities available</h2>
                        <p className="wow fadeInUp" data-wow-delay=".6s">We Provide Many faculties to book appointment</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <SpecalitiesItem title='Hair Growth Treatment' />

            </div>
        </div>
    </section>
    )
}
let FaceAndFigures = (props) => {
    return (<section className="our-achievement section">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                    <div className="single-achievement wow fadeInUp" data-wow-delay=".2s">
                        <i className="lni lni-apartment" />
                        <h3 className="counter"><span id="secondo1" className="countup" cup-end={1250}>1250</span></h3>
                        <p>Available Specialities</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                    <div className="single-achievement wow fadeInUp" data-wow-delay=".4s">
                        <i className="lni lni-sthethoscope" />
                        <h3 className="counter"><span id="secondo2" className="countup" cup-end={350}>350</span></h3>
                        <p>Available Doctors</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                    <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
                        <i className="lni lni-emoji-smile" />
                        <h3 className="counter"><span id="secondo3" className="countup" cup-end={2500}>2500</span></h3>
                        <p>Happy Patients</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12">
                    <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
                        <i className="lni lni-certificate" />
                        <h3 className="counter"><span id="secondo3" className="countup" cup-end={35}>35</span></h3>
                        <p>No of appointments Booked</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities : [],
            services : []
        }
    }
    componentDidMount()
    {
        let apiAddress = getBase() + "city.php";
        axios({
            method:'get',
            url:apiAddress,
            responseType:'json'
        }).then((response) =>{
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if(total === 0)
                    showError('no city found')
                else 
                {
                    response.data.splice(0,2);
                    this.setState({
                        cities : response.data
                    });
                }
            }
        }).catch((error) => {
            showError('could not connect to server');
        })
    }
    render() {
        return (<>
            <div>
                <Menu />
                <ToastContainer />
                <Slider />
                <BookAppointment cities={this.state.cities} />
                <FaceAndFigures />
                <Specalities />
                <Footer />
            </div>

        </>)
    }
}