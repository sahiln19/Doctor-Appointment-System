import { Link } from "react-router-dom"
import Menu from "./Menu"
import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react' 
import getBase from "./api"
import { showError,NetworkError } from "./toast-message"
import { ToastContainer } from "react-toastify"
import VerifyLogin from "./VerifyLogin" 

export default function AdminPackage()
{
  VerifyLogin();
    //create variable that has doctorid passed in route
    let { doctorid } = useParams();
    //create state array
    let [packages, setPackage] = useState([]);
    let [doctorname,setDoctorName] = useState('');
    console.log("doctor id", doctorid);
    useEffect(() => {
      if (packages.length === 0) {
        let apiAddress = getBase() + "package.php?doctorid=" + doctorid;
        console.log(apiAddress);
        fetch(apiAddress)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            //check is there any error
            let error = data[0]['error'];
            if (error !== 'no') {
              showError(error);
            }
            else if (data[1]['total'] === 0) {
              showError('no packages found');
            }
            else {
              //delete 2 object from array @ begining
              data.splice(0, 2);
              console.log(data);
              setPackage(data);
              setDoctorName(data[0]['name']);
            }
          }).catch((error) => {
            console.log("Fetch error:", error);
            NetworkError();
  
          });
      }
    })
    let displayPackage = function (item) {
      return (<tr>
        <td>{item.id}</td>
        <td><b>{item.title}</b> <br />
          {item.detail}
        </td>
        <td>
          <Link to="https://picsum.photos/400" data-lightbox="image-1" data-title="My caption"> <img src="https://picsum.photos/50" className="img-fluid" />
          </Link>
        </td>
        <td>Rs {item.charges}</td>
        <td>{item.duration}</td>
      </tr>)
    }
    let noPackageFound = function()
    {
      return (<tr>
          <td colSpan='6' className="text-danger fs-3 text-center">No Package Found</td>
      </tr>)
    }
    return(
        <>
        < Menu/>
        <main id="main" className="main">
  <div className="pagetitle">
    <ToastContainer />
    <h1>
      Doctor Management
    </h1>
  </div>{/* End Page Title */}
  <div className="card shadow">
    <div className="card-header text-bg-primary d-flex justify-content-between">
      <h5>Packages - (doctorname)</h5>
    
    </div>
    <div className="card-body">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Title <br /> Detail</th>
            <th>Photo</th>
            <th>Charge</th>
            <th>Duration</th>
            <th width="10%">Action</th>
          </tr>
        </thead>
        <tbody>
          {(packages.length>0) ? packages.map((item) => displayPackage(item)) : noPackageFound()}
        </tbody>
      </table>
    </div>
  </div>
</main>

        </>

        

    )
}