const express = require('express')
const router = express.Router();
const { getProducts,createProduct,getSingleProduct,editSingleProduct,deleteProduct} = require('../controllers/product.controller');

router.get('/', getProducts);
router.get('/:id', getSingleProduct);
router.post('/', createProduct);
router.put('/:id', editSingleProduct);
router.delete('/:id', deleteProduct);


module.exports = router;