import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './Register';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';
import Home from './Home';
import Doctor from './Doctor';
import DoctorDetail from './DoctorDetail';
import Appointment from './Appointment';
import MyFutureAppointments from './MyFutureAppointments';
import MyPreviousAppointments from './MyPreviousAppointments';
import Logout from './Logout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRoutes() //functional component
{
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/change-password' element={<ChangePassword />} />
            <Route path='/doctor' element={<Doctor />} />
            <Route path='/doctor-detail' element={<DoctorDetail />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/my-future-appointment' element={<MyFutureAppointments />} />
            <Route path='/my-previous-appointment' element={<MyPreviousAppointments />} />
            <Route path='/logout' element={<Logout />} />
        </Routes>
    </BrowserRouter>)
}
root.render(<MyRoutes />);