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
