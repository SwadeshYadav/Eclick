
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spining from "./Spining";
import axios from "axios";

const ProductList = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data)
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const ProductDetails = () => {
    if (!product) {
      return null;
    }

    const placeorder = () => {
      alert("Order submitted ....");
    };

    return (
      <div className="container mx-auto my-5 ">
        <div className="row">
          <div className="col-md-12 col-lg-4 ">
            <img
              src={product.image}
              className="mb-4"
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-white fs-2 fw-bolder">
              {product.category}
            </h4>
            <h3 className="text-white">{product.title}</h3>
            {product.rating && (
              <p className="lead fs-4 fw-bolder text-white">
                Rating {product.rating.rate}{" "}
                <i className="fa fa-star fw-bolder text-white"></i>
              </p>
            )}
            <h2 className="display-5 fw-bolder text-white">${product.price}</h2>
            <p className="lead  text-white">{product.description}</p>

            <h3 className="lead mb-3 fw-bolder ">
              {" "}
              Product Available {product.rating.count} Items
            </h3>

            <button
              className="btn btn-outline-success center3 mx-1 py-2 text-white "
              onClick={placeorder}
            >
              Place to order
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container bg-neutral-400 shadow-lg mt-2 rounded">
      <div className="row">{loading ? <Spining /> : <ProductDetails />}</div>
    </div>
  );
};

export default ProductList;

