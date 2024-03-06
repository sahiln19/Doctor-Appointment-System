import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useEffect } from "react";
export default function AdminDoctorManagement() {
  //inner function 
  let DisplayDoctor = function()
  {
      return ( <tr>
        <td>1</td>
        <td>jaydeep</td>
        <td>
          <Link to="https://picsum.photos/400" data-lightbox="image-1" data-title="My caption"> <img src="https://picsum.photos/50" className="img-fluid" />
          </Link>
        </td>
        <td>
          Bhavnagar</td>
        <td>
          AB- 1234
        </td>
        <td>
        MD - Psycology
        </td>
        <td>
          <Link to="/admin-compose-email" title="Message">
            <lord-icon
              src="https://cdn.lordicon.com/tmqaflqo.json"
              trigger="hover"
              style={{ width: '40px', height: '40px' }}
            />
            </Link>
          <Link to="/admin-package" title="Package">
            <lord-icon
              src="https://cdn.lordicon.com/jqiewnyd.json"
              trigger="hover"
              style={{ width: '40px', height: '40px' }}
            />
            </Link>
          <Link to="/admin-assitant" title="Assitant">
            <lord-icon
              src="https://cdn.lordicon.com/egmlnyku.json"
              trigger="hover"
              style={{ width: '40px', height: '40px' }}
            />
            </Link>
          <Link to="/admin-appointments" title="Appointments">
            <lord-icon
              src="https://cdn.lordicon.com/lzgqzxrq.json"
              trigger="hover"
              style={{ width: '40px', height: '40px' }}
            />
          </Link>
        </td>
      </tr>);
  }
  useEffect(() =>{
    //api call
    // let apiAddress = 
  })
  return (<>
    <Menu />
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Doctor Management</h1>
      </div>{/* End Page Title */}
      <div className="card shadow">
        <div className="card-header text-bg-primary">
          <h5>Registered Doctors</h5>
        </div>
        <div className="card-body mt-3">
          <div className="table-responsive">
            <table className="table table-stripped table-bordered" id="data">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Name</th>
                  <th>Photo</th>
                  <th>City</th>
                  <th>Registration</th>
                  <th>Qualification</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {DisplayDoctor()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </>);
}