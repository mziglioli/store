import React from "react";
import { Product as Products, Title, PageLayout } from "../components";
import { DefaultProps } from "../type";

/**
 * This function comment is parsed by doctrine
 * @route GET product
 * @group Content - product page
 * @type text/html
 * @returns {text/html} 200 - the product page
 */
const Product = ({ user, meta }: DefaultProps) => {
	meta.page = "product";
	return (
		<div>
			<PageLayout meta={meta} user={user}>
				<Title text={"test"} dataTestId={"product-title"} />
				<Products />
			</PageLayout>
		</div>
	)
};

Product.getInitialProps = async () => ({})
export default Product;
