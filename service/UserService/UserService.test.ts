import { buildUserResponse, mockNockGet, mockNockGetError } from "../../components/utils/TestFunctionUtils";
import { UserApiURL } from "../../config/default";
import { check } from "./UserService";

describe("UserService tests", () => {
	let req;
	const validUserResponse = buildUserResponse();
	describe("check functional tests", () => {
		beforeEach(() => {

		});

		it("should return a valid user response", async () => {
			mockNockGet(UserApiURL, "/user/check/123", validUserResponse);
			const user = await check("123");
			expect(user).toEqual(validUserResponse);
		});
		it("should return an undefined response as it throws exception", async () => {
			mockNockGetError(UserApiURL, "/user/check/not-valid", {});

			const user = await check("not-valid");
			expect(user).toEqual(undefined);
		});
	});
});
