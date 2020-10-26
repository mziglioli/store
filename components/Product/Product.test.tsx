import React from "react";
import { Product } from "./Product";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Product component", () => {

	const wrapper = () => {
		return render(
			<Product />
		);
	}

	it("should build component", () => {
		const { getByTestId } = wrapper();
		expect(getByTestId("products-title_id")).toHaveTextContent("test");
	});
});
