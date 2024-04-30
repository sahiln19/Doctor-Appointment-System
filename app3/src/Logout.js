 import React from 'react';
import { withCookies } from 'react-cookie';

 class Logout extends React.Component {   
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { cookies } = this.props;
        cookies.remove('userid', { path: '/' });
        cookies.remove('email', { path: '/' });
        cookies.remove('mydoctorid', { path: '/' });
        cookies.remove('city', { path: '/' });
        cookies.remove('serviceid', { path: '/' });
        cookies.remove('service', { path: '/' });
        cookies.remove('doctorid', { path: '/' });
        cookies.remove('doctorname', { path: '/' });
        cookies.remove('doctorqualification', { path: '/' });
        cookies.remove('doctorimage', { path: '/' });
        cookies.remove('doctoraddress', { path: '/' });
        cookies.remove('doctormobile', { path: '/' });
        cookies.remove('doctorcity', { path: '/' });
        cookies.remove('doctorcityid', { path: '/' });
        cookies.remove('doctorstate', { path: '/' });
        cookies.remove('doctorstate id', { path: '/' });            
        cookies.remove('doctorfees', { path: '/' });
        cookies.remove('appointmentdate', { path: '/' });
        cookies.remove('appointmenttime', { path: '/' });
        cookies.remove('appointmentid', { path: '/' });
        cookies.remove('appointmentstatus', { path: '/' });
        cookies.remove('appointmentdoctorid', { path: '/' });
        
        window.location = "/";
    }
    render() {
        return (
            <div>
                <h1>Logging out...</h1>
            </div>
        )
    }
}
export default withCookies(Logout);
