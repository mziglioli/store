import { getAll } from "../../service/UserService"

export default async function handler(req, res) {
    const users = await getAll();
    console.log("handle-users", users);
    res.status(200).json(users);
}