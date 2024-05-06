import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import axios from 'axios';
import getBase from './api';
import { showError, showMessage } from './toast-message'
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { withCookies } from 'react-cookie';

let SpecalitiesItem = (props) => {
    return (<div className="col-lg-4 col-md-12 col-12">
        <div className="portfolio-sidebar">
            <div className="single-widget researcher-details">
                <h4 className="text-center text-success">{props.title}</h4>
            </div>
        </div>
    </div>)
}
class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            services: [],
            services2: [],
            selectedCity: '',
            selectedService: '',
            isDataFetched: false
        }
    }
    GetServiceByCity = (SelectedCity) => {
        this.setState({
            selectedCity: SelectedCity
        });
        let apiAddress = getBase() + "get_service_by_city.php?city=" + SelectedCity;
        axios({
            method: 'get',
            url: apiAddress,
            responseType: 'json'
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0)
                    showError('no service found')
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        services: response.data
                    });
                }
            }
        }).catch((error) => {
            showError('could not connect to server');
        });
    }
    GetCity = () => {
        let apiAddress = getBase() + "city.php";
        axios({
            method: 'get',
            url: apiAddress,
            responseType: 'json'
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0)
                    showError('no city found')
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        cities: response.data
                    });
                }
            }
        }).catch((error) => {
            showError('could not connect to server');
        })
    }
    GetService = () => {
        let apiAddress = getBase() + "get_unique_service.php";
        axios({
            method: 'get',
            url: apiAddress,
            responseType: 'json'
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0)
                    showError('no services found')
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        services2: response.data,
                        isDataFetched: true
                    });
                }
            }
        }).catch((error) => {
            showError('could not connect to server');
        })
    }
    componentDidMount() {
        if (this.state.isDataFetched === false) {
            this.GetCity(); //used to get city from server 
            this.GetService();
            
        }
    }
    onchangeService = (SelectedService) => {
        this.setState({
            selectedService: SelectedService
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state.selectedCity, this.state.selectedService);
        const { cookies } = this.props; //this is required to use cookies.
        cookies.set('city', this.state.selectedCity, { path: '/' });
        cookies.set('serviceid', this.state.selectedService, { path: '/' });
        console.log('cookies has city ', cookies.get('city'))
        console.log('cookies has serviceid ', cookies.get('serviceid'))
        window.location = "/doctor";
    }

    render() {
        return (<>
            <div>
                <Menu />
                <ToastContainer />
                <section className="hero-area ">
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
                <section className="appointment">
                    <div className="container">
                        {/* Appointment Form */}
                        <form method="post" onSubmit={this.submitForm}>
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
                                            <select className="form-select" required
                                                onChange={(e) => this.GetServiceByCity(e.target.value)}>
                                                <option value=''>Select city</option>
                                                {this.state.cities.map((item) => {
                                                    return <option value={item.city}>{item.city}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12 p-0">
                                        <div className="appointment-input">
                                            <label htmlFor="department"><i className="lni lni-notepad" /></label>
                                            <select name="department" id="department"
                                                required onChange={(e) => this.onchangeService(e.target.value)}>
                                                <option value=''>Select department</option>
                                                {this.state.services.map((item) => {
                                                    return <option value={item.id}>{item.title}</option>
                                                })}
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
                        </form>
                        {/* End Appointment Form */}
                    </div>
                </section>
                <section className="our-achievement section">
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
                <section className="departments section">
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
                            {this.state.services2.map((item) => {
                                return <SpecalitiesItem title={item.title} />
                            })}

                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>)
    }
}
export default withCookies(Page);