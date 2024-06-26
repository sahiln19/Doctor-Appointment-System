import React from "react";
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <footer className="footer overlay">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <div className="content">
                                        <p className="copyright-text">Developed by <a href="https://theeasylearnacademy.com/" rel="nofollow" target="_blank">frontend24@theeasylearnacademy</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <a href="#" className="scroll-top">
                <i className="lni lni-chevron-up" />
            </a></>);
    }
}