import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {useDropzone} from 'react-dropzone'
const Cart = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const {getRootProps, getInputProps} = useDropzone()
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  // var today = new Date();
  // var time = today.getHours() + ":" + today.getMinutes() + ":"
  return (
<>
  
    <div className="container    ">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-xl-12 col-lg-12 "></div>
      </div>
      <div className="d-flex justify-content-between">
      <h4>My Order</h4>
      <h4 className="cart"><i className="fa fa-cart-plus"></i> <span className="length">{cart.length}</span></h4>
      </div>
      <table className="table shadow ">
        <tbody>
          {cart.map((item) => {
            return (
            
                <tr className="order-summary" key={item.id}>
                  <td width="70px">
                 
                    <img
                      src={item.images}
                      className=" rounded-circle"
                      alt="food"
                      width="50px"
                      height="50px"
                    />
                  </td>
                  <td
                    width="60px"
                    style={{ fontSize: "12px", fontWeight: "700" }}
                  >
                    {item.name}
                  </td>
                  <td width="90px">
                 
                    <ul>
                      <li
                        style={{ marginRight: "12px", marginLeft: "5px" }}
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch({ type: "DECREASE", payload: item });
                          } else {
                            dispatch({ type: "REMOVE", payload: item });
                          }
                        }}
                      >
                        -
                      </li>
                      <li style={{ marginRight: "12px" }}>{item.quantity}</li>

                      <li
                        style={{ marginRight: "5px" }}
                        onClick={() =>
                          dispatch({ type: "INCREASE", payload: item })
                        }
                      >
                        +
                      </li>
                    </ul>
                  </td>
                  <td
                    width="40px"
                    style={{ fontSize: "12px", fontWeight: "700" }}
                  >
                    {item.price}
                  </td>
                  <td
                    width="40px"
                    style={{ fontSize: "12px", fontWeight: "700" }}
                    onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  >
                    <i className="fa fa-times"></i>
                  </td>
                </tr>
            
            );
          })} 
        </tbody>
      </table>
    
      {total > 0 && <h2>total:${total.toFixed(2)}</h2>}
{
  cart.length === 0 ? (
    <>

   
    <h4 >  cart is empty</h4>
    </>
  ):(
<>
    <div {...getRootProps()}>
    <input {...getInputProps()} />
    <div class="droptarget">Drag and Drop</div>
  </div>
   <Link to ="/checkout"><button className="btn btn-success">Checkout</button></Link>
   </>
  )
}
    </div>
    </>
  
  );
};

export default Cart;
