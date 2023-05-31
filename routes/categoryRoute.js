const express = require("express");
const {
  createCategoryController,
  updateCategoryControllers,
  categoryController,
  singleCaetgoryController,
  deletCategoryControllers,
} = require("../controllers/categoryController");

const router = express.Router();
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");

// routes

// Create Category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// Update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryControllers
);

// get All Category
router.get("/get-category", categoryController);

//get single category
router.get("/single-category/:slug", singleCaetgoryController);

// delete Category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deletCategoryControllers
);

module.exports = router;
