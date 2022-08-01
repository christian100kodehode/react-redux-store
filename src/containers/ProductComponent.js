import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);

  const renderList = products.map((product) => {
    const { id, image, title, price, category } = product;
    return (
      <div className="container" key={id}>
        <Link to={`product/${id}`}>
          <div className="product">
            <div>
              <div className="meta">{category}</div>
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="price">$ {price}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
