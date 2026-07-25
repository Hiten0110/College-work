import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Footer from "./components/Footer";
import Products from "./pages/Products";
import Loginform from "./pages/Loginform";
import Industries from "./pages/Industries";
import Learning from "./pages/Learning";
import Support from "./pages/Support";
import Partners from "./pages/Partners";
import Company from "./pages/Company";
import Head from "./components/Head";
import Error from "./pages/Error";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Header1 from "./components/Header1";
import Thanku from "./components/Thanku";
import Signin from "./pages/Signin";
import Admin from "./pages/Admin/Admin";
import Hrdash from "./pages/HR/Hrdash";
import Empdash from "./pages/Employee/Empdash";
import AOS from 'aos';
import TopBox from "./components/Topbox";
import Dash from "./pages/HR/Dash";
import Loader from "./components/Loader";
import Payment from "../Payment";
import Price from "./pages/Price";
import Payment1 from "../Payment1";
import Payment2 from "../Payment2";
import Me from "./pages/HR/Me";
import AddEmployee from "./pages/HR/Addemployee";
import EmployeeAttendance from "./pages/HR/EmployeeAttendance";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

const [loading, setLoading] = useState(true);

useEffect(() => {

  const timer = setTimeout(() => {

    setLoading(false);

  }, 3000);

  return () => clearTimeout(timer);

}, []);

if (loading) {
  return <Loader/>;
}

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#1E3A8A] to-[#2563EB]">
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
        <TopBox/>
        <Routes>
          <Route path='/payment' element={<ProtectedRoute><Payment/></ProtectedRoute>}/>
          <Route path='/payment1' element={<ProtectedRoute><Payment1/></ProtectedRoute>}/>
          <Route path='/payment2' element={<ProtectedRoute><Payment2/></ProtectedRoute>}/>
          <Route path='/me' element={<ProtectedRoute><Me/></ProtectedRoute>}/>
          <Route path='/addemp' element={<ProtectedRoute><AddEmployee/></ProtectedRoute>}/>
          <Route path='/attend' element={<ProtectedRoute><EmployeeAttendance/></ProtectedRoute>}/>
          <Route path='/dash' element={<ProtectedRoute><Dash/></ProtectedRoute>}/>
          <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
          <Route path='/hr' element={<ProtectedRoute><Hrdash/></ProtectedRoute>}/>
          <Route path='/employee' element={<ProtectedRoute><Empdash/></ProtectedRoute>}/>
          <Route path='/price' element={<Price/>}/>
          <Route path='/thankyou' element={<><Header1/><Thanku/></>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path='/*' element={<Error/>}/>
          <Route path="/" element={<Head />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/support" element={<Support />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/company" element={<Company />} />
          <Route path="/signin" element={<><Header1/><Signin/></>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/verifyotp" element={<VerifyOTP/>} />
          <Route path="/resetpassword" element={<ResetPassword/>} />
          <Route path="/get-started" element={<><Header1/><Loginform /></>} />
          <Route path="/loginpage" element={<><Header1/><Loginform /></>} />
        </Routes>
       <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
AOS.init();

// import React from 'react'
// import Payment from '../Payment'

// function App() {
//   return (
//     <div>
//       <Payment/>
//     </div>
//   )
// }

// export default App