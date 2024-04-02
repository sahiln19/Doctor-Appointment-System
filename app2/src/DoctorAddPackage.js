import Menu from "./Menu";
import { Link } from "react-router-dom";
export default function DoctorAddPackage() {
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
                            <div className="card-header text-bg-primary h4 d-flex justify-content-between">Add new package
                                <Link to="/admin-package" className="btn btn-light"><i className="fa-solid fa-angle-left" /> Back </Link>
                            </div>
                            <div className="card-body mt-2">
                                <form className="row g-3 needs-validation" noValidate>
                                    <div className="col-6">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" name="title" id="title" className="form-control" required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="detail" className="form-label">Details</label>
                                        <input type="text" name="detail" id="detail" className="form-control" required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="charge" className="form-label">Charges</label>
                                        <input type="number" name="charge" id="charge" className="form-control" required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="duration" className="form-label">Duration</label>
                                        <input type="number" name="duration" id="duration" className="form-control" required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="photo" className="form-label">Photo</label>
                                        <input type="file" name="file" id="file" className="form-control" required />
                                    </div>
                                    <div className="col-12 text-end">
                                        <div className="mt-2">
                                            <button type="submit" className="btn btn-primary me-1">Add</button>
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