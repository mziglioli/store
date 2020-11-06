/* istanbul ignore file */
/* eslint-disable  @typescript-eslint/no-var-requires */
import { act, fireEvent } from "@testing-library/react";
import nock from "nock";
import {UserResponse} from "../../type/response";
import {UserForm} from "../../type/form";

export const delay = async (delays?: number) => {
	await act(async () => {
		await new Promise((resolve, reject) => {
			setTimeout(() => resolve(), delays || 500);
		});
	});
};
export const mockNockGet = (path: string, uri: string, response: object) => {
	nock(path)
		.get(uri)
		.reply((_, body) => {
			return [200, response];
		});
};
export const mockNockGetError = (path: string, uri: string, response: object) => {
	nock(path)
		.get(uri)
		.replyWithError(response);
};
export const mockNockPost = (path: string, uri: string, body: any, response: object) => {
	nock(path)
		.post(uri, body)
		.reply((_, body) => {
			return [200, response];
		});
};
export const mockNockPostFormData = (path: string, uri: string, body: any, response: object) => {
	nock(path)
		.post(uri)
		.reply((_, body) => {
			return [200, response];
		});
};
export const mockNockPostEmpty = (path: string, uri: string, response: object) => {
	nock(path)
		.post(uri)
		.reply(200, response);
};
export const mockNockPost202 = (path: string, uri: string, body: any) => {
	nock(path)
		.post(uri, body)
		.reply(202);
};
export const mockNockPostError = (path: string, uri: string, body: any, response: object) => {
	nock(path)
		.post(uri, body)
		.replyWithError(response);
};
export const mockNockPostError400 = (path: string, uri: string, body: any, response: object) => {
	nock(path)
		.post(uri, body)
		.reply((_, body) => {
			return [400, response];
		});
};
export const mockNockPostError500 = (path: string, uri: string, body: any, response: object) => {
	nock(path)
		.post(uri, body)
		.reply((_, body) => {
			return [500, response];
		});
};

// events
export const fireEventChangeAndBlur = async (element, value) => {
	await fireEvent.change(element, {
		target: {
			value
		}
	});
	await fireEvent.blur(element);
};
// events
export const fireEventClick = async (element) => {
	await fireEvent.click(element);
};

// builders
export const buildUserResponse = (): UserResponse => {
	return {
		id: "123",
		name: "test",
		email: "test@test.com",
		active: true,
		token: "123"
	}
}
export const buildUserForm = (): UserForm => {
	return {
		id: "123",
		name: "test",
		email: "test@test.com",
		active: true,
		password: "password"
	}
}