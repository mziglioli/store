import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "./Header";
import { buildMeta, buildUserResponse, ComponentTestWrapper } from "../../utils";

describe("<Header /> tests", () => {

	const wrapper = () => {
		return ComponentTestWrapper(
			<Header meta={buildMeta()} user={buildUserResponse()} />
		);
	}

	it("should build component without user", () => {
		const { getByTestId } = wrapper();
		expect(getByTestId("Header__Component")).toBeDefined();
		expect(getByTestId("Header__Component-AppBar")).toBeDefined();
		expect(getByTestId("Header__Component-Menu")).toBeDefined();
	});
});
