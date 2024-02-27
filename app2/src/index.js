import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminLogin from './AdminLogin';
import AdminForgotPassword from './AdminForgotPassword';
import DoctorForgotPassword from './DoctorForgotPassword';
import DoctorLogin from './DoctorLogin';
import DoctorRegister from './DoctorRegister';
import AdminAppointments from './AdminAppointments';
import AdminAssitant from './AdminAssitant';
import AdminChangePassword from './AdminChangePassword';
import AdminComposeEmail from './AdminComposeEmail';
import AdminDoctorManagement from './AdminDoctorManagement';
import AdminPackage from './AdminPackage';
import DoctorAddAssitant from './DoctorAddAssitant';
import DoctorAddPackage from './DoctorAddPackage';
import DoctorEditAssitant from './DoctorEditAssitant';
import DoctorEditPackage from './DoctorEditPackage';
import DoctorProfile from './DoctorProfile';
import NoPageFound from './NoPageFound';

//creat function which has routes
function MyRoutes(){
    return (
        <BrowserRouter>
        <Routes>
            <Route index path='/' element={<AdminLogin/>} />
            <Route path='/admin-forgot' element={<AdminForgotPassword/>} />
            <Route path='/doctor-forgot' element={<DoctorForgotPassword/>} />
            <Route path='/doctor-register' element={<DoctorRegister/>} />
            <Route path='/login' element={<DoctorLogin/>} />
            <Route path='/admin-appointments' element={<AdminAppointments/>} />
            <Route path='/admin-assitant' element={<AdminAssitant/>} />
            <Route path='/admin-change-password' element={<AdminChangePassword/>} />
            <Route path='/admin-compose-email' element={<AdminComposeEmail/>} />
            <Route path='*' element={<NoPageFound />} />

        </Routes>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NoPageFound/>)
