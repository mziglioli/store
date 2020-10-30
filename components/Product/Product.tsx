import React, {useEffect, useState} from "react";
import { getAll } from "../utils/ProductClient";

export const Product = () => {
    const [products, setProducts] = useState<Array<any>>([]);
    console.log("Product: load");
    useEffect(() => {
        console.log("Product: effect");
        getAll().then(e => {
            console.log("Product: getall", e);
            setProducts(e);
        }).catch(e => {
            console.error("error", e);
        })
    }, []);
    return (
        <div>
            <h3 className="product-title" data-testid="product-title">
                test
            </h3>
            <div className="" data-testid="products">
                {products && products.length > 0 && products.map((p, index) => (
                    <p key={`product_${index}`} data-testid="products-item">{p.name}</p>
                ))}
            </div>
        </div>
    );
};
