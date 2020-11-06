import {validateEmail, validateName, validatePassword} from "./ValidatorUtils";

describe("ValidatorUtils functions test", () => {
	describe("Testing validateName function", () => {
		it("Check is valid", () => {
			const isValid = validateName("tes test");
			expect(isValid).toBe(true);
		});
		it("Check is NOT valid empty", () => {
			const isValid = validateName("");
			expect(isValid).toBe(false);
		});
		it("Check is NOT valid white spaces", () => {
			const isValid = validateName("        ");
			expect(isValid).toBe(false);
		});
		it("Check is NOT valid null", () => {
			const isValid = validateName(null);
			expect(isValid).toBe(false);
		});
	});

	describe("Testing validateEmail function", () => {
		it("Check is valid", () => {
			const isValid = validateEmail("tes@test.com");
			expect(isValid).toBe(true);
		});
		it("Check is NOT valid wrong", () => {
			const isValid = validateEmail("tes test");
			expect(isValid).toBe(false);
		});
		it("Check is NOT valid empty", () => {
			const isValid = validateEmail("");
			expect(isValid).toBe(false);
		});
		it("Check is NOT valid null", () => {
			const isValid = validateEmail(null);
			expect(isValid).toBe(false);
		});
	});

	describe("Testing validatePassword function", () => {
		it("Check is valid", () => {
			expect(validatePassword("test")).toBe(true);
			expect(validatePassword("test new")).toBe(true);
		});
		it("Check is NOT valid empty", () => {
			const isValid = validatePassword("");
			expect(isValid).toBe(false);
		});
		it("Check is NOT valid null", () => {
			const isValid = validatePassword(null);
			expect(isValid).toBe(false);
		});
	});
});
