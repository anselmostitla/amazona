"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const data_1 = require("../data");
const getProducts = (req, res) => {
    res.status(200).json(data_1.sampleProducts);
};
exports.getProducts = getProducts;
