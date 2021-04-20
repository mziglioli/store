import React from "react";
import { Product } from "./Product";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { getAll } from "../utils/ProductClient";
import { ComponentTestWrapper, delay } from "../../utils";

jest.mock("../utils/ProductClient");
const productsMock = [
	{name: "product 1"},
	{name: "product 2"}
];

describe("<Product /> tests", () => {
	let mockedResponse;
	const mockProducts = (products) => {
		const fakeResponsePromise = Promise.resolve(products);
		mockedResponse = jest.fn().mockImplementationOnce(() => {
			return fakeResponsePromise;
		});
		// @ts-ignore
		getAll.mockImplementation(mockedResponse);
	};

	const wrapper = () => {
		return ComponentTestWrapper(
			<Product />
		);
	}

	it("should build component without products", async () => {
		mockProducts([]);
		const { getByTestId, queryAllByTestId } = wrapper();
		await act(async () => {
			expect(getByTestId("product-title")).toHaveTextContent("test");
			expect(queryAllByTestId("products-item")).toHaveLength(0);
		});
	});
	it("should build component with products", async () => {
		mockProducts(productsMock);
		const { getByTestId, queryAllByTestId } = wrapper();
		await act(async () => {
			expect(getByTestId("product-title")).toHaveTextContent("test");
			await delay();
			expect(queryAllByTestId("products-item")).toHaveLength(2);
		});

	});
});
