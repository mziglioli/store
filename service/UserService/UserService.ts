import { UserApiURL, UserApiAuth } from "../../config/default";
import { UserResponse, UserForm } from "../../type";
import { makeGetRequest, makePostRequest } from "../../utils";

export const usersMock = [
	{name: "test"},
	{name: "new"}
];
export const HEADER_TOKEN_NAME = "x-store-auth-token";

const HEADERS = {
	"Authorization": UserApiAuth,
	"Content-Type": "application/json"
};

/**
 * Get all users
 * @returns Promise<Array<UserResponse>>
 */
export const getAll = async (): Promise<Array<UserResponse>> => {
	try {
		console.log("getAll", UserApiURL);
		const response = await makeGetRequest({url: `${UserApiURL}/user/all`, headers: HEADERS});
		return response.data;
	} catch (e) {
		console.error("getAll-Error", e);
	}
};
/**
 * authenticate user in the user api
 * @param res response to add the token in the header
 * @param form
 * @returns Promise<UserResponse>
 */
export const authenticate = async (res, form: UserForm): Promise<UserResponse> => {
	try {
		console.log("authenticate", UserApiURL);
		const response = await makePostRequest({url: `${UserApiURL}/user/authenticate`, form, headers: HEADERS});
		res.setHeader(HEADER_TOKEN_NAME, response?.token);
		console.log("authenticate-success", response);
		return response;
	} catch (e) {
		console.error("authenticate-Error", e);
	}
};
/**
 * check the user is valid and authenticated using JWT token
 * @param token
 * @returns Promise<UserResponse>
 */
export const check = async (token: string): Promise<UserResponse> => {
	try {
		console.log("check", UserApiURL);
		const response = await makeGetRequest({url: `${UserApiURL}/user/check/${token}`, headers: HEADERS} );
		console.log("check-success", response);
		return response;
	} catch (e) {
		console.error("check-Error", e);
	}
};
