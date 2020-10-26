import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "./Header";

describe("Product component", () => {

	const wrapper = (user) => {
		return render(
			<Header user={user} />
		);
	}

	it("should build component without user", () => {
		const { getByTestId } = wrapper(undefined);
		expect(getByTestId("header")).toHaveTextContent("Please sign in here: todo");
	});
	it("should build component with user", () => {
		const { getByTestId } = wrapper({name: "test"});
		expect(getByTestId("header")).toHaveTextContent("Welcome: test");
	});
});
