import React from "react";
import { Link } from "react-router-dom";
import { withCookies } from "react-cookie";
class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  showGuestMenuItem() {
    const { cookies } = this.props;
    console.log(cookies);
    if (cookies.get('userid') === undefined) {
      return (<>
        <li className="nav-item">
          <Link to="/register" aria-label="Toggle navigation">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" aria-label="Toggle navigation">Login</Link>
        </li>
      </>)
    }
  }
  showUserMenuItem() {
    const { cookies } = this.props;
    if (cookies.get('userid') !== undefined) {
      return (<>
        <li className="nav-item">
          <Link to="/change-password" aria-label="Toggle navigation">Change Password</Link>
        </li>
        <li className="nav-item">
          <Link to="/logout" aria-label="Toggle navigation">Logout</Link>
        </li>
        <li className="nav-item">
       
        <Link to="#" aria-label="Toggle navigation"> {cookies.get('email')}</Link>
        </li>
      </>);
    }
  }
  render() {
    return (<header className="header navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src="logo.png" alt="Logo" />
                </a>
                <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link to="/" aria-label="Toggle navigation">Home</Link>
                    </li>
                    {this.showGuestMenuItem()}

                    <li className="nav-item">
                      <Link to="/doctor" aria-label="Toggle navigation">Doctor</Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link to="/doctor-detail" aria-label="Toggle navigation">Doctor Detail</Link>
                    </li> */}
                    <li className="nav-item">
                      <Link to="/my-future-appointment" aria-label="Toggle navigation">My Appointments</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/my-previous-appointment" aria-label="Toggle navigation">Booking History</Link>
                    </li>
                    {this.showUserMenuItem()}
                  </ul>

                </div>

              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>);
  }
}
export default withCookies(Menu);