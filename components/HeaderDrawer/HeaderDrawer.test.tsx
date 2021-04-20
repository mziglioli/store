import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { HeaderDrawer } from "./HeaderDrawer";
import { buildMeta, ComponentTestWrapper } from "../../utils";

describe("<HeaderDrawer /> tests", () => {
	const mockCallback = jest.fn();
	const wrapper = (user, open) => {
		return ComponentTestWrapper(
			<HeaderDrawer meta={buildMeta()} user={user} open={open} handleDrawerClose={mockCallback} />
		);
	}

	it("should build component without user", () => {
		const { getByTestId } = wrapper(undefined, true);
		expect(getByTestId("Header__Component-drawer")).toBeDefined();
		expect(getByTestId("Header__Component-drawer--close_button")).toBeDefined();
		expect(getByTestId("HeaderMenuItem__Component-menu_home")).toBeDefined();
		expect(getByTestId("HeaderMenuItem__Component-menu_about")).toBeDefined();
		expect(getByTestId("HeaderMenuItem__Component-menu_contact")).toBeDefined();
		expect(getByTestId("Header__Component-drawer--login_button")).toBeDefined();
	});

	it("should build component without user", () => {
		const { getByTestId, queryByTestId } = wrapper({name: "test"}, true);
		expect(queryByTestId("Header__Component-drawer--login_button")).toBeNull();
	});

});
