import { Link } from "react-router-dom"
import Menu from "./Menu"
export default function AdminPackage()
{
    return(
        <>
        < Menu/>
        <main id="main" className="main">
  <div className="pagetitle">
    <h1>
      Doctor Management
    </h1>
  </div>{/* End Page Title */}
  <div className="card shadow">
    <div className="card-header text-bg-primary d-flex justify-content-between">
      <h5>Packages - (jaydeep)</h5>
      <Link to="./doctor-add-package" className="btn btn-light">Add Package <i className="fa fa-save" /></Link>
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
          <tr>
            <td>1</td>
            <td>Dental Implant <br />
            </td>
            <td title="click to see enlarged image">
              <Link to="https://picsum.photos/400" data-lightbox="image-1" data-title="My caption"> <img src="https://picsum.photos/50" className="img-fluid" />
              </Link>
            </td>
            <td>Rs 70000</td>
            <td>6 hours (2 seating)</td>
            <td>
              <Link title="edit package" href="doctor-edit-package.html"><i className="fa fa-pencil fa-2x m-1" /></Link>
              <Link title="remove package" href="#"><i className="fa fa-trash fa-2x m-1" /></Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</main>

        </>

        

    )
}