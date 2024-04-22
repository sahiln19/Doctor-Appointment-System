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
let SingleDoctor = (props) => {
    return (<div className="col-lg-3 col-md-6 col-12">
        {/* Start Single Doctor */}
        <div className="single-doctor wow fadeInUp" data-wow-delay=".2s">
            <div className="image">
                <img src="https://picsum.photos/300" alt="#" />

            </div>
            <div className="content">
                <h5>Cardiologist</h5>
                <h3><a href="doctor-details.html">Dr.Felica Queen</a></h3>
            </div>
        </div>
        {/* End Single Doctor */}
    </div>)
}
let DoctorsTeam = (props) => {
    return (
        <section className="doctors section">
            <div className="container">
                <div className="row mt-5">
                    <SingleDoctor />
                </div>
            </div>
        </section>
    );
}
export default class Doctor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <div>
                <Menu />
                <PageHeading title="Doctors" />
                <DoctorsTeam />
                <Footer />
            </div>

        </>)
    }
}