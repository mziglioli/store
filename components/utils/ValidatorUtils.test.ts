import { validateEmail, validateName } from "./ValidatorUtils";

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
});
