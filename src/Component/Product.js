

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spining from "./Spining";
import axios from "axios";

const Product = () => {
    const [filter, setFilter] = useState([]);
    const [loding, setLoding] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const getProduct = async () => {
            setLoding(true);
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setFilter(response.data);
                setLoding(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoding(false);
            }
        };
        getProduct();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filterdata = filter.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const ShowProduct = () => {
        return (
            <>
                {filterdata.slice(0, 12).map((product) => {
                    return (
                        <>
                            <div className="col-sm-6 col-lg-3 " id='center3'>
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={`/Product/ ${product.id}`}
                                >
                                    <div className="card mt-2 text-center bg-black shadow settle">
                                        <div className="ml-12 mt-4 ">
                                            <img
                                                src={product.image}
                                                className=" text-center "
                                                alt=""
                                                height={"120px"}
                                                width={"180px"}
                                            />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="card-title text-white">
                                                {product.title.slice(0, 45)}...
                                            </h5>
                                            <p className="card-text fw-bold text-white">
                                                ${product.price}
                                            </p>
                                            <Link
                                                to={`/Product/ ${product.id}`}
                                                className="btn btn-outline-success text-white "
                                            >
                                                By Now
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </>
                    );
                })}
            </>
        );
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1
                        className="fw-bold text-white"
                        style={{ textAlign: "center", margin: "4px", marginTop: "12px" }}
                    >
                        {" "}
                        E-commerce Product Catalog{" "}
                    </h1>
                </div>

                <div className="inputfield">
                    <input className="input"
                       
                        type="text"
                        placeholder="Search Products..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="row my-3">{loding ? <Spining /> : <ShowProduct />}</div>
        </div>
    );
};

export default Product;










