const express = require("express");
const router = express.Router();
const userController = require("../controller/User");

router.post("/login", userController.LoginUser);

router.post(
  "/postData",
  (req, res, next) => {
    console.log("Route Hit");
    next();
  },
  userController.PostUser
);

// New Route
router.get("/getUser/:email", userController.GetUser);

router.get("/myattendance/:email", userController.GetMyAttendance);

router.put("/logout", userController.LogoutUser);

router.post("/addemployee", userController.AddEmployee);

router.get("/employees", userController.GetEmployees);

router.post("/forgotpassword", userController.forgotPassword);

router.post("/verifyotp", userController.verifyOTP);

router.put("/resetpassword", userController.resetPassword);

module.exports = router;