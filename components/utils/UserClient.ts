import {makeGetRequest, makePostRequest} from "./DefaultClient";
import {UserForm} from "../../type/form";

/**
 * Get all users from the api
 * @param
 * @returns Promise<todo>
 */
export const getAll = async () => {
	return makeGetRequest("/api/users");
};
export const authenticate = async (form: UserForm) => {
	return makePostRequest("/api/login", form);
};