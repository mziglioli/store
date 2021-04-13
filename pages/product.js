import React from "react";
import { Title } from "../components";
import { Product as Products } from "../components/Product";
import Page from "../components/Page/Page";

const Product = ({ user, meta }) => {
	meta.page = "product";
	return (
		<div>
			<Page
				meta={meta}
				user={user}
			>
				<Title text={"test"} dataTestId={"product-title"} />
				<Products />
			</Page>
		</div>
	)
};

Product.getInitialProps = async () => ({})
export default Product;
