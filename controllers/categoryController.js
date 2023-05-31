const categoryModel = require("../model/categoryModel");
const slugify = require("slugify");

const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({
        message: "Name Is Required",
      });
    }
    // exists
    const exisitingCategory = await categoryModel.findOne({ name });
    if (exisitingCategory) {
      return res.status(200).send({
        ststus: true,
        message: "Category Alreay Exisits..!",
      });
    }
    const category = await categoryModel({ name, slug: slugify(name) }).save();
    res.status(201).send({
      success: true,
      message: "Category Created    ...!",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error creating category",
    });
  }
};

// Update category

const updateCategoryControllers = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category Updated..!",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error updating category",
    });
  }
};

// all category
const categoryController = async (req, res) => {
  try {
    const category = await categoryModel.find();
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category Not Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Category Found",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Get Category",
    });
  }
};

// single category controllers
const singleCaetgoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "category Not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Category Found",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting single category",
    });
  }
};

// delete Category controller
const deletCategoryControllers = async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Category Deleted",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting category",
    });
  }
};

module.exports = {
  createCategoryController,
  updateCategoryControllers,
  categoryController,
  singleCaetgoryController,
  deletCategoryControllers,
};
