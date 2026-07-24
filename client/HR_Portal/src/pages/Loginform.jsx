
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Loader from "../components/Loader";

function Loginform() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    loginas: "",
  });

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const postData = async (e) => {

    e.preventDefault();

    console.log(formData);

    try {

      let response = await fetch(
        "http://localhost:3001/api/user/postData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      let result = await response.json();

      console.log(result);
      if (response.ok) {

        // Save user details for later use
        localStorage.setItem("loginas", formData.loginas);
        localStorage.setItem("username", formData.name);
        localStorage.setItem("email", formData.email);

        // Go to Price Page
        navigate("/price");

      }

    } catch (error) {

      console.log(error);

    }

  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 1000);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-10">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

        {/* Logo */}
        <h1 className="text-4xl font-bold text-blue-600">
          Hire<span className="text-black">Karo</span>
        </h1>

        <h2 className="text-3xl font-bold mt-6">
          Start your 30-day free trial
        </h2>

        <form onSubmit={postData} className="mt-8 space-y-5">

          {/* Name */}
          <div>
            <label className="block text-base font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>

            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 p-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-base font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>

            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 p-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-base font-medium mb-2">
              Password <span className="text-red-500">*</span>
            </label>

            <div className="relative">

              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Enter password"
                className="w-full rounded-xl border border-gray-300 p-3 pr-12 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-500"
              >
                {showPassword ? (
                  <FiEye size={22} />
                ) : (
                  <FiEyeOff size={22} />
                )}
              </button>

            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-base font-medium mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>

            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 9876543210"
              className="w-full rounded-xl border border-gray-300 p-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Dropdown */}
          <div>
            <label className="block text-base font-medium mb-2">
              Login As <span className="text-red-500">*</span>
            </label>

            <select name="loginas" value={formData.loginas} onChange={(e) => {
              handleChange(e);
              setRole(e.target.value);
            }}
              className="w-full rounded-xl border border-gray-300 p-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option value="">Select</option>
              <option value="admin">Admin</option>
              <option value="hr">HR</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3">

            <input
              type="checkbox"
              className="mt-1 h-4 w-4 accent-red-600"
            />

            <p className="text-sm text-gray-600">
              I agree to the{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Privacy Policy
              </span>
            </p>

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={role === ""}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-lg font-semibold transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            FREE SIGN UP
          </button>

          {/* Divider */}
          <div className="flex items-center">

            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="mx-3 text-gray-500 text-sm">
              or sign in using
            </span>

            <div className="flex-1 h-px bg-gray-300"></div>

          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4">
            {profile ? (
              <div>
                <img src={profile.picture} alt="userimage" />
                <h3>User Logged in</h3>
                <p>Name: {profile.name}</p>
                <p>Email Address: {profile.email}</p>
                <p>ProfileId: {profile.id}</p>
                <button onClick={logOut}>Log out</button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => login()}
              >
                <FaGoogle size={25} />
              </button>
            )}

            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              LinkedIn
            </button>

            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Microsoft
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}


export default Loginform;