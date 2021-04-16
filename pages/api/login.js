import { authenticate, HEADER_TOKEN_NAME } from "../../service/UserService"
import Cookies from 'cookies';

/**
 * This function comment is parsed by doctrine
 * @route GET api/login
 * @group Content - authenticate the user
 * @returns {UserResponseData.model} 200 - An user attached to the cookie
 */
export default async function handler(req, res) {
    console.log("handle-authenticate", req.body);
    const user = await authenticate(res, req.body);
    console.log("handle-authenticate", user);
    const cookies = new Cookies(req, res);
    if (user && user.token !== "") {
        res.setHeader(HEADER_TOKEN_NAME, user.token);
        // Set a cookie
        cookies.set(HEADER_TOKEN_NAME, user.token);
        res.status(200).json(user);
    } else {
        res.status(400).json({
            error: "User not found"
        });
    }
}