import { Navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function Logout()
{
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    let navigate = useNavigate();
    removeCookie("adminid");
    navigate("/");
    return (<></>);
}