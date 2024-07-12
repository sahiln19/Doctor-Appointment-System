import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import axios from 'axios';
import getBase from './api';
import { showError, showMessage } from './toast-message'
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

import { withCookies } from "react-cookie";
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
class MyPreviousAppointments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            isModalOpen: false, // Add state to manage modal visibility
        }
    }
    shouldIDisplayReviewButton(item) {
        //create cookies variable
        const { cookies } = this.props;
        if (parseInt(item.rating) > 0)
            return (<>{item.rating} <br />
                {item.feedback_review}</>)
        else
            return <button onClick={() => cookies.set('appointmentid', item.id, { path: '/' })} data-bs-toggle="modal" data-bs-target="#ratingreview" type="button"
                class="btn btn-primary">Rating & Review</button>;
    }
    MyAppointments = (item) => {
        return (<tr>
            <td>1</td>
            <td>{item.patient}</td>
            <td>{item.package}</td>
            <td>
                {item.name}
                <br />
                {item.address}
            </td>
            <td>{item.servicedate}</td>
            <td>{item.servicetime}</td>
            <td>{item.contactno}</td>
            <td width="20%">
                {this.shouldIDisplayReviewButton(item)}
            </td>
        </tr>
        );
    }

    componentDidMount() {
        if (this.state.appointments.length === 0) {
            const { cookies } = this.props;
            let userid = cookies.get('userid');
            let apiAddress = getBase() + `view_expired_appointment.php?user_id=${userid}`;
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
                        showError('no appointments history');
                    else {
                        // alert('hi');
                        let temp = response.data;
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
    }
    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    postRatingReview = (event) => {
        event.preventDefault();
        const { cookies } = this.props;
        console.log(cookies.get('appointmentid'));
        console.log(this.state.rating, this.state.review);
        let apiAddress = getBase() + `update_rating_review.php`;
        console.log(apiAddress);
        let form = new FormData();
        form.append("id", cookies.get('appointmentid'));
        form.append("rating", this.state.rating);
        form.append("review", this.state.review);
        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data:form
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let success = response.data[1]['success'];
                if (success === 'yes')
                {
                    showMessage(response.data[2]['message']);
                    let updatedAppointment = null;
                    let temp = this.state.appointments.filter((item) => {
                        if(item.id != cookies.get('appointmentid'))
                        {
                            return item;
                        }
                        else 
                        {
                            updatedAppointment = item;
                            updatedAppointment.rating = this.state.rating;
                            updatedAppointment.feedback_review = this.state.review;
                        }
                    });
                    console.log(temp);
                    temp = [...temp,updatedAppointment]
                    this.setState({
                        appointments:temp,
                        isModalOpen: false // Set state to close modal
                    });
                    
                }
                else
                    showError(response.data[2]['message']);
            }
        }).catch((error) => {
            showError('error in connecting with server.');
        });
    }
    render() {
        return (<>
            <div>
                <Menu />
                <PageHeading title="My Completed Appointments" />
                <div className="container mt-5">
                    <ToastContainer />
                    <div className="row">
                        <div className="col-12 text-end mb-3">
                            <Link to="/my-future-appointment" className="btn btn-success">Future Appointments</Link>
                        </div>
                        <div className="col-12">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Sr No</th>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Doctor <br />
                                            Address
                                        </th>
                                        <th>Date</th>
                                        <th>Timings</th>
                                        <th>Contact</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.appointments.map((item) => this.MyAppointments(item))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <form onSubmit={this.postRatingReview}>
                    <div className="modal fade" id="ratingreview" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: this.state.isModalOpen ? 'block' : 'none' }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Rating &amp; Review</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        {/* Rating Input */}
                                        <div className="mb-3">
                                            <label htmlFor="rating" className="form-label">Rating:</label>
                                            <select className="form-select" id="rating" name="rating" required
                                                value={this.state.rating}
                                                onChange={(event) => this.onChangeValue(event)} >
                                                <option value>Select Rating...</option>
                                                <option value='5'>5 Stars</option>
                                                <option value='4'>4 Stars</option>
                                                <option value='3'>3 Stars</option>
                                                <option value='2'>2 Stars</option>
                                                <option value='1'>1 Star</option>
                                                <option value='0'>0 Star</option>
                                            </select>
                                        </div>
                                        {/* Review Input */}
                                        <div className="mb-3">
                                            <label htmlFor="review" className="form-label">Review:</label>
                                            <textarea className="form-control" id="review" name="review" rows={3} required
                                                value={this.state.review}
                                                onChange={(event) => this.onChangeValue(event)} />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>

        </>)
    }
}
export default withCookies(MyPreviousAppointments);