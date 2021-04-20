import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { HeaderMenuItem } from "./HeaderMenuItem";
import { ComponentTestWrapper } from "../../utils";
import { Home as HomeIcon } from "@material-ui/icons";

describe("<HeaderMenuItem /> tests", () => {

	const wrapper = () => {
		return ComponentTestWrapper(
			<HeaderMenuItem title="title" name="name" endpoint="/" icon={<HomeIcon/>} />
		);
	}

	it("should build component", () => {
		const { getByTestId } = wrapper();
		expect(getByTestId("HeaderMenuItem__Component-name")).toHaveTextContent("title");
	});
});
