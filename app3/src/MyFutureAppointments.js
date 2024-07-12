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
class MyFutureAppointments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: []
        }
    }
    componentDidMount() {
        const { cookies } = this.props;
        let userid = cookies.get('userid');
        let apiAddress = getBase() + `get_my_new_appointments.php?patientid=${userid}`;
        console.log(apiAddress);
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0)
                    showError('no appointments booked so far');
                else {
                    // alert('hi');
                    let temp = response.data;
                    console.log('temp has ',temp);
                    temp.splice(0, 2);
                    
                    this.setState({
                        appointments: temp
                    });

                }
            }
        }).catch((error) => {
            showError('error in connecting with server.');
        });
    }
    MyAppointments = (item) => {
        return (
            <tr>
                <td>1</td>
                <td>{item.patient}</td>
                <td>{item.package}</td>
                <td>
                    {item.name}
                </td>
                <td>{item.servicedate}</td>
                <td>{item.servicetime}</td>
            </tr>

        );
    }
    render() {
        return (<>
            <div>
                <Menu />
                <PageHeading title="My Future Appointments...." />

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 text-end mb-3">
                            <Link to="/my-previous-appointment" className="btn btn-success">Completed Appointment</Link>
                        </div>
                        <div className="col-12">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Sr No</th>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Doctor
                                        </th>
                                        <th>Date</th>
                                        <th>Timings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.appointments.map((item) => {
                                        console.log('we are here ',item);
                                        return this.MyAppointments(item)
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >

        </>)
    }
}
export default withCookies(MyFutureAppointments);