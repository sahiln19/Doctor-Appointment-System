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
export default class Page extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (<>
            <div>
                <Menu />
                <PageHeading title="Sample Heading...." />
                <Footer />
            </div>

        </>)
    }
}