import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Page } from "./Page";

describe("Page component", () => {

	const wrapper = () => {
		return render(
			<Page user={{name: "test"}}>
				<div data-testid={"children"}>children here</div>
			</Page>
		);
	}

	it("should build component", () => {
		const { getByTestId } = wrapper();
		expect(getByTestId("header")).toHaveTextContent("Welcome: test");
		expect(getByTestId("children")).toHaveTextContent("children here");
	});
});
