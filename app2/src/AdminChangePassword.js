import Menu from "./Menu";

export default function AdminChangePassword()
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
    <div className="card-header text-bg-primary">
      <h5>Change Password</h5>
    </div>
    <div className="card-body pt-3">
      <div className="form">
        {/* Current Password */}
        <div className="mb-3">
          <label htmlFor="currentPassword" className="form-label">Current Password</label>
          <input type="password" className="form-control" id="currentPassword" name="currentPassword" required />
        </div>
        {/* New Password */}
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">New Password</label>
          <input type="password" className="form-control" id="newPassword" name="newPassword" required />
        </div>
        {/* Confirm New Password */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
        </div>
        <p className="text-end">
          <button type="submit" className="btn btn-primary">Save changes</button>
          <button type="reset" className="btn btn-secondary">Clear</button>
        </p>
      </div>
    </div>
  </div>
</main>
</>
    )
}