import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
function showhideSidebar() {
     //   alert('hi');
     document.body.classList.toggle('toggle-sidebar');
}
function AdminMenuItems() {
}
function DoctorMenuItem() {
     let [cookies, setCookie, removeCookie] = useCookies('theeasylearn');
     if (cookies['doctorid'] !== undefined) {
          return (<> {/* links for doctor  */}
               <li className="nav-item shadow-sm">
                    <Link className="nav-link collapsed" to="/doctor-home">
                         <i className="fa fa-home fa-2x" />
                         <span>Home</span>
                    </Link>
               </li>
               <li className="nav-item shadow-sm">
                    <Link className="nav-link collapsed" to="/doctor-profile">
                         <i className="fa fa-home fa-2x" />
                         <span>My Profile</span>
                    </Link>
               </li>
               <li className="nav-item shadow-sm">
                    <Link className="nav-link collapsed" to={"/admin-package/" + cookies['doctorid']}>
                         <i className="fa fa-home fa-2x" />
                         <span>My Package</span>
                    </Link>
               </li>
               <li className="nav-item shadow-sm">
                    <Link className="nav-link collapsed" to={"/admin-assitant/" + cookies['doctorid']}>
                         <i className="fa fa-home fa-2x" />
                         <span>My Assitants</span>
                    </Link>
               </li>
               <li className="nav-item shadow-sm">
                    <Link className="nav-link collapsed" to={"/admin-appointments/" + cookies['doctorid']}>
                         <i className="fa fa-home fa-2x" />
                         <span>My Appointments</span>
                    </Link>
               </li></>);
     }
}
function AssitantMenuItem() {
     let [cookies, setCookie, removeCookie] = useCookies('theeasylearn');
     if (cookies['assitantid'] !== undefined) {
          return (<>  {/* links for assitant */}
               <li className="nav-item shadow-sm">
                    <Link className="nav-link collapsed" to="/admin-appointment">
                         <i className="fa fa-home fa-2x" />
                         <span>Home</span>
                    </Link>
               </li>

               {/* End Dashboard Nav */}</>);
     }
}
export default function Menu() {
     return (
          <>
               <header id="header" className="header fixed-top d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-between">
                         <Link to="/admin-home" className="logo d-flex align-items-center">
                              <img src="../logo.png" alt />
                              <span className="d-none d-lg-block">Doctor Appointment</span>
                         </Link>
                         <i className="bi bi-list toggle-sidebar-btn"
                              onClick={showhideSidebar}></i>
                    </div>{/* End Logo */}
                    <nav className="header-nav ms-auto">
                         <ul className="d-flex align-items-center">
                              <li className="nav-item dropdown pe-3">
                                   <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="/admin-home">
                                        <span className="d-none d-md-block ps-2">Online Doctor Appointment System</span>
                                        <img src="../logo.png" alt="Profile" className="rounded-circle" />
                                   </Link>{/* End Profile Iamge Icon */}
                              </li>{/* End Profile Nav */}
                         </ul>
                    </nav>{/* End Icons Navigation */}
               </header>{/* End Header */}
               {/* sidebar */}
               <aside id="sidebar" className="sidebar">
                    <ul className="sidebar-nav" id="sidebar-nav">
                         <AdminMenuItems />
                         <DoctorMenuItem />
                         <AssitantMenuItem />
                         {/* links for all users (admin/doctor/assitant) */}
                         <li className="nav-item shadow-sm">
                              <Link className="nav-link collapsed" to="/admin-change-password">
                                   <i className="fa fa-home fa-2x" />
                                   <span>Change Password</span>
                              </Link>
                         </li>
                         <li className="nav-item shadow-sm">
                              <Link className="nav-link collapsed" to="/logout">
                                   <i className="fa fa-home fa-2x" />
                                   <span>Logout</span>
                              </Link>
                         </li>
                    </ul>
               </aside>
          </>);
}