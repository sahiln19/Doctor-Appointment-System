import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function VerifyLogin() {
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    let navigate = useNavigate();

    console.log(cookies['adminid']);
    let RedirectToLogin = function () {
        useEffect(() => {
            // alert('you have not logged in');
            navigate("/");
        });
    }
    if (cookies['adminid'] === undefined && cookies['doctorid'] === undefined && cookies['assitantid'] === undefined) {
        RedirectToLogin(); //display login module
    }
}