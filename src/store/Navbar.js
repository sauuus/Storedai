import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {sortProduct,
sortProductPrice,
} from "././products";
import { useState} from "react";
import { useDispatch } from "react-redux";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  // state = whole application state
  // Sort Function...
  const dispatch = useDispatch()
  const [isAscending, setIsAscending] = useState(false);

  const [sortPrice, setsortPrice] = useState(false);

  const handleSort = () => {
    dispatch(sortProduct(isAscending));
    setIsAscending(!isAscending);
  };

  const handleSortPrice = () => {
    dispatch(sortProductPrice(sortPrice));
    setsortPrice(!sortPrice);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container -fluid">
          <span className="navbar-brand" to="/">
            {" "}
            <b>MySTORE</b>
          </span>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                {" "}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/cart">
                {" "}
                +
              </Link>
            </li>
          </ul>
          {/* <span className="navbar-text">
            {" "}
            Cart Items: {items.cartItems.length}
          </span> */}

        <DropdownButton
        as={ButtonGroup}
        title="Sort"
        id="bg-vertical-dropdown-1"
        variant="secondary"
      >
        <Dropdown.Item eventKey="1" onClick={handleSort}>Sort By Title</Dropdown.Item>
        <Dropdown.Item eventKey="2"  onClick={handleSortPrice}> Sort By Price</Dropdown.Item>
      </DropdownButton>

          
                
        </div>
      </nav>
    </>
  );
};

export default Navbar;
