import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Loader from "../components/Loader";

function Signin() {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

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

  const loginUser = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:3001/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {

        setError(result.message);

        return;

      }

      setError("");

      alert("Login Successful");

      // Save logged-in user details
      localStorage.setItem("email", result.user.email);
      localStorage.setItem("username", result.user.name);
      localStorage.setItem("phone", result.user.phone);
      localStorage.setItem("loginas", result.user.loginas);

      if (result.user.loginas === "admin") {

        navigate("/admin");

      } else if (result.user.loginas === "hr") {

        navigate("/hr");

      } else {

        navigate("/employee");

      }

    } catch (err) {

      console.log(err);

    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 ">

        {/* Logo */}
        <h1 className="text-4xl font-bold text-center mb-2">
          <span className="text-blue-600">Hire</span>
          <span className="text-black">Karo</span>
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Sign in to continue
        </p>

        <form onSubmit={loginUser} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-base font-medium mb-2">
              Email Address
            </label>

            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-base font-medium mb-2">
              Password
            </label>

            <div className="relative">
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-xl p-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center">

            <label className="flex items-center gap-2 text-sm">

              <input type="checkbox" />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline text-sm"
            >
              Forgot Password?
            </Link>

          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition"
          >
            Sign In
          </button>

        </form>

        {/* Sign Up Link */}
        <p className="text-center mt-6 text-sm">

          Don't have an account?

          <Link
            to="/loginpage"
            className="text-blue-600 font-semibold ml-2 hover:underline"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signin;