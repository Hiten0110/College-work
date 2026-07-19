import { ArrowRight, PlayCircle, Star, Users, Calendar, DollarSign, Briefcase, BarChart2, Shield, UserPlus, Bell, ChevronLeft, ChevronRight, Clipboard, TrendingUp, Menu, MessageCircle } from "react-feather";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import dashboard from "../assets/dashboard.png";
import attendance from "../assets/attendance.png";
import payroll from "../assets/payroll.png";
import employee from "../assets/employee.png";
import reports from "../assets/reports.png";
import corehr from "../assets/corehr.png";

function Head() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            question: "What is HireKaro HRMS?",
            answer:
                "HireKaro is an all-in-one HR management platform that helps businesses manage employees, payroll, attendance, leave and recruitment from a single dashboard.",
        },
        {
            question: "Can I try HireKaro before purchasing?",
            answer:
                "Yes. You can start with a free trial and explore all the major features before choosing a plan.",
        },
        {
            question: "Is my employee data secure?",
            answer:
                "Absolutely. We use enterprise-grade security, encrypted connections and regular backups to keep your data safe.",
        },
        {
            question: "Can I upgrade my plan later?",
            answer:
                "Yes. You can upgrade or downgrade your subscription anytime based on your business requirements.",
        },
        {
            question: "Does HireKaro support payroll management?",
            answer:
                "Yes. HireKaro provides payroll processing, salary generation, tax calculations and downloadable payslips.",
        },
    ];

    const modules = [
        {
            title: "Core HR",
            image: corehr,
        },
        {
            title: "Payroll",
            image: payroll,
        },
        {
            title: "Attendance",
            image: attendance,
        },
        {
            title: "Employee",
            image: employee,
        },
        {
            title: "Reports",
            image: reports,
        },
    ];

    const reviews = [
        {
            name: "Anita P.",
            role: "HR Manager",
            review:
                "HireKaro has simplified attendance and payroll. Everything is in one place.",
        },
        {
            name: "Ravi Kumar",
            role: "Founder",
            review:
                "Our hiring process became much faster after switching to HireKaro.",
        },
        {
            name: "Meera Sharma",
            role: "HR Executive",
            review:
                "Very user friendly and our employees love the self-service portal.",
        },
        {
            name: "Daniel K.",
            role: "People Operations",
            review:
                "Attendance, payroll and employee management work perfectly together.",
        },
        {
            name: "Priya Singh",
            role: "CEO",
            review:
                "The dashboard gives us all the insights we need every day.",
        },
        {
            name: "Aman Gupta",
            role: "HR Director",
            review:
                "Excellent support team and a beautiful interface.",
        },
    ];
    const [reviewIndex, setReviewIndex] = useState(0);
    useEffect(() => {

        const interval = setInterval(() => {

            setReviewIndex((prev) =>
                prev >= reviews.length - 4 ? 0 : prev + 1
            );

        }, 4000);

        return () => clearInterval(interval);

    }, []);

    const [activeModule, setActiveModule] = useState(0);
    useEffect(() => {

        const interval = setInterval(() => {

            setActiveModule((prev) =>
                prev === modules.length - 1 ? 0 : prev + 1
            );

        }, 3000);

        return () => clearInterval(interval);

    }, []);



    const [currentSlide, setCurrentSlide] = useState(0);
    const productivityCards = [
        {
            icon: <UserPlus size={36} />,
            title: "Quick Onboarding",
            desc: "Add employees in just a few clicks.",
        },
        {
            icon: <BarChart2 size={36} />,
            title: "People Insights",
            desc: "View reports and employee analytics.",
        },
        {
            icon: <Users size={36} />,
            title: "Organization",
            desc: "Manage departments and reporting hierarchy.",
        },
        {
            icon: <Bell size={36} />,
            title: "Team Updates",
            desc: "Share announcements instantly.",
        },
        {
            icon: <DollarSign size={36} />,
            title: "Payroll",
            desc: "Generate salaries and payslips easily.",
        },
        {
            icon: <Calendar size={36} />,
            title: "Attendance",
            desc: "Track attendance automatically.",
        },
        {
            icon: <Clipboard size={36} />,
            title: "Leave Management",
            desc: "Approve and manage leave requests.",
        },
        {
            icon: <TrendingUp size={36} />,
            title: "Performance",
            desc: "Track employee goals and performance.",
        },
    ];
    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));

        }, 4000);

        return () => clearInterval(interval);

    }, []);

    const nextSlide = () => {

        setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));

    };

    const prevSlide = () => {

        setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1));

    };


    return (
        <>
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">

                <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

                    {/* Logo */}

                    <Link
                        to="/"
                        className="text-4xl font-bold tracking-wide"
                    >
                        <span className="text-blue-600">Hire</span>
                        <span className="text-gray-900">Karo</span>
                    </Link>

                    {/* Navigation */}

                    <nav className="hidden lg:flex items-center gap-10 font-medium text-gray-700">
                        {/* 
          <a href="#home" className="hover:text-blue-600 transition">
            Home
          </a> */}

                        <a href="#features" className="hover:text-blue-600 transition">
                            Features
                        </a>

                        {/* <a href="#modules" className="hover:text-blue-600 transition">
            Modules
          </a> */}

                        <a href="#pricing" className="hover:text-blue-600 transition">
                            Pricing
                        </a>

                        <a href="#reviews" className="hover:text-blue-600 transition">
                            Reviews
                        </a>

                        <a href="#faq" className="hover:text-blue-600 transition">
                            FAQ
                        </a>

                        {/* <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a> */}

                    </nav>

                    {/* Right Side */}

                    <div className="hidden lg:flex items-center gap-5">

                        <Link
                            to="/signin"
                            className="text-gray-700 hover:text-blue-600 transition font-medium"
                        >
                            Sign In
                        </Link>

                        <Link to="/get-started">

                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition font-semibold shadow-lg hover:scale-105">

                                Get Started

                            </button>

                        </Link>

                    </div>

                    {/* Mobile Menu */}

                    <button className="lg:hidden">

                        <Menu size={30} />

                    </button>

                </div>

            </header>


            <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-[#111827] via-[#1E3A8A] to-[#2563EB]">

                <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Section */}

                    <div data-aos="fade-right">

                        {/* Rating */}

                        <div className="flex items-center gap-3 bg-white w-fit px-5 py-2 rounded-full shadow-lg">

                            <Star
                                fill="#FFD700"
                                color="#FFD700"
                                size={18}
                            />

                            <p className="font-semibold text-gray-700">

                                Rated 4.9/5 by 2500+ Businesses

                            </p>

                        </div>

                        {/* Heading */}

                        <h1 className="text-6xl font-extrabold text-white mt-8 leading-tight">

                            Simplify Your

                            <br />

                            HR Operations

                            <span className="text-yellow-300">

                                {" "}with HireKaro

                            </span>

                        </h1>

                        {/* Description */}

                        <p className="text-gray-200 text-xl mt-8 leading-9">

                            HireKaro is an all-in-one HR Management System
                            that helps businesses manage recruitment,
                            attendance, payroll, employee records and
                            performance from one smart dashboard.

                        </p>

                        {/* Buttons */}

                        <div className="flex gap-5 mt-10">

                            <Link to="/get-started">

                                <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full flex items-center gap-3 font-bold transition">

                                    Get Started

                                    <ArrowRight size={20} />

                                </button>

                            </Link>

                            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full flex items-center gap-3 font-semibold transition">

                                <PlayCircle size={20} />

                                Watch Demo

                            </button>

                        </div>

                    </div>

                    {/* Right Section */}

                    <div
                        data-aos="fade-left"
                        className="bg-white rounded-3xl shadow-2xl p-8"
                    >

                        <h2 className="text-3xl font-bold text-center">

                            Request a Demo

                        </h2>

                        <p className="text-center text-gray-500 mt-2">

                            Start your free trial today

                        </p>

                        <form className="space-y-5 mt-8">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="email"
                                placeholder="Business Email"
                                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Login As */}

                            <div>

                                {/* <label className="block text-base font-semibold mb-2">
                                Login As <span className="text-red-500">*</span>
                            </label> */}

                                <select
                                    className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                                >

                                    <option value="">Select Role</option>

                                    <option value="admin">Admin</option>

                                    <option value="hr">HR</option>

                                    <option value="employee">Employee</option>

                                </select>

                            </div>

                            <input
                                type="text"
                                placeholder="Company Name"
                                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <select className="w-full border border-gray-300 rounded-xl p-4">

                                <option>Select Company Size</option>

                                <option>1 - 10 Employees</option>

                                <option>11 - 50 Employees</option>

                                <option>51 - 200 Employees</option>

                                <option>201 - 500 Employees</option>

                                <option>500+</option>

                            </select>

                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition">

                                Request Demo

                            </button>

                        </form>

                    </div>

                </div>

            </section>

            {/* ===================== FEATURES SECTION ===================== */}

            <section id="features" className="py-16 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Heading */}

                    <div className="text-center" data-aos="fade-up">

                        <h4 className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
                            Why HireKaro?
                        </h4>

                        <h2 className="text-4xl font-bold mt-3 text-gray-900 leading-tight">
                            Everything You Need
                            <br />
                            To Manage Your Workforce
                        </h2>

                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
                            HireKaro combines recruitment, attendance, payroll,
                            employee management and analytics into one intelligent HR platform.
                        </p>

                    </div>

                    {/* Features */}

                    <div className="grid lg:grid-cols-3 gap-6 items-center mt-16">

                        {/* LEFT SIDE */}

                        <div className="space-y-5">

                            {/* Employee */}

                            <div
                                data-aos="fade-right"
                                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300"
                            >

                                <Users
                                    size={32}
                                    className="text-blue-600 mb-3"
                                />

                                <h3 className="text-xl font-bold">
                                    Employee Management
                                </h3>

                                <p className="text-sm text-gray-500 mt-2 leading-6">
                                    Manage employee profiles, departments and records
                                    with one secure dashboard.
                                </p>

                            </div>

                            {/* Attendance */}

                            <div
                                data-aos="fade-right"
                                data-aos-delay="150"
                                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300"
                            >

                                <Calendar
                                    size={32}
                                    className="text-green-600 mb-3"
                                />

                                <h3 className="text-xl font-bold">
                                    Attendance
                                </h3>

                                <p className="text-sm text-gray-500 mt-2 leading-6">
                                    Track attendance, shifts and leave automatically.
                                </p>

                            </div>

                            {/* Payroll */}

                            <div
                                data-aos="fade-right"
                                data-aos-delay="300"
                                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300"
                            >

                                <DollarSign
                                    size={32}
                                    className="text-red-500 mb-3"
                                />

                                <h3 className="text-xl font-bold">
                                    Payroll
                                </h3>

                                <p className="text-sm text-gray-500 mt-2 leading-6">
                                    Generate salaries, payslips and tax reports effortlessly.
                                </p>

                            </div>

                        </div>

                        {/* CENTER IMAGE */}

                        <div
                            data-aos="zoom-in"
                            className="flex justify-center"
                        >

                            <div className="relative">

                                <div className="absolute -z-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl left-1/2 -translate-x-1/2 top-10"></div>

                                <img src={dashboard} alt="Dashboard" className="w-[300px] lg:w-[340px] mx-auto hover:scale-105 transition duration-500" />

                            </div>

                        </div>

                        {/* RIGHT SIDE */}

                        <div className="space-y-5">

                            {/* Recruitment */}

                            <div
                                data-aos="fade-left"
                                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300"
                            >

                                <Briefcase
                                    size={32}
                                    className="text-orange-500 mb-3"
                                />

                                <h3 className="text-xl font-bold">
                                    Recruitment
                                </h3>

                                <p className="text-sm text-gray-500 mt-2 leading-6">
                                    Post jobs, shortlist candidates and hire faster.
                                </p>

                            </div>

                            {/* Performance */}

                            <div
                                data-aos="fade-left"
                                data-aos-delay="150"
                                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300"
                            >

                                <BarChart2
                                    size={32}
                                    className="text-purple-600 mb-3"
                                />

                                <h3 className="text-xl font-bold">
                                    Performance
                                </h3>

                                <p className="text-sm text-gray-500 mt-2 leading-6">
                                    Analyze productivity using smart reports and KPIs.
                                </p>

                            </div>

                            {/* Security */}

                            <div
                                data-aos="fade-left"
                                data-aos-delay="300"
                                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300"
                            >

                                <Shield
                                    size={32}
                                    className="text-cyan-600 mb-3"
                                />

                                <h3 className="text-xl font-bold">
                                    Secure Data
                                </h3>

                                <p className="text-sm text-gray-500 mt-2 leading-6">
                                    Enterprise-grade encryption keeps every employee safe.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="py-10 bg-gradient-to-r from-blue-900 to-blue-700">

                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}

                    <div className="text-center text-white" data-aos="fade-up">

                        <h2 className="text-3xl lg:text-4xl font-bold">

                            Built for Daily HR Tasks

                        </h2>

                        <p className="mt-3 text-blue-100 text-base">

                            Businesses don't need extra tools — just smarter ones.
                            HireKaro handles everyday HR tasks quickly and efficiently.

                        </p>

                    </div>

                    {/* ================= TABS ================= */}

                    <div
                        className="flex flex-wrap justify-center gap-3 mt-8"
                        data-aos="fade-up"
                    >

                        {modules.map((module, index) => (

                            <button
                                key={index}
                                onClick={() => setActiveModule(index)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-500

                    ${activeModule === index
                                        ? "bg-white text-blue-700 shadow-lg scale-105"
                                        : "bg-blue-700/30 text-white border border-white/20 hover:bg-blue-600"
                                    }`}
                            >

                                {module.title}

                            </button>

                        ))}

                    </div>

                    {/* ================= IMAGE ================= */}

                    <div
                        className="mt-8 flex justify-center"
                        data-aos="zoom-in"
                    >

                        <img
                            key={activeModule}
                            src={modules[activeModule].image}
                            alt={modules[activeModule].title}
                            className="w-[650px] lg:w-[720px] max-w-full rounded-2xl shadow-2xl transition-all duration-700 hover:scale-[1.02]"
                        />

                    </div>

                    {/* ================= TITLE ================= */}

                    <div
                        className="text-center mt-6 text-white"
                        data-aos="fade-up"
                    >

                        <h3 className="text-2xl font-bold">

                            {modules[activeModule].title}

                        </h3>

                        <p className="mt-2 text-blue-100 text-base max-w-2xl mx-auto">

                            {modules[activeModule].description}

                        </p>

                    </div>

                </div>

            </section>


            <section className="py-20 bg-gray-50">

                <div className="max-w-7xl mx-auto px-8">

                    {/* Heading */}

                    <div className="text-center" data-aos="fade-up">

                        <h2 className="text-4xl font-bold text-gray-800">

                            Less Admin Work. More Productivity.

                        </h2>

                        <p className="text-gray-500 mt-4 max-w-3xl mx-auto">

                            HireKaro helps HR teams automate repetitive tasks and focus
                            on people, not paperwork.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-14">

                        {productivityCards
                            .slice(currentSlide * 4, currentSlide * 4 + 4)
                            .map((card, index) => (

                                <div
                                    key={index}
                                    className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300"
                                    data-aos="zoom-in"
                                >

                                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto text-blue-700">

                                        {card.icon}

                                    </div>

                                    <h3 className="text-xl font-bold mt-6">

                                        {card.title}

                                    </h3>

                                    <p className="text-gray-500 mt-4 leading-7">

                                        {card.desc}

                                    </p>

                                </div>

                            ))}

                    </div>

                    {/* Buttons */}

                    <div className="flex justify-center gap-4 mt-10">

                        <button onClick={prevSlide} className="w-12 h-12 mr-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white transition">
                            <ChevronLeft className="ml-2" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white transition"
                        >
                            <ChevronRight className="ml-3" />
                        </button>

                    </div>
                </div>

            </section>


            {/* ================= PRICING SECTION ================= */}

            <section
                id="pricing"
                className="py-20 bg-[#f8f9fc] relative overflow-hidden"
            >

                <div className="max-w-7xl mx-auto px-8">

                    {/* Heading */}

                    <div className="text-center mb-16" data-aos="fade-up">

                        <h2 className="text-4xl font-bold text-[#1F2A44]">

                            Pricing for Every Kind of Team

                        </h2>

                        <p className="text-gray-500 mt-4 text-lg">

                            Pick a plan that works now and scales when you need more—clear pricing with no hidden fees.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

                        {/* Basic */}

                        <div
                            className="bg-white border rounded-xl p-8 text-center hover:shadow-xl transition duration-300"
                            data-aos="fade-up"
                        >

                            <h3 className="text-3xl font-bold text-[#27314F]">

                                Basic

                            </h3>

                            <div className="w-40 h-40 bg-gray-100 rounded-full flex flex-col justify-center items-center mx-auto mt-8">

                                <h1 className="text-5xl font-bold text-blue-700">

                                    ₹599

                                </h1>

                                <p className="font-semibold text-gray-700 mt-2">

                                    Per User / Month

                                </p>

                            </div>

                            <p className="mt-8 text-xl text-gray-700">

                                (Upto 30 Users)

                            </p>
                            <Link to='/loginpage'>
                            <button className="mt-10 w-full py-4 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">

                                Get Started Free

                            </button>
                            </Link>
                        </div>

                        {/* Professional */}

                        <div
                            className="bg-white border rounded-xl p-8 text-center hover:shadow-xl transition duration-300"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >

                            <h3 className="text-3xl font-bold text-[#27314F]">

                                Professional

                            </h3>

                            <div className="w-40 h-40 bg-gray-100 rounded-full flex flex-col justify-center items-center mx-auto mt-8">

                                <h1 className="text-5xl font-bold text-blue-700">

                                    ₹999

                                </h1>

                                <p className="font-semibold text-gray-700 mt-2">

                                    Per User / Month

                                </p>

                            </div>

                            <p className="mt-8 text-xl text-gray-700">

                                (Upto 50 Users)

                            </p>

                            <p className="text-gray-600 mt-2">

                                ₹40 per additional employee

                            </p>
                            <Link to='/loginpage'>
                            <button className="mt-8 w-full py-4 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">

                                Get Started

                            </button>
                            </Link>
                        </div>

                        {/* Executive */}

                        <div
                            className="bg-white border rounded-xl p-8 text-center hover:shadow-xl transition duration-300"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >

                            <h3 className="text-3xl font-bold text-[#27314F]">

                                Executive

                            </h3>

                            <div className="w-40 h-40 bg-gray-100 rounded-full flex flex-col justify-center items-center mx-auto mt-8">

                                <h1 className="text-5xl font-bold text-blue-700">

                                    ₹1599

                                </h1>

                                <p className="font-semibold text-gray-700 mt-2">

                                    Per User / Month

                                </p>

                            </div>

                            <p className="mt-8 text-xl text-gray-700">

                                (Upto 50 Users)

                            </p>

                            <p className="text-gray-600 mt-2">

                                ₹70 per additional employee

                            </p>
                            <Link to='/loginpage'>
                            <button className="mt-8 w-full py-4 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">

                                Get Started

                            </button>
                            </Link>

                        </div>

                        {/* Enterprise */}

                        <div
                            className="bg-white border rounded-xl p-8 text-center hover:shadow-xl transition duration-300"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >

                            <h3 className="text-3xl font-bold text-[#27314F]">

                                Enterprise

                            </h3>

                            <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mx-auto mt-8">

                                <h1 className="text-4xl font-bold text-blue-700">

                                    Custom

                                </h1>

                            </div>

                            <p className="mt-8 text-lg text-gray-700 leading-8">

                                For custom requirements,
                                please talk to our experts.

                            </p>
                            
                            <Link to='/loginpage'>
                            <button className="mt-10 w-full py-4 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">

                                Get Started

                            </button>
                            </Link>
                        </div>

                    </div>

                </div>

            </section>

            {/* ====================== REVIEWS ====================== */}

            <section
                id="reviews"
                className="py-20 bg-gradient-to-r from-[#0f4ec9] to-[#1565e7] overflow-hidden"
            >

                <div className="max-w-7xl mx-auto px-8">

                    {/* Heading */}

                    <div
                        className="text-center text-white"
                        data-aos="fade-up"
                    >

                        <h2 className="text-4xl font-bold">

                            What Our Customers Say

                        </h2>

                        <p className="mt-4 text-blue-100 text-lg">

                            Thousands of businesses trust HireKaro to simplify HR
                            operations every day.

                        </p>

                    </div>

                    {/* Review Cards */}

                    <div
                        className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16"
                    >

                        {reviews
                            .slice(reviewIndex, reviewIndex + 4)
                            .map((review, index) => (

                                <div
                                    key={index}
                                    data-aos="zoom-in"
                                    className="bg-white rounded-3xl shadow-xl p-7 relative hover:-translate-y-2 transition duration-300"
                                >

                                    {/* Quote */}

                                    <div className="absolute top-5 right-5 text-gray-200 text-6xl">

                                        “

                                    </div>

                                    {/* Avatar */}

                                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center justify-center text-xl font-bold">

                                        {review.name.charAt(0)}

                                    </div>

                                    {/* Name */}

                                    <h3 className="mt-5 text-xl font-bold">

                                        {review.name}

                                    </h3>

                                    <p className="text-gray-500 text-sm">

                                        {review.role}

                                    </p>

                                    {/* Stars */}

                                    <div className="flex mt-4">

                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                fill="#F59E0B"
                                                color="#F59E0B"
                                                size={17}
                                            />
                                        ))}

                                    </div>

                                    {/* Review */}

                                    <p className="text-gray-600 mt-5 leading-7">

                                        {review.review}

                                    </p>

                                </div>

                            ))}

                    </div>

                    {/* Buttons */}

                    <div className="flex justify-center gap-5 mt-12">

                        <button

                            onClick={() =>
                                setReviewIndex(
                                    reviewIndex === 0
                                        ? reviews.length - 4
                                        : reviewIndex - 1
                                )
                            }

                            className="w-12 h-12 rounded-full bg-white text-blue-700 shadow-lg hover:scale-110 transition"

                        >

                            <ChevronLeft className="mx-auto" />

                        </button>

                        <button

                            onClick={() =>
                                setReviewIndex(
                                    reviewIndex >= reviews.length - 4
                                        ? 0
                                        : reviewIndex + 1
                                )
                            }

                            className="w-12 h-12 rounded-full bg-white text-blue-700 shadow-lg hover:scale-110 transition"

                        >

                            <ChevronRight className="mx-auto" />

                        </button>

                    </div>

                </div>

            </section>


            {/* ================= FAQ SECTION ================= */}

            <section
                id="faq"
                className="py-20 bg-white"
            >

                <div className="max-w-5xl mx-auto px-8">

                    <div
                        className="text-center"
                        data-aos="fade-up"
                    >

                        <p className="text-blue-600 font-semibold uppercase">

                            FAQ

                        </p>

                        <h2 className="text-4xl font-bold text-gray-800 mt-3">

                            Frequently Asked Questions

                        </h2>

                        <p className="text-gray-500 mt-4">

                            Everything you need to know about HireKaro.

                        </p>

                    </div>

                    <div className="mt-14 space-y-5">

                        {faqs.map((faq, index) => (

                            <div
                                key={index}
                                className="border rounded-2xl shadow-sm overflow-hidden"
                                data-aos="fade-up"
                            >

                                <button
                                    onClick={() =>
                                        setOpenFAQ(openFAQ === index ? null : index)
                                    }
                                    className="w-full flex justify-between items-center px-6 py-5 bg-white hover:bg-gray-50 transition"
                                >

                                    <span className="text-lg font-semibold text-gray-800">

                                        {faq.question}

                                    </span>

                                    <span className="text-3xl text-blue-600">

                                        {openFAQ === index ? "−" : "+"}

                                    </span>

                                </button>

                                {openFAQ === index && (

                                    <div className="px-6 pb-6 text-gray-600 leading-8">

                                        {faq.answer}

                                    </div>

                                )}

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= FINAL CTA ================= */}

            <section className="py-20 bg-white">

                <div
                    className="max-w-7xl mx-auto rounded-[40px] overflow-hidden relative
        bg-gradient-to-r from-[#0B24FB] via-[#1238FF] to-[#0718D8]
        px-10 py-20 text-center"
                    data-aos="zoom-in"
                >

                    {/* Left Shape */}

                    <div className="absolute left-10 top-14 opacity-10">

                        <svg
                            width="140"
                            height="140"
                            viewBox="0 0 100 100"
                            fill="none"
                        >
                            <polygon
                                points="50,5 90,27 90,73 50,95 10,73 10,27"
                                stroke="white"
                                strokeWidth="2"
                            />
                            <polygon
                                points="50,5 50,95"
                                stroke="white"
                                strokeWidth="2"
                            />
                            <polygon
                                points="10,27 90,27"
                                stroke="white"
                                strokeWidth="2"
                            />
                            <polygon
                                points="10,73 90,73"
                                stroke="white"
                                strokeWidth="2"
                            />
                        </svg>

                    </div>

                    {/* Right Waves */}

                    <div className="absolute right-12 top-12 opacity-30">

                        <svg
                            width="110"
                            height="40"
                            viewBox="0 0 110 40"
                        >

                            <path
                                d="M0 10 C10 0 20 20 30 10 S50 0 60 10 S80 20 90 10 S100 0 110 10"
                                stroke="white"
                                strokeWidth="4"
                                fill="none"
                            />

                            <path
                                d="M0 22 C10 12 20 32 30 22 S50 12 60 22 S80 32 90 22 S100 12 110 22"
                                stroke="white"
                                strokeWidth="4"
                                fill="none"
                            />

                        </svg>

                    </div>

                    {/* Dot Pattern */}

                    <div className="absolute inset-0 flex justify-center items-center opacity-10">

                        <div className="w-80 h-80 rounded-full bg-[radial-gradient(circle,white_2px,transparent_2px)] [background-size:16px_16px]"></div>

                    </div>

                    {/* Content */}

                    <div className="relative z-10">

                        <h2 className="text-5xl font-bold text-white">

                            Need Help Setting It Up?

                        </h2>

                        <p className="text-blue-100 text-xl mt-6 max-w-4xl mx-auto leading-9">

                            Skip the back-and-forth. Share your details,
                            and our setup team will take care of everything—
                            quick, simple, and stress-free.

                        </p>

                            <Link to='/thankyou'>

                            <button className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-4 rounded-xl text-xl font-semibold transition duration-300 hover:scale-105 shadow-xl">
                                Request A Demo

                            </button>

                            </Link>

                    </div>

                </div>

            </section>


        </>
    );

}

export default Head;