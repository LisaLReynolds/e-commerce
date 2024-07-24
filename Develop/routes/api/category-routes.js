const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
//http://localhost:3001/api/categories/
router.get("/", async (req, res) => {
  // find all categories
  try {
    const categories = await Category.findAll({ include: [Product] }); // be sure to include its associated Products
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//http://localhost:3001/api/categories/:id
router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [Product],
    }); // be sure to include its associated Products
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//http://localhost:3001/api/categories/
router.post("/", async (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//http://localhost:3001/api/categories/:id
router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//http://localhost:3001/api/categories/:id
router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.destroy({ where: { id: req.params.id } });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
