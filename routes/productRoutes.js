const express = require("express");
const {
  createProductControllers,
  getProductControllers,
  getSingleProductControllers,
  productPhotoController,
  deleteProductControllers,
  updateProductControllers,
  productFilterControllers,
  productCountControllers,
  productListControllers,
  searchProduct,
  similarproductcontrollers,
  categoryWiseProduct,
  braintreeTokenController,
  braintreePaymentControllers,
} = require("../controllers/productControllers");
const router = express.Router();
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const formidable = require("express-formidable");

//routes

// Create Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductControllers
);

// get product
router.get("/get-product", getProductControllers);

//Get Single Product
router.get("/get-product/:slug", getSingleProductControllers);

// get Product Photo
router.get("/product-photo/:pid", productPhotoController);

// Delete Product
router.delete(
  "/delete-product/:pid",
  requireSignIn,
  isAdmin,
  deleteProductControllers
);

//Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductControllers
);

// Filter Product
router.post("/product-filter", productFilterControllers);

// product couont
router.get("/product-count", productCountControllers);

// Product per page
router.get("/product-list/:page", productListControllers);

//search Product
router.get("/search/:keyword", searchProduct);

//similar product
router.get("/related-product/:pid/:cid", similarproductcontrollers);

// Categories wise product
router.get("/product-category/:slug", categoryWiseProduct);

//Payment Routes
//token
router.get("/braintree/token", braintreeTokenController);

//payment
router.post("/braintree/payment", requireSignIn, braintreePaymentControllers);

module.exports = router;
