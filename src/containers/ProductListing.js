import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
      console.log("Error", err);
    });
    dispatch(setProducts(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products:", products);
  return (
    <div className="container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
