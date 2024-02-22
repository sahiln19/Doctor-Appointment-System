export default function DoctorRegister()
{
    return(<main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="d-flex justify-content-center py-4">
                    <a href="#" className="d-flex align-items-center w-auto">
                      <img src="../logo.png" alt height="64px" />
                      <span className="d-none d-lg-block h2">Online Doctor Appointment</span>
                    </a>
                  </div>{/* End Logo */}
                </div>
                <div className="col-lg-8 col-md-8 d-flex flex-column align-items-center justify-content-center">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="py-1">
                        <h5 className="card-title text-center pb-0 fs-4">Register as Doctor</h5>
                      </div>
                      <form className="row">
                        <div className="col-sm-6 col-12">
                          <label htmlFor="yourName" className="form-label">Your Name</label>
                          <input type="text" name="name" className="form-control" id="yourName" required />
                          <div className="invalid-feedback">Please, enter your name!</div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <label htmlFor="yourEmail" className="form-label">Your Email</label>
                          <input type="email" name="email" className="form-control" id="yourEmail" required />
                          <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                        </div>
                        <div className="col-sm-6 col-12 mt-sm-2">
                          <label htmlFor="yourName" className="form-label">Your Mobile</label>
                          <input type="text" name="name" className="form-control" id="yourName" required />
                          <div className="invalid-feedback">Please, enter your name!</div>
                        </div>
                        <div className="col-sm-6 col-12 mt-sm-2">
                          <label htmlFor="yourEmail" className="form-label">Your Registeration No</label>
                          <input type="email" name="email" className="form-control" id="yourEmail" required />
                          <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                        </div>
                        <div className="col-sm-6 col-12 mt-sm-2">
                          <label htmlFor="yourPassword" className="form-label">Password</label>
                          <input type="password" name="password" className="form-control" id="yourPassword" required />
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>
                        <div className="col-sm-6 col-12 mt-sm-2">
                          <label htmlFor="yourPassword" className="form-label">Confirm Password</label>
                          <input type="password" name="password" className="form-control" id="yourPassword" required />
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>
                      </form></div>
                    <div className="col-12 px-3 pb-2">
                      <button className="btn btn-primary w-100" type="submit">Create Account</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section></div>
      </main>
      );
}