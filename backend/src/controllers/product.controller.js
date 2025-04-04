import Product from "../models/product.model";

// Tạo sản phẩm mới
export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).json(product);
    } catch (error) {
        return res.status(400).json({
            message: "Lỗi khi tạo sản phẩm",
            error: error.message,
        });
    }
};

// Lấy danh sách tất cả sản phẩm
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi khi lấy danh sách sản phẩm",
            error: error.message,
        });
    }
};

// Lấy sản phẩm theo ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm",
            });
        }
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi khi lấy sản phẩm",
            error: error.message,
        });
    }
};

// Cập nhật sản phẩm
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!product) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm",
            });
        }
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({
            message: "Lỗi khi cập nhật sản phẩm",
            error: error.message,
        });
    }
};

// Xóa sản phẩm
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm",
            });
        }
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi khi xóa sản phẩm",
            error: error.message,
        });
    }
};
