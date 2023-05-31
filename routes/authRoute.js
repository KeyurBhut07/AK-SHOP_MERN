const express = require("express");
const {
  registerController,
  loginController,
  forgotPasswordController,
  updateProfileController,
  getOrdersControllers,
  getAllOrdersControllers,
  orderStatusController,
} = require("../controllers/authController");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

//Routing

//REGISTER || Method POST
router.post("/register", registerController);

// Login || POSt
router.post("/login", loginController);

// Forgot Password POST
router.post("/forgot-password", forgotPasswordController);

// Protected User Route Auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// Protected Admin Route Auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

// Orders
router.get("/orders", requireSignIn, getOrdersControllers);

// All Orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersControllers);

// Order status update
// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
module.exports = router;
