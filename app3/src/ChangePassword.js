import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
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
        this.state = {  
            password: "",
            Newpassword: "",
            Confirmpassword: ""
        }
    }
    handleChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => { 
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (<>
            <div>
                <Menu />
                <ToastContainer />
                <PageHeading title="change your password" />
                <section className="login section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                                <div className="form-head">
                                    <h4 className="title">Account Detail</h4>
                                    <form action="#!" method="post" onSubmit={this.handleSubmit}>
                                        
                                        <div className="form-group">
                                            <input name="password" type="password"  placeholder="Current Password"
                                            onChange = {(e) => this.handleChange(e)} value={this.state.password} />
                                        </div>
                                        <div className="form-group">
                                            <input name="Newpassword" type="password" placeholder="New Password"
                                            onChange = {(e) => this.handleChange(e)} value={this.state.Newpassword} />
                                        </div>
                                        <div className="form-group">
                                            <input name="Confirmpassword" type="password" placeholder="Confirm new password" 
                                            onChange = {(e) => this.handleChange(e)} value={this.state.Confirmpassword}/>
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