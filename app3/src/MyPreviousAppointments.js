
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
                <a href="MyFutureAppointments.html" className="btn btn-success">Future Appointments</a>
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
                            <td>
                                <button data-bs-toggle="modal" data-bs-target="#ratingreview" type="button" className="btn btn-primary">Rating &amp; Review</button>
                            </td>
                        </tr>
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
                            <td width="20%">
                                4 <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus natus veniam amet
                                dolor, ullam consectetur vero quae, quo iure nostrum ut quas itaque sapiente animi
                                adipisci? Dolor consectetur sed quaerat?
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="modal fade" id="ratingreview" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Rating &amp; Review</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <form>
                            {/* Rating Input */}
                            <div className="mb-3">
                                <label htmlFor="rating" className="form-label">Rating:</label>
                                <select className="form-select" id="rating" name="rating" required>
                                    <option value>Select Rating...</option>
                                    <option value={5}>5 Stars</option>
                                    <option value={4}>4 Stars</option>
                                    <option value={3}>3 Stars</option>
                                    <option value={2}>2 Stars</option>
                                    <option value={1}>1 Star</option>
                                </select>
                            </div>
                            {/* Review Input */}
                            <div className="mb-3">
                                <label htmlFor="review" className="form-label">Review:</label>
                                <textarea className="form-control" id="review" name="review" rows={3} required defaultValue={""} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}
export default class MyPreviousAppointments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <div>
                <Menu />
                <PageHeading title="My Completed Appointments" />
                <MyAppointments />
                <Footer />
            </div>

        </>)
    }
}