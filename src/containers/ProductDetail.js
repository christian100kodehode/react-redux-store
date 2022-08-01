import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productAction";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description, id } = product;
  const dispatch = useDispatch();
  console.log(productId);
  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
      console.log("Error", err);
    });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    // If product and productId is not empty -> fetch product
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="containerdetails">
      <div className="contentItem">
        <div className="header">{title}</div>
        <div className="price">$ {price}</div>
      </div>
      <br></br>
      <div className="description">{description}</div>
      <br></br>
      <img src={image} alt={title} className="imageS" />
      <Link to="/react-redux-store">
        <h3>Back</h3>
      </Link>
    </div>
  );
};

export default ProductDetail;
