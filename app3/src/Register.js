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
export default class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <div>
                <Menu />
                <PageHeading title="Sign up" />
                <section className="login registration section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                                <div className="form-head">
                                    <h4 className="title">Create your account</h4>
                                    <form action="#!" method="post">
                                       
                                        <div className="form-group">
                                            <input name="password" type="text" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input name="email" type="email" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input name="password" type="password" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <input name="password" type="password" placeholder="Confirm Password" />
                                        </div>
                                        <div className="form-group">
                                            <input name="mobile" type="number" placeholder="Mobile" />
                                        </div>
                                        <div className="button">
                                            <button type="submit" className="btn">Register</button>
                                        </div>
                                        <p className="outer-link">Already have an account? <a href="login.html"> Login Now</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

        </>)
    }
}