import { makeGetRequest } from "./DefaultClient";

/**
 * Get all products from the api
 * @param
 * @returns Promise<todo>
 */
export const getAll = async () => {
	return makeGetRequest("/api/products");
};
