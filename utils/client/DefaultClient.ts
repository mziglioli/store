import "isomorphic-fetch";
import {RequestGetProps, RequestPostProps} from "../../type/request";

const defaultHeaders = {
	"Content-Type": "application/json"
};

/**
 * Will return the body as a json or an error object
 * @param response
 * @returns {*}
 */
export const handleResponse = response => {
	return response.json().then(json => {
		if (!response.ok) {
			return Promise.reject({
				data: json,
				status: response.status,
				statusText: response.statusText
			});
		}
		return json;
	});
};

export const makeGetRequest = async ({url, headers}: RequestGetProps) => {
	return fetch(url, {
		method: "GET",
		headers: headers || defaultHeaders
	}).then(handleResponse);
};
export const makePostRequest = async ({url, headers, form}: RequestPostProps) => {
	return fetch(url, {
		method: "POST",
		headers: headers || defaultHeaders,
		body: JSON.stringify(form)
	}).then(handleResponse);
};