const productsMock = [
    {name: "product 1"},
    {name: "product 2"}
];
/**
 * This function comment is parsed by doctrine
 * @route GET api/products
 * @group Content - get all products from api
 * @returns {Array<ProductResponseData.model>} 200 - all products from mock api
 */
export default function handler(req, res) {
    res.status(200).json(productsMock);
}