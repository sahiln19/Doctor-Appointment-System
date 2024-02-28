import { Link } from "react-router-dom"
import Menu from "./Menu" 
export default function DoctorEditAssitant()
{
    return(
        <>
        <Menu/>
        <main id="main" className="main">
  <div className="pagetitle">
    <h1>
      Doctor Management
    </h1>
  </div>{/* End Page Title */}
  <div className="card shadow">
    <div className="card-header text-bg-primary d-flex justify-content-between">
      <h5>Edit assitant</h5>
      <Link to="./admin-assitant" className="btn btn-light">Back</Link>
    </div>
    <div className="card-body pt-3">
      <form>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
          <label htmlFor="email">Edit Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="password" placeholder="Password" required />
          <label htmlFor="password">Edit Password</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="name" placeholder="Full name" required />
          <label htmlFor="name">Edit Name</label>
        </div>
        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary">Save changes</button>
          <button type="reset" className="btn btn-secondary">clear all</button>
        </div>
      </form>
    </div>
  </div>
</main>

        
        </>
    )
}