const productsMock = [
    {name: "product 1"},
    {name: "product 2"}
];

export default function handler(req, res) {
    res.status(200).json(productsMock);
}