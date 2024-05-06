import { withCookies } from "react-cookie";
import React from 'react';

class Logout extends React.Component
{
    constructor(props)
    {
        super(props);
        const { cookies } = this.props; //this is required to use cookies.
        cookies.remove("userid");
        cookies.remove("serviceid");
        cookies.remove("email");
    }
    render()
    {
        window.location = "/";
        return (<></>);
    }
}
export default withCookies(Logout);