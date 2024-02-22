export default function Menu()
{
    return(
        <>
        
  <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="d-flex align-items-center justify-content-between">
      <a href="#" className="logo d-flex align-items-center">
        <img src="../logo.png" alt />
        <span className="d-none d-lg-block">Doctor Appointment</span>
      </a>
      <i className="fas fa-bars toggle-sidebar-btn" />
    </div>{/* End Logo */}
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item dropdown pe-3">
          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#">
            <span className="d-none d-md-block ps-2">Online Doctor Appointment System</span>
            <img src="../logo.png" alt="Profile" className="rounded-circle" />
          </a>{/* End Profile Iamge Icon */}
        </li>{/* End Profile Nav */}
      </ul>
    </nav>{/* End Icons Navigation */}
  </header>{/* End Header */}
  {/* sidebar */}
  <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item shadow-sm">
        <a className="nav-link collapsed" href="admin-home.html">
          <i className="fa fa-home fa-2x" />
          <span>Home</span>
        </a>
      </li>
      <li className="nav-item shadow-sm">
        <a className="nav-link collapsed" href="admin-doctor-management.html">
          <i className="fa-solid fa-user-doctor"/>"
          <span>Doctors Management</span>
        </a>
      </li>
      <li className="nav-item shadow-sm">
        <a className="nav-link collapsed" href="doctor-home.html">
          <i className="fa fa-home fa-2x" />
          <span>Home</span>
        </a>
      </li>
      <li className="nav-item shadow-sm">
        <a className="nav-link collapsed" href="doctor-update-profile.html">
        <i className="fa-regular fa-user"/>
          <span>My Profile</span>
        </a>
      </li>
      <li className="nav-item shadow-sm">
        <a className="nav-link collapsed" href="doctor-service.html">
          <i className="fa-solid fa-box-open" />
          <span>My Package</span>
        </a>
      </li>
      <li className="nav-item shadow-sm">
        <a className="nav-link collapsed" href="doctor-assitant.html">
          <i className="fa-solid fa-users fa" />
          <span>My Assitants</span>
        </a>
      </li>
      <li className="nav-item shadow-sm">
        <a className="nav-link collapsed" href="doctor-appointment.html">
        <i className="fa-solid fa-calendar-check"/>
          <span>My Appointments</span>
        </a>
      </li>
      <li className="nav-item shadow-sm">
        <a className="nav-link collapsed" href="assitant-home.html">
          <i className="fa fa-home fa-2x" />
          <span>Home</span>
        </a>
      </li>
      <li className="nav-item shadow-sm">
        <a className="nav-link collapsed" href="change-password.html">
        <i className="fa-solid fa-key"/>
          <span>Change Password</span>
        </a>
      </li>
      <li className="nav-item shadow-sm">
        <a className="nav-link collapsed" href="#">
          <i  className="fa-solid fa-right-from-bracket"/>
          <span>Logout</span>
        </a>
      </li>
      {/* End Dashboard Nav */}
    </ul>
  </aside>

</>
    );
}