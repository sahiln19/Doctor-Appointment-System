import Menu from "./Menu";
export default function AdminAssitant()
{
    return(
        <>
        < Menu/>
        {/* functional components */}
        <main id="main" className="main">
  <div className="pagetitle">
    <h1>
      Doctor Management
    </h1>
  </div>{/* End Page Title */}
  <div className="card shadow">
    <div className="card-header text-bg-primary d-flex justify-content-between">
      <h5>Assitant of  (jaydeep)</h5>
      <a href="doctor-add-assitant.html" className="btn btn-light">Add Assitant <i className="fa fa-save" /></a>
    </div>
    <div className="card-body">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>mohit solanki
            </td>
            <td>
              mohitsolanki17@gmail.com
            </td>
            <td>
              <a title="edit assitant" href="doctor-edit-assitant.html"><i className="fa fa-pencil fa-2x" /></a>
              <a title="remove assitant" href="#"><i className="fa fa-trash fa-2x" /></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</main>
</>
    );
}