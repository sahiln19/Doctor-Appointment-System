import { useParams } from "react-router-dom";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import getBase from './api';
import axios from 'axios';
import { NetworkError, showError, showMessage } from './toast-message'
import { ToastContainer } from "react-toastify";
import { format, parseISO } from "date-fns";
import VerifyLogin from "./VerifyLogin";
import { useCookies } from "react-cookie";
export default function AdminAppointment() {

  VerifyLogin();

  let { doctorid } = useParams();
  console.log(doctorid);
  //create state array;
  let [appointments, setAppointment] = useState([]);
  let [cookies, setCookie, removeCookie] = useCookies('theeasylearn');
  //create state variable 
  let [doctorname, setDoctorName] = useState();
  let [isFetched, setIsFetched] = useState(false);
  let status = ['Book', 'Confirmed', 'Canceled', 'Completed'];
  let fetchAppointment = function (day = null) {

    //setAppointment([]);
    let apiAddress = '';
    if (day === null)
      apiAddress = getBase() + "appointment.php?doctorid=" + doctorid;
    else
      apiAddress = getBase() + "appointment.php?doctorid=" + doctorid + "&day=" + day;
    //alert(apiAddress);

    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no')
        showError(error);
      else if (response.data[1]['total'] === 0) {
        showError('no Appointments booked so far');
      }
      else {
        response.data.splice(0, 2);
        setDoctorName(response.data[0]['name']);
        // setAppointment([...appointments, response.data]);
        setAppointment(response.data);
        setIsFetched(true);
      }
    }).catch((error) => {
      console.log(error.code);
      if (error.code === 'ERR_NETWORK') {
        NetworkError(error)
      }
    });
  }
  useEffect(() => {
    //api calling
    if (isFetched == false) {
      fetchAppointment();
    }
  });
  let updateAppointment = function (mode, appointmentid) {
    console.log(appointmentid + " ", mode);
    let apiAddress = getBase() + "update_appointment.php?appointmentid=" + appointmentid;
    if (mode === 'accept') {
      apiAddress += "&status=1";
    }
    else {
      apiAddress += "&status=2";
    }
    console.log(apiAddress);

    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    })
      .then((response) => {
        console.log(response.data);
        let error = response.data[0]['error'];
        if (error !== 'no')
          showError(error);
        else {
          let success = response.data[1]['success'];
          let message = response.data[2]['message'];

          if (success === 'yes') {
            showMessage(message);
          }
          else {
            showError(message);
          }
          let temp = appointments.filter((item)=>{
              if(item.id === appointmentid && mode === 'accept')
              {
                item.status = '1';
              }
              else 
              {
                item.status = '2';
              }
              return item
          });
          setAppointment(temp);
        }
      })
      .catch((error) => {
        showError(error);
      });
  }
  let AppointmentManagent = function (props) {
    console.log(props.status,props.appointmentid);
    //alert('we are here');
    if (cookies['assitantid'] === undefined)
      return status[props.status];
    else {
      return (<>
        <button onClick={() => updateAppointment('accept', props.appointmentid)} type='button' className="btn btn-success btn-sm">{(props.status === '1')?'Accepted':'accept'}</button>&nbsp;
        <button onClick={() => updateAppointment('cancel', props.appointmentid)} type='button' className="btn btn-danger btn-sm">{(props.status === '2')?'Canceled':'Cancel'}</button>
      </>)
    }

  }
  let displayAppointment = function (item) {
    console.log(item);
    return (<tr>
      <td>{item.id}</td>
      <td>{item.patient}
      </td>
      <td>
        {item.package}
      </td>
      <td>{format(parseISO(item.appointmentdate), "EEEE,dd-MM-yyyy")}</td>
      <td>{item.servicetime} {format(parseISO(item.servicedate), "EEEE,dd-MM-yyyy")}</td>
      <td>{item.remarks} </td>
      <td><AppointmentManagent status={item.status} appointmentid={item.id} /></td>
    </tr>);
  }
  return (<div>
    <Menu />
    <main id="main" className="main">
      <ToastContainer />
      <div className="pagetitle">
        <h1>
          Doctor Management
        </h1>
      </div>{/* End Page Title */}
      <div className="card shadow">
        <div className="card-header text-bg-primary d-flex justify-content-between">
          <h5>Appointment of  ({doctorname})</h5>
          <div>
            <sp className="fs-4">Select day</sp>
            <input type="button" defaultValue="Yesterday" className="btn btn-sm btn-secondary" onClick={() => fetchAppointment('yesterday')} />
            <input type="button" defaultValue="Today" className="btn btn-sm btn-light"
              onClick={() => fetchAppointment('today')} />
            <input type="button" defaultValue="Tomorrow" className="btn btn-sm btn-success"
              onClick={() => fetchAppointment('tomorrow')} />
          </div>
          <button type="button" title="print" className="btn btn-light">
            <i className="fa fa-print" />
          </button>
        </div>
        <div className="card-body">
          <p className="fw-bold py-2">Today' Appointment</p>
          <table className="mt-2 table table-bordered table-striped">
            <thead>
              <tr>
                <th>Sr no</th>
                <th>Patient</th>
                <th>Package</th>
                <th>App. Date</th>
                <th>Service Datetime</th>
                <th>Remarks</th>
                <th width='20%'>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((item) => displayAppointment(item))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
  );
}