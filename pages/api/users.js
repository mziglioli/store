import { getAll } from "../../service/UserService"

/**
 * This function comment is parsed by doctrine
 * @route GET api/users
 * @group Content - get all users from api
 * @returns {Array<UserResponseData.model>} 200 - all users from authentication api
 */
export default async function handler(req, res) {
    const users = await getAll();
    console.log("handle-users", users);
    res.status(200).json(users);
}