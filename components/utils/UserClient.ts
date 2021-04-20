import { makeGetRequest, makePostRequest } from "../../utils";
import { UserForm } from "../../type";

/**
 * Get all users from the api
 * @param
 * @returns Promise<todo>
 */
export const getAll = async () => {
	return makeGetRequest({url: "/api/users"});
};
export const authenticate = async (form: UserForm) => {
	return makePostRequest({url: "/api/login", form});
};