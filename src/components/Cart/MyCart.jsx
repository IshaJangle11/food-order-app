import React from "react";
import Footer from "../Footer/Footer";
import NavigationBar from "../Navbars/NavigationBar2/NavigationBar2";
import css from "./MyCart.css";

import starGIcon from "/Overview/pav-bhaji.jpg";
import starGrIcon from "/icons/starGrIcon.png";

const MyCart = () => {

  let cart = JSON.parse(localStorage.getItem("cart"));

  const addItem = (title, key) => {
    cart.map((item) => {
        if(item.title == title) 
        {
            item.quantity += 1;
            document.getElementById('item'+key).value = item.quantity;
        }
  })
  localStorage.setItem("cart", JSON.stringify(cart));
  }

  const removeItem = (title, key) => {
    var newCart;
    cart.map((item) => {
        if(item.title == title) 
        {
            if(item.quantity == 1)
            {
                newCart = cart.filter((item) => item.title != title);
                console.log(newCart);
            }
            else
            {
                item.quantity -= 1;
                document.getElementById('item'+key).value = item.quantity;
            }
        }
  })
  localStorage.setItem("cart", JSON.stringify(newCart));
}

const updatedQuantity = () => {

}

  if (cart == null) {
    return (
      <>
        <div>
          <NavigationBar />
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Your <b>Orders</b>
                    </h2>
                  </div>
                </div>
              </div>

              <h3 style={{ "text-align": "center", padding: "70px" }}>
                {" "}
                No items in cart!!
              </h3>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <div>
        <NavigationBar />
        <div className="container">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Your <b>Orders</b>
                  </h2>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover" width="100">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, key) => (
                    <>
                  <tr>
                  <td>
                    <img src={item.imgSrc} width="100" height="100" />
                  </td>
                  <td>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                  </td>
                  <td>
                    <div className="btn-group">
                      <button  onClick={event => {removeItem(item.title, key)}}>-</button>
                      <input id={'item'+key} value={item.quantity} />
                      <button onClick={event => {addItem(item.title, key)}}>+</button>
                    </div>
                    <div className="quantity"></div>
                  </td>
                </tr>
                </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default MyCart;
