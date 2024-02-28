import { Link } from "react-router-dom"
import Menu from "./Menu"
export default function AdminDoctorManagement()
{
    return(
        <>
        < Menu />
        <main id="main" className="main">
  <div className="pagetitle">
    <h1>Doctor Management</h1>
  </div>{/* End Page Title */}
  <div className="card shadow">
    <div className="card-header text-bg-primary">
      <h5>registered Doctors</h5>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-stripped table-bordered">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Photo</th>
              <th>City</th>
              <th>Registration </th>
              <th>Qualification</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>jaydeep </td>
              <td>
                <Link to="https://picsum.photos/400" data-lightbox="image-1" data-title="My caption"> <img src="https://picsum.photos/50" className="img-fluid" />
                </Link>
              </td>
              <td>
                Bhavnagar
              </td>
              <td>
                AB- 1234
              </td>
              <td>
                MD - Psycology
              </td>
              <td>
                <Link to="./admin-compose-email" title="Message"><i className="fa fa-envelope fa-2x m-1" /></Link>
                <Link to="./admin-package" title="Package"><i className="fa-solid fa-box-open fa-2x m-1" /></Link>
                <Link to="./admin-assitant" title="Assitant"><i className="fa-solid fa-users fa-2x text-success m-1" /></Link>
                <Link to="./admin-appointments" title="Appointments"><i className="fa-solid fa-calendar-days fa-2x text-danger m-1" /></Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</main>
</>
    )
}