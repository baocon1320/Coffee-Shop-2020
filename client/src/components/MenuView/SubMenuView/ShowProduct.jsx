import React, { useState, useEffect } from "react";
import { read, listRelated } from "../../Core/apiCore";
import Card from "./MenuCard";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    console.log(props);
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <div className="row">
      <div className="col-8">
        {product && product.description && (
          <Card product={product} showViewProductButton={false} />
        )}
      </div>

      <div className="col-4">
        <h4>Related products</h4>
        {relatedProduct.map((p, i) => (
          <div className="mb-3" key={i}>
            <Card product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
