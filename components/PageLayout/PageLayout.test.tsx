import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { PageLayout } from "./PageLayout";
import { buildMeta, buildUserResponse, ComponentTestWrapper } from "../../utils";

describe("<PageLayout /> tests", () => {

	const wrapper = () => {
		return ComponentTestWrapper(
			<PageLayout meta={buildMeta()} user={buildUserResponse()}>
				<div data-testid={"children"}>children here</div>
			</PageLayout>
		);
	}

	it("should build component", () => {
		const { getByTestId } = wrapper();
		expect(getByTestId("PageLayout__Component")).toBeDefined();
		expect(getByTestId("children")).toBeDefined();
	});
});
