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
export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <div>
                <Menu />
                <PageHeading title="Sign In" />
                <section className="login section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                                <div className="form-head">
                                    <h4 className="title">Login To Your Account</h4>
                                    <form action="#!" method="post">
                                        <div className="form-group">
                                            <input name="email" type="email" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input name="password" type="password" placeholder="Password" />
                                        </div>
                                        <div className="check-and-pass">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input width-auto" id="exampleCheck1" />
                                                        <label className="form-check-label">Remember me</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <a href="javascript:void(0)" className="lost-pass">Lost your password?</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button">
                                            <button type="submit" className="btn">Login Now</button>
                                        </div>
                                        <p className="outer-link">Don't have an account? <a href="registration.html">Register here</a>
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
