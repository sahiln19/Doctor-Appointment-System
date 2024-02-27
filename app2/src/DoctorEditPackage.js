import Menu from "./Menu";
export default function DoctorEditPackage()
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
      <h5>Edit new package</h5>
      <a href="admin-package.html" className="btn btn-light">Back </a>
    </div>
    <div className="card-body">
      <form className="row mt-3">
        <div className="form-floating mb-3 col-md-6">
          <input type="text" className="form-control" id="title" placeholder="Enter title" required />
          <label htmlFor="title">Edit Title</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <textarea className="form-control" id="detail" rows={3} placeholder="Enter details" required defaultValue={""} />
          <label htmlFor="detail">Edit Detail</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <input type="number" className="form-control" id="charges" placeholder="Enter charges" required />
          <label htmlFor="charges">Edit Charges</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <input type="text" className="form-control" id="duration" placeholder="Enter duration (e.g., 1 hour, 3 days)" required />
          <label htmlFor="duration">Edit Duration</label>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="photo" className="form-label">Change Photo</label>
          <input type="file" className="form-control" id="photo" required />
        </div>
        <div className="col-md-6 mb-3">
          <a href="https://picsum.photos/400" data-lightbox="image-1" data-title="My caption"> <img src="https://picsum.photos/120" className="img-fluid" />
          </a>
        </div>
        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="reset" className="btn btn-secondary">clear all</button>
        </div>
      </form>
    </div>
  </div>
</main>
</>
    )
}