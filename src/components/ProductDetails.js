import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../store/Cart/CartSlice";


const ProductDetails = () => {
  const { id } = useParams();
 const navigate = useNavigate();
  const [Product, setProduct] = useState({});
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  
  
  const handleAdd = () => {
    dispatch(add(Product));
    debugger
    navigate("/Cart")


  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const ProductDetails = await response.json()
      setProduct(ProductDetails)
      
      setLoading(false);
    };
    getProduct();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {Loading ? (
            <div> Loading...</div>
          ) : (
            <>
              <div className="col-md-6 my-4 p-4">
                <img
                  src={Product.image}
                  alt={Product.title}
                  height="300px"
                  width="300px"
                />
              </div>

              <div className="col-md-6 p-4">
                <h4 className="text-uppercase text-black-50">
                  {" "}
                  {Product.category}{" "}
                </h4>
                <h1 className="display-5"> {Product.title}</h1>
                <p className="lead">
                  Rating: {Product.rating && Product.rating.rate}{" "}
                  <i className="fa-solid fa-star"></i>
                  {/* <i className="fa fa-star"></i> */}
                </p>
                <p className="lead">{Product.description}</p>
                
              </div>
              <button variant="info" onClick={handleAdd}>
              <div className="hidden content" >
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content" >Add to Cart</div></button>
                  
              
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;