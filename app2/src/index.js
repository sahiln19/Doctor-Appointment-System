import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminLogin from './AdminLogin';
import AdminForgotPassword from './AdminForgotPassword';
import AdminAppointment from './AdminAppointment';
import AdminAssitant from './AdminAssitant';
import AdminChangePassword from './AdminChangePassword';
import AdminComposeEmail from './AdminComposeEmail';
import AdminDoctorManagement from './AdminDoctorManagement';
import AdminPackage from './AdminPackage';
import DoctorForgotPassword from './DoctorForgotPassword';
import DoctorLogin from './DoctorLogin';
import DoctorRegister from './DoctorRegister';
import DoctorAddAssitant from './DoctorAddAssitant';
import DoctorAddPackage from './DoctorAddPackage';
import DoctorEditAssitant from './DoctorEditAssitant';
import DoctorEditPackage from './DoctorEditPackage';
import DoctorProfile from './DoctorProfile';
import Logout from './Logout';
import { withCookies } from 'react-cookie';
import NoPageFound from './NoPageFound';

//creatin function which have routes.
function MyRoutes(){

    return(<BrowserRouter>
    <Routes>
    <Route index path='/' element={<AdminLogin />} /> 
            <Route path='/admin-forgot' element={<AdminForgotPassword />} /> 
            <Route path='/doctor-forgot' element={<DoctorForgotPassword />} /> 
            <Route path='/doctor-register' element={<DoctorRegister />} /> 
            <Route path='/login' element={<DoctorLogin />} /> 
            <Route path='/admin-appointment' element={<AdminAppointment />} /> 
            <Route path='/admin-assitant' element={<AdminAssitant />} /> 
            <Route path='/admin-change-password' element={<AdminChangePassword />} /> 
            <Route path='/admin-compose-email' element={<AdminComposeEmail />} /> 
            <Route path='/doctor-add-assitant' element={<DoctorAddAssitant />} />
            <Route path='/doctor-edit-assitant' element={<DoctorEditAssitant />} />
            <Route path='/doctor-add-package' element={<DoctorAddPackage />} />
            <Route path='/doctor-edit-package' element={<DoctorEditPackage />} />
            <Route path='/admin-doctor-management' element={<AdminDoctorManagement />} />
            <Route path='/doctor-profile' element={<DoctorProfile />} />
            <Route path='/admin-package' element={<AdminPackage />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<NoPageFound />} />
        </Routes>
        </BrowserRouter>);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
var myroutesWithCookies = withCookies(MyRoutes);
root.render(<MyRoutes/>)

