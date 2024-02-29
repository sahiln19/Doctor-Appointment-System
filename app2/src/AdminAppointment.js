import React from "react";
import Menu from "./Menu";
export default function AdminAppointment()
{
    return(<>
        < Menu />
        <main id="main" className="main">
  <div className="pagetitle">
    <h1>
      Doctor Management
    </h1>
  </div>{/* End Page Title */}
  <div className="card shadow">
    <div className="card-header text-bg-primary d-flex justify-content-between">
      <h5>Appointment of  (jaydeep)</h5>
      <div>
        <sp className="fs-4">Select day</sp>
        <input type="button" defaultValue="Yesterday" className="btn btn-sm btn-secondary" />
        <input type="button" defaultValue="Today" className="btn btn-sm btn-light" />
        <input type="button" defaultValue="Tomorrow" className="btn btn-sm btn-success" />
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
            <th>User</th>
            <th>Service</th>
            <th>App. Date</th>
            <th>Service Datetime</th>
            <th>Remarks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>sahil N
            </td>
            <td>
              Dermatology
            </td>
            <td>10-feb-2024</td>
            <td>11:00 AM 14-feb-2024</td>
            <td>Skin and Hair issues </td>
            <td>Confirmed</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</main>
    </>

    );
}