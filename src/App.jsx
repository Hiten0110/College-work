import React, { useState, useEffect } from "react";
// import Portal from "./components/Portal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
import AOS from 'aos'
import TopBox from "./components/Topbox";
import Dash from "./pages/HR/Dash";
import Loader from "./components/Loader";
import Payment from "../Payment";
import Price from "./pages/Price";
import Payment1 from "../payment1";
import Payment2 from "../Payment2";
import Me from "./pages/HR/Me";
import AddEmployee from "./pages/HR/Addemployee";

// import Conditional from "./pages/conditional";

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
        {/* <div> */}
        
        {/* <Header /> */}
        
        <TopBox/>
        <Routes>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/payment1' element={<Payment1/>}/>
          <Route path='/payment2' element={<Payment2/>}/>
          <Route path='/me' element={<Me/>}/>
          <Route path='/addemp' element={<AddEmployee/>}/>
          
          {/* <Route path='/conditional' element={<Conditional/>}/> */}
          <Route path='/dash' element={<Dash/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/hr' element={<Hrdash/>}/>
          <Route path='/price' element={<Price/>}/>
          <Route path='/employee' element={<Empdash/>}/>
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