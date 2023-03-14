import React from 'react';

import {Login} from "./views/Login/Login";
import UserFunctionPage from "./views/FunctionPage/UserFunctionPage";
import DoctorFunctionPage from "./views/FunctionPage/DoctorFunctionPage";
import ManagerFunctionPage from "./views/FunctionPage/ManagerFunctionPage";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/UserFunctionPage' element={<UserFunctionPage/>}/>
                <Route path='/DoctorFunctionPage' element={<DoctorFunctionPage/>}/>
                <Route path='/ManagerFunctionPage' element={<ManagerFunctionPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
