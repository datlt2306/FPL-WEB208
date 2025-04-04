import express from "express";
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Lấy danh sách sản phẩm
router.get("/products", getAllProducts);

// Lấy chi tiết sản phẩm theo ID
router.get("/products/:id", getProductById);

// Tạo sản phẩm mới
router.post("/products/", createProduct);

// Cập nhật sản phẩm
router.patch("/products/:id", updateProduct);

// Xóa sản phẩm
router.delete("/products/:id", deleteProduct);

export default router;
