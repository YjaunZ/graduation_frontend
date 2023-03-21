import React from 'react';

import {Login} from "./views/Login/Login";
import UserFunctionPage from "./views/FunctionPage/UserFunctionPage";
import DoctorFunctionPage from "./views/FunctionPage/DoctorFunctionPage";
import ManagerFunctionPage from "./views/FunctionPage/ManagerFunctionPage";
import UserAppointment from "./views/FunctionPage/User/UserAppointment";
import UserInfo from "./views/FunctionPage/User/UserInfo";
import UserInfoAppointment from "./views/FunctionPage/User/UserInfoAppointment";
import UserResult from "./views/FunctionPage/User/UserResult"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/UserFunctionPage' element={<UserFunctionPage/>}>
                    <Route path='userAppointment' element={<UserAppointment/>}/>
                    <Route path='userInfo' element={<UserInfo/>}></Route>
                    <Route path='userInfoAppointment' element={<UserInfoAppointment/>}/>
                    <Route path='userResult' element={<UserResult/>}/>
                </Route>
                <Route path='/DoctorFunctionPage' element={<DoctorFunctionPage/>}/>
                <Route path='/ManagerFunctionPage' element={<ManagerFunctionPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
