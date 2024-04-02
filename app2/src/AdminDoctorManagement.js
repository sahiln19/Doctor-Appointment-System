import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { NetworkError,showMessage } from "./toast-message";
import getBase from "./api";
import VerifyLogin from "./VerifyLogin";
export default function AdminDoctorManagement() {

  VerifyLogin();
  //create empty state array
  let [doctor,setDoctor] = useState([]); 
  //inner function 
  let DisplayDoctor = function(item)
  {
      return ( <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>
          <Link to="https://picsum.photos/400" data-lightbox="image-1" data-title="My caption"> <img src="https://picsum.photos/50" className="img-fluid" />
          </Link>
        </td>
        <td>{item.city}</td>
        <td>
          {item.regno}
        </td>
        <td>
          {item.qualification}
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
  useEffect(() => {
    if (doctor.length == 0) {
      //create variable to store api address
      let apiAddress = getBase() + "doctor.php";
      console.log(apiAddress);
      //get method
      fetch(apiAddress)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let error = data[0]['error'];
          console.log(error);
          if (error !== 'no') //it means error
            alert(error);
          else if (data[1]['total'] === 0) {
            alert('no doctor found');
          }
          else {
            //remove 2 object from 0th index 
            data.splice(0, 2); //2 is not including 
            console.log(data);
            setDoctor(data);
            showMessage('doctors fetched successfully');
          }
        })
        .catch((error) => {
          console.log("Fetch error:", error);
          NetworkError();

        });
    }
  })
  return (<>
    <Menu />
    <main id="main" className="main">
      <ToastContainer />
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
                {doctor.map((item) => DisplayDoctor(item))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </>);
}