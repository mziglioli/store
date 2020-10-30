import "isomorphic-fetch";

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

export const makeGetRequest = async (url: string, headers: any) => {
	return fetch(url, {
		method: "GET",
		headers
	}).then(handleResponse);
};
export const makePostRequest = async (url: string, form: any, headers: any) => {
	return fetch(url, {
		method: "POST",
		headers,
		body: JSON.stringify(form)
	}).then(handleResponse);
};

