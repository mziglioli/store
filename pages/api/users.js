const usersMock = [
    {name: "test"},
    {name: "new"}
];

export default function handler(req, res) {
    res.status(200).json(usersMock);
}