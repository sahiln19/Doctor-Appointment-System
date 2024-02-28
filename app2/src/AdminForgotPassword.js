import { Link } from "react-router-dom";

export default function AdminForgotPassword()
{
    return(<main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <Link to="#" className="d-flex align-items-center w-auto">
                      <img src="../logo.png" alt height="64px" />
                      <span className="d-none d-lg-block h4">Online Doctor Appointment</span>
                    </Link>
                  </div>{/* End Logo */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="py-2">
                        <h5 className="card-title text-center pb-0 fs-4"> Admin Login </h5>
                      </div>
                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="yourEmail" className="form-label">Email</label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" name="Email" className="form-control" id="yourEmail" required />
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">Login</button>
                        </div>
                        <div className="col-12 text-end">
                          <p className="small mb-0"> back to <Link to="./admin-login">  Login</Link></p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      );
}