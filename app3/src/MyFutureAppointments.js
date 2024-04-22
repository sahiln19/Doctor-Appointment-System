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
let MyAppointments = (props) => {
    return (<div className="container mt-5">
        <div className="row">
            <div className="col-12 text-end mb-3">
                <a href="my-previous-appointment.html" className="btn btn-success">Completed Appointment</a>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Ajay bhai</td>
                            <td>Cardiologist</td>
                            <td>
                                Dr Lakshman Sheth <br />
                                Hill drive, bhavnagar
                            </td>
                            <td>30-04-2024</td>
                            <td>05:00 AM</td>
                            <td>1234567890</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
}
export default class MyFutureAppointments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <div>
                <Menu />
                <PageHeading title="My Future Appointments" />
                <MyAppointments />
                <Footer />
            </div>

        </>)
    }
}