import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getBase from "./api";
import { showError, NetworkError, showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import VerifyLogin from "./VerifyLogin";
import { useCookies } from "react-cookie";
import axios from "axios";
export default function AdminPackage() {
  let [cookies, setCookie, removeCookie] = useCookies('theeasylearn');
  VerifyLogin();
  //create variable that has doctorid passed in route
  let { doctorid } = useParams();
  var [isDataFetched,setIsDataFetched] = useState(false); 
  //create state array
  let [packages, setPackage] = useState([]);
  let [doctorname, setDoctorName] = useState('');
  console.log("doctor id", doctorid);
  useEffect(() => {
    if (isDataFetched === false) {
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
            setIsDataFetched(false);
          }
        }).catch((error) => {
          console.log("Fetch error:", error);
          NetworkError();

        });
    }
  })
  let deletePackage = function (packageid) {
    // alert(packageid);
    let apiAddress = getBase() + "delete_package.php?id=" + packageid;
    axios({
      method: 'get',
      responsetype: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no')
        showError(error);
      else {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];
        if (success === 'yes') {
          //findout package whose id match with packageid and delete it
          let temp = packages.filter((item) => {
            if (item.id !== packageid)
            {

                console.log('item found ',item.packageid,packageid);
                return item;
            }
          });
          setPackage(temp);
          showMessage(message);
        }
        else
          showError(message);
      }
    }).catch((error) => {
      showError('could not connect to server...');

    })
  }
  let DisplayLinks = function (props) {
    if (cookies['doctorid'] !== undefined)
      return (<>
        <Link to=''><i className="fa fa-pencil fa-2x"></i></Link>&nbsp;&nbsp;
        <Link to='' onClick={() => deletePackage(props.packageid)}><i className="fa fa-trash fa-2x"></i></Link>
      </>)
  }
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
      <td>{item.duration} <br />
        {<DisplayLinks packageid={item.id} />}
      </td>

    </tr>)
  }
  let noPackageFound = function () {
    return (<tr>
      <td colSpan='6' className="text-danger fs-3 text-center">No Package Found</td>
    </tr>)
  }
  let AddPackage = function () {
    if (cookies['doctorid'] !== undefined)
      return <Link to="/doctor-add-package" className="btn btn-success">Add Package</Link>;
  }
  return (<>
    <Menu />
    <main id="main" className="main">
      <div className="pagetitle">
        <ToastContainer />
        <h1>Doctor Management</h1>
      </div>{/* End Page Title */}
      <div className="card shadow">
        <div className="card-header text-bg-primary d-flex justify-content-between">
          <h5>Packages of - {doctorname}</h5>
          <AddPackage />
        </div>
        <div className="card-body">
          <table className="table table-stripped table-bordered">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Tital<br />Details</th>
                <th>Photo</th>
                <th>Charge</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {(packages.length > 0) ? packages.map((item) => displayPackage(item)) : noPackageFound()}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </>);
}