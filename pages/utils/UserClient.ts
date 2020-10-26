import { makeGetRequest } from "./DefaultClient";

/**
 * Get all users from the api
 * @param
 * @returns Promise<todo>
 */
export const getAll = async () => {
	return makeGetRequest("/api/users");
};
