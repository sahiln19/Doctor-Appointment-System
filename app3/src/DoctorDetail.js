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
let MyDoctorDetail = (props) => {
    return (<section className="doctor-details section">
        <div className="container">
            <div className="inner">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                {/* Start Doctor Image */}
                                <div className="image">
                                    <img src="https://picsum.photos/300" alt="#" />
                                </div>
                                {/* End Doctor Image */}
                                {/* Start Doctor Left Bar */}
                                <div className="doctor-left-bar">
                                    {/* Start Single Bar */}
                                    <div className="single-bar">
                                        <h4>Specialty</h4>
                                        <p>Respiratory medicine (lung)</p>
                                    </div>
                                    {/* End Single Bar */}
                                    {/* Start Single Bar */}


                                </div>
                                {/* End Doctor Left Bar */}
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                                {/* Start Main Content */}
                                <div className="content">
                                    <h3 className="name">Dr.Alice Williams
                                        <span>Your Community Safety Net For Over 50 Years.</span>
                                    </h3>
                                    <ul className="list-info">
                                        <li><span>Profession:</span> Neurologist</li>
                                        <li><span>Experience:</span> 10 Years</li>
                                        <li><span>Phone:</span> (+88) 123 456 789</li>
                                        <li><span>Email:</span> contact@williams.com</li>
                                        <li><span>Address:</span> 594 E. Whitemarsh Street Mchenry, IL 60050</li>

                                    </ul>
                                    <div className="button add-list-button">
                                        <a href="appointment.html" className="btn">Book Appointment</a>
                                    </div>
                                </div>
                                {/* End Main Content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default class DoctorDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <div>
                <Menu />
                <PageHeading title="Doctor Detail" />
                <MyDoctorDetail />
                <Footer />
            </div>

        </>)
    }
}