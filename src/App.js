import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./components/Product";
import Navbar from "./store/Navbar";
import Cart from "./store/Cart/Cart";
import {
  fetchProducts,
  searchProduct,
  sortProduct,
  sortProductPrice,
} from "./store/products";
import {
  selectProducts, 
  selectProductsLoading,
} from "./store/products/selectors";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  const data = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const dispatch = useDispatch();
  const handleFetchProducts = () => {
    dispatch(fetchProducts());
  };

  //Search functions...
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    if (!searchTerm) {
      handleFetchProducts();
      return;
    }
    dispatch(searchProduct(searchTerm));
  };

  //fetch products on componenet mount
  useEffect(() => {
    handleFetchProducts();
  }, []);

  
  

  if (loading) return "Loading....";

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container p-5">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group mb-3">
                    <input
                      type="search"
                      className="form-control border-success"
                      placeholder="Search"
                      onChange={handleSearch}
                    />
                  </div>
                </form>

                

                <div className="row">
                  {data.map((pd) => (
                    <Product product={pd} key={pd.id} />
                  ))}
                </div>
              </div>
            }
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/details/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;