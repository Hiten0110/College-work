import React from "react";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

function Price() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-gray-900">
            Choose Your Perfect Plan
          </h1>

          <p className="text-lg text-gray-600 mt-5 max-w-3xl mx-auto">
            Start with a free trial and upgrade whenever your business grows.
            Simple, transparent pricing with no hidden charges.
          </p>

        </div>

        {/* Pricing Cards */}

        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-8">

          {/* ================= FREE TRIAL ================= */}

          <div className="relative bg-white rounded-3xl shadow-lg border border-green-500 hover:-translate-y-2 hover:shadow-2xl transition duration-300 p-8 flex flex-col">

            <span className="absolute top-0 right-6 -translate-y-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              FREE
            </span>

            <h2 className="text-3xl font-bold text-center text-gray-900">
              Free Trial
            </h2>

            <div className="flex justify-center mt-8">

              <div className="w-44 h-44 rounded-full bg-green-50 flex flex-col justify-center items-center">

                <h3 className="text-5xl font-bold text-green-600">
                  ₹0
                </h3>

                <p className="text-gray-600 mt-2 text-sm text-center">
                  30 Days Trial
                </p>

              </div>

            </div>

            <div className="mt-8 text-center">

              <h4 className="text-xl font-semibold">
                Up to 10 Users
              </h4>

              <p className="text-gray-500 mt-2">
                Best for trying HireKaro
              </p>

            </div>

            <div className="mt-8 flex-1">

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Employee Management</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Attendance Tracking</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Leave Management</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Dashboard Access</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Email Support</span>
              </div>

            </div>

            <Link to="/hr">

              <button className="w-full mt-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-lg transition">

                Start Free Trial

              </button>

            </Link>

          </div>

          {/* ================= BASIC ================= */}

          <div className="relative bg-white rounded-3xl shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl transition duration-300 p-8 flex flex-col">

            <h2 className="text-3xl font-bold text-center text-gray-900">

              Basic

            </h2>

            <div className="flex justify-center mt-8">

              <div className="w-44 h-44 rounded-full bg-gray-100 flex flex-col justify-center items-center">

                <h3 className="text-5xl font-bold text-gray-900">

                  ₹599

                </h3>

                <p className="text-gray-600 mt-2 text-sm text-center">

                  Per User / Month

                </p>

              </div>

            </div>

            <div className="mt-8 text-center">

              <h4 className="text-xl font-semibold">

                Up to 30 Users

              </h4>

              <p className="text-gray-500 mt-2">

                Perfect for startups

              </p>

            </div>

            <div className="mt-8 flex-1">

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Everything in Free Trial</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Payroll Management</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>HR Dashboard</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Employee Reports</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Email Support</span>
              </div>

            </div>

            <Link to="/payment">

              <button className="w-full mt-8 py-4 rounded-xl bg-gray-900 hover:bg-black text-white font-semibold text-lg transition">

                Get Started

              </button>

            </Link>

          </div>

                    {/* ================= PROFESSIONAL ================= */}

          <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-blue-600 hover:-translate-y-2 hover:shadow-2xl transition duration-300 p-8 flex flex-col">

            <span className="absolute top-0 right-6 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              ⭐ Most Popular
            </span>

            <h2 className="text-3xl font-bold text-center text-gray-900">

              Professional

            </h2>

            <div className="flex justify-center mt-8">

              <div className="w-44 h-44 rounded-full bg-blue-50 flex flex-col justify-center items-center">

                <h3 className="text-5xl font-bold text-blue-700">

                  ₹999

                </h3>

                <p className="text-gray-600 mt-2 text-sm text-center">

                  Per User / Month

                </p>

              </div>

            </div>

            <div className="mt-8 text-center">

              <h4 className="text-xl font-semibold">

                Up to 50 Users

              </h4>

              <p className="text-gray-500 mt-2">

                ₹40 per additional employee

              </p>

            </div>

            <div className="mt-8 flex-1">

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Everything in Basic</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Recruitment Module</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Performance Tracking</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Document Management</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Priority Support</span>
              </div>

            </div>

            <Link to="/payment1">

              <button className="w-full mt-8 py-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg transition">

                Get Started

              </button>

            </Link>

          </div>

          {/* ================= EXECUTIVE ================= */}

          <div className="relative bg-white rounded-3xl shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl transition duration-300 p-8 flex flex-col">

            <h2 className="text-3xl font-bold text-center text-gray-900">

              Executive

            </h2>

            <div className="flex justify-center mt-8">

              <div className="w-44 h-44 rounded-full bg-gray-100 flex flex-col justify-center items-center">

                <h3 className="text-5xl font-bold text-gray-900">

                  ₹1599

                </h3>

                <p className="text-gray-600 mt-2 text-sm text-center">

                  Per User / Month

                </p>

              </div>

            </div>

            <div className="mt-8 text-center">

              <h4 className="text-xl font-semibold">

                Unlimited Users

              </h4>

              <p className="text-gray-500 mt-2">

                ₹70 per additional employee

              </p>

            </div>

            <div className="mt-8 flex-1">

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Everything in Professional</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>AI Resume Screening</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Advanced Analytics</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Custom Reports</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <FiCheck className="text-green-500" />
                <span>Dedicated Account Manager</span>
              </div>

            </div>

            <Link to="/payment2">

              <button className="w-full mt-8 py-4 rounded-xl bg-gray-900 hover:bg-black text-white font-semibold text-lg transition">

                    Get Started

              </button>

            </Link>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="mt-16 text-center">

          <h3 className="text-3xl font-bold text-gray-900">

            Need a Custom Enterprise Solution?

          </h3>

          <p className="text-gray-500 mt-4 text-lg">

            Contact our sales team for a customized HR solution tailored to your business.

          </p>

          <Link to="/contact">

            <button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition">

              Contact Sales

            </button>

          </Link>

        </div>

      </div>

    </section>
  );
}

export default Price;