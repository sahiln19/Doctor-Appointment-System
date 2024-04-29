import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import axios from 'axios';
import getBase from './api';
import { showError, showMessage } from './toast-message'
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { withCookies } from 'react-cookie';

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
class Doctor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: []
        }
    }

    showDoctorDetail = (doctorid) => {
        const { cookies } = this.props; //this is required to use cookies.
        cookies.set("mydoctorid",doctorid,{ path: '/' });
        window.location="/doctor-detail";
    }

    SingleDoctor = (item) => {
        return(<div className = "col-lg-3 col-md-6 col-12" >
            {/* Start Single Doctor */ }
            <a onClick = {()=>this.showDoctorDetail(item.id) } >

                <div className="single-doctor wow fadeInUp" data-wow-delay=".2s">
                    <div className="image">
                        <img src="https://picsum.photos/300" alt="#" />

                    </div>
                    <div className="content">
                        <h5>{item.qualification}</h5>
                        <h3>{item.name} </h3>
                    </div>
                </div>
            </a>
        {/* End Single Doctor */ }
    </div>)
    }
componentDidMount() {
    const { cookies } = this.props; //this is required to use cookies.
    let city = cookies.get('city');
    let serviceid = cookies.get('serviceid');
    let apiAddress = getBase() + `doctor.php?city=${city}&serviceid=${serviceid}`;
    console.log(apiAddress);
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
            let total = response.data[1]['total'];
            if (total === 0)
                showError('no doctors found')
            else {
                response.data.splice(0, 2);
                this.setState({
                    doctors: response.data
                });
            }
        }
    }).catch((error) => {
        showError('could not connect to server');
    });
}
render() {
    return (<>
        <div>
            <Menu />
            <PageHeading title="Doctors" />
            <section className="doctors section">
                <div className="container">
                    <div className="row mt-5">
                        {this.state.doctors.map((item) => this.SingleDoctor(item))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    </>)
}
}
export default withCookies(Doctor);