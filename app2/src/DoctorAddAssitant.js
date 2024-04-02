import Menu from "./Menu";
import { Link } from "react-router-dom";
import VerifyLogin from "./VerifyLogin";

export default function DoctorAddAssistant() {

    return (<>
        <Menu />
        <main id="main" className="main">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="mb-3 fw-bolder">
          <h1>Doctor management</h1>
        </div>
      </div>
      <div className="col-12">
        <div className="card">
          <div className="card-header text-bg-primary h4 d-flex justify-content-between">Add new assistant 
            <Link to="/admin-assitant" className="btn btn-light"><i className="fa-solid fa-angle-left" /> Back</Link>
          </div>
          <div className="card-body mt-2">
            <form className="row g-3 needs-validation" noValidate>
              <div className="col-12">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" id="name" className="form-control" required />
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" className="form-control" required />
              </div>
              <div className="col-12">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name="password" id="password" className="form-control" required />
              </div>
              <div className="col-12 text-end">
                <div className="mt-2">
                  <button type="submit" className="btn btn-primary me-1 ">Add</button>
                  <button type="reset" className="btn btn-danger ">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>


    </>
    );
}
        


    