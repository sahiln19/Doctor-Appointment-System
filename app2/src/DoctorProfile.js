import {Link} from "react-router-dom";
export default function DoctorProfile(){
    return(
        <main>
  <div className="container">
    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="d-flex justify-content-center py-4">
              <Link to="/index" className="d-flex align-items-center w-auto">
                <img src="../logo.png" alt height="64px" />
                <span className="d-none d-lg-block h2">Online Doctor Appointment</span>
              </Link>
            </div>{/* End Logo */}
          </div>
          <div className="col-lg-8 col-md-8 d-flex flex-column align-items-center justify-content-center">
            <div className="card mb-3">
              <div className="card-body">
                <div className="py-1">
                  <h5 className="card-title text-center pb-0 fs-4">Create Profile</h5>
                </div>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="qualification" className="form-label">Qualification</label>
                      <input type="text" className="form-control" id="qualification" name="qualification" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="city" className="form-label">City</label>
                      <input type="text" className="form-control" id="city" name="city" required />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input type="text" className="form-control" id="address" name="address" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="gender" className="form-label">Gender</label>
                      <select className="form-select" id="gender" name="gender" required>
                        <option value selected disabled>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="dob" className="form-label">Date of Birth</label>
                      <input type="date" className="form-control" id="dob" name="dob" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="website" className="form-label">Website</label>
                      <input type="url" className="form-control" id="website" name="website" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="photo" className="form-label">Photo</label>
                      <input type="file" className="form-control" id="photo" name="photo" accept="image/*" required />
                    </div>
                    <div className="col-12 mt-3 text-end">
                      <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div></section>
  </div>
</main>
    );
}