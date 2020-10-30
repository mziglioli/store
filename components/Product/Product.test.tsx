import React from "react";
import { Product } from "./Product";
import {act, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { delay } from "../utils/TestFunctionUtils";
import { getAll } from "../utils/ProductClient";

jest.mock("../utils/ProductClient");
const productsMock = [
	{name: "product 1"},
	{name: "product 2"}
];

describe("Product component", () => {

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
		return render(
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
