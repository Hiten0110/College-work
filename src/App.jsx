
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
// import Conditional from "./pages/conditional";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#1E3A8A] to-[#2563EB]">
        {/* <div> */}
        
        {/* <Header /> */}
        <TopBox/>
        <Routes>
          {/* <Route path='/conditional' element={<Conditional/>}/> */}

          <Route path='/admin' element={<Admin/>}/>
          <Route path='/hr' element={<Hrdash/>}/>
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
          <Route path="/Tryxyzpeople" element={<><Header1/><Loginform /></>} />
          
        </Routes>
       <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
AOS.init();