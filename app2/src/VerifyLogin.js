import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function VerifyLogin() {
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    let navigate = useNavigate();

    console.log(cookies['adminid']);

    if (cookies['adminid'] === undefined && cookies['doctorid'] === undefined) 
    {
        // alert('you have not logged in');
        navigate("/");
    }
}