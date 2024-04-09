const express = require("express");
const router = express.Router();
const response = require("../utils/response");
const productSchema = require("../models/product");
const userSchema = require("../models/user");

router.get("/products", (req, res) => {
  productSchema
    .find({ stock: { $gt: 0 } })
    .then((data) => response.success(res, data))

    .catch((err) => response.error(res, err.message));
});

router.get("/price/:id/:brandName", (req, res) => {
  const userId = req.params.id;
  let brandName = req.params.brandName.toLowerCase(); // Convertir a minúsculas
  brandName = brandName[0].toUpperCase() + brandName.slice(1);
  userSchema
    .findOne({ _id: userId })
    .then((user) => {
      if (!user) {
        return response.error(res, "User not found");
      }

      const brandsOnSales = user.special_price;
      if (!brandsOnSales || !brandsOnSales.includes(brandName)) {
        return productSchema
          .findOne({ brand: brandName })
          .then((product) => {
            if (!product) {
              return response.error(res, "Product is not in our database");
            }
            response.success(res, "Base price: " + product.base_price);
          })
          .catch((err) => response.error(res, "Error finding product: "));
      }

      productSchema.findOne({ brand: brandName }).then((product) => {
        if (!product) {
          return response.error(res, "Product not found");
        }

        response.success(res, "Sales price: " + product.special_price);
      });
    })
    .catch((err) => response.error(res, "Error finding user: " + err.message));
});

module.exports = router;
