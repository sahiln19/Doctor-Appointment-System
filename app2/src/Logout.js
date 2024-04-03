import { Navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function Logout()
{
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    let navigate = useNavigate();
    if(cookies['adminid'] !== undefined){
        removeCookie("adminid");
        navigate("/");

    }
    if (cookies['doctorid'] !== undefined) {
        removeCookie("doctorid");
        navigate("/login");

    }
    if (cookies['assitantid'] !== undefined) {
        removeCookie("assitantid");
        navigate("/login");

    }
    removeCookie("adminid");
    navigate("/");
    return (<></>);
}