import { useEffect, useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import getBase from "./api";
import axios from 'axios';
import { NetworkError, showError, showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import VerifyLogin from "./VerifyLogin";
import { useCookies } from "react-cookie";
export default function AdminAssitant() {
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    var [isDataFetched,setIsDataFetched] = useState(false);
    VerifyLogin();
    //create variable from parameters passed with route
    let { doctorid } = useParams();
    console.log(doctorid);
    //create state array
    let [assistants, setAssitant] = useState([]);
    //create state variable
    let [doctorname, setDoctorName] = useState();
    let deleteAssitant = function (assistantid) {
        console.log(assistantid);
        let apiAddress = getBase() + "delete_assistance.php?id=" + assistantid;
        axios({
            method:'get',
            responseType:'json',
            url:apiAddress
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error !== 'no')
                showError(error);
            else 
            {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if(success === 'yes')
                {
                    showMessage(message);
                    let temp = assistants.filter((item) => {
                        if(item.id !== assistantid)
                            return item;
                    });
                    setAssitant(temp);
                }
            }
        }).catch((error) => {
            showError('could not contact server...');
        })
    }
    let DisplayLinks = function (props) {
        if (cookies['doctorid'] !== undefined)
            return (<><Link title="edit assitant" to={"/doctor-edit-assistant/" + props.assistantid}><i className="fa fa-pencil fa-2x" /></Link>
                <Link title="remove assitant"
                    to=""
                    onClick={(e) => deleteAssitant(props.assistantid)}><i className="fa fa-trash fa-2x" /></Link></>)
    }
    //create inner function 
    let displayAssitant = function (item) {
        return (<tr>
            <td>{item.id}</td>
            <td>{item.name}
            </td>
            <td>
                {item.email}
            </td>
            <td>
                <DisplayLinks assistantid={item.id} />
            </td>
        </tr>);
    }
    let NoAssitantFound = function () {
        return (<tr><td colSpan='4' className="text-center text-danger fs-3">No Assitant Added</td></tr>)
    }

    useEffect(() => {
        if (isDataFetched === false) {
            let apiAddress = getBase() + "assitant.php?doctorid=" + doctorid;
            console.log(apiAddress);
            //api calling using axios
            axios({
                url: apiAddress,
                method: 'get',
                responseType: 'json',
            }).then((response) => {
                console.log(response.data);
                //create variable to store error 
                let error = response.data[0]['error'];
                if (error !== 'no')
                    showError(error);
                else if (response.data[1]['total'] == 0)
                    showError('no assitant found');
                else {
                    response.data.splice(0, 2);
                    setAssitant(response.data);
                    setDoctorName(response.data[0]['doctorname']);
                    setIsDataFetched(true);
                }
            }).catch((error) => {
                NetworkError(error);
            })
        }
    });
    let AddAssitant = function () {
        if (cookies['doctorid'] !== undefined)
            return (<Link to="/doctor-add-assistant" className="btn btn-light">Add Assitant <i className="fa fa-save" /></Link>)
    }
    return (
        <>
            <Menu />
            {/* functional components */}
            <main id="main" className="main">
                <ToastContainer />
                <div className="pagetitle">
                    <h1>
                        Doctor Management
                    </h1>
                </div>{/* End Page Title */}
                <div className="card shadow">
                    <div className="card-header text-bg-primary d-flex justify-content-between">
                        <h5>Assitant of  ({doctorname})</h5>
                        <AddAssitant />
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
                                {(assistants.length > 0) ? assistants.map((item) => displayAssitant(item)) : NoAssitantFound()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}