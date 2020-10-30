import React from "react";
import { Title } from "../components";
import { Product as Products } from "../components/Product";
import { Page } from "../components/Page";

const Product = ({ user }) => {
	console.log("load");
	return (
		<div>
			<Page  user={user}>
				<Title text={"Product Page"} dataTestId={"product-title"} />
				<Products />
			</Page>
		</div>
	)
};

export default Product;
