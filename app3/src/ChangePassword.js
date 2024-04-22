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
export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <div>
                <Menu />
                <PageHeading title="change your password" />
                <section className="login section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                                <div className="form-head">
                                    <h4 className="title">Account Detail</h4>
                                    <form action="#!" method="post">
                                        
                                        <div className="form-group">
                                            <input name="password" type="password" placeholder="Current Password" />
                                        </div>
                                        <div className="form-group">
                                            <input name="password" type="password" placeholder="New Password" />
                                        </div>
                                        <div className="form-group">
                                            <input name="password" type="password" placeholder="Confirm new password" />
                                        </div>
                                        <div className="button">
                                            <button type="submit" className="btn">Let do it</button>
                                        </div>
                                      
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