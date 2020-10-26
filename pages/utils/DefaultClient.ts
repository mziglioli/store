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

export const makeGetRequest = async url => {
	return fetch(url, {}).then(handleResponse);
};
export const makePostRequest = async (url, form) => {
	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(form)
	}).then(handleResponse);
};
export const makePostRequestEmptyResponse = async (url, form) => {
	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(form)
	});
};