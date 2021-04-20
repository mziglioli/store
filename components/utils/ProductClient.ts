import { makeGetRequest } from "../../utils";

/**
 * Get all products from the api
 * @param
 * @returns Promise<todo>
 */
export const getAll = async () => {
	return makeGetRequest({url:"/api/products"});
};
