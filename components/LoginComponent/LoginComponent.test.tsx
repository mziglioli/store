import React from "react";
import { LoginComponent } from "./LoginComponent";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { fireEventChangeAndBlur, fireEventClick } from "../utils/TestFunctionUtils";

describe("Product component", () => {

	let onsubmit;
	const wrapper = (error: boolean) => {
		return render(
			<LoginComponent t={{}} onSubmitLogin={onsubmit} showError={error} />
		);
	}
	beforeEach(() => {
		onsubmit = jest.fn();
	})

	it("should build component without errors", async () => {
		const { getByTestId, queryByTestId } = wrapper(false);
		expect(getByTestId("login-email")).toBeDefined();
		expect(getByTestId("login-password")).toBeDefined();
		expect(queryByTestId("login-error-text")).toBeNull();
	});

	it("should build component with errors", async () => {
		const { getByTestId, queryByTestId } = wrapper(true);
		expect(getByTestId("login-email")).toBeDefined();
		expect(getByTestId("login-password")).toBeDefined();
		expect(queryByTestId("login-error-text")).toBeDefined();
	});

	it("should NOT submit when not valid data input", async () => {
		const { getByTestId } = wrapper(false);
		await fireEventClick(getByTestId("login-submit"));
		expect(onsubmit).not.toHaveBeenCalled();

		await fireEventChangeAndBlur(getByTestId("login-email"), "test.com");
		await fireEventClick(getByTestId("login-submit"));
		expect(onsubmit).not.toHaveBeenCalled();

		await fireEventChangeAndBlur(getByTestId("login-password"), "1");
		await fireEventClick(getByTestId("login-submit"));
		expect(onsubmit).not.toHaveBeenCalled();
	});

	it("should submit when valid data input", async () => {
		const { getByTestId } = wrapper(false);
		await fireEventChangeAndBlur(getByTestId("login-email"), "test@test.com");
		await fireEventChangeAndBlur(getByTestId("login-password"), "test");

		await fireEventClick(getByTestId("login-submit"));
		expect(onsubmit).toHaveBeenCalled();
	});
});
