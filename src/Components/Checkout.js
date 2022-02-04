import React from "react";

import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const Checkout = () => {
  const Nevigate = useNavigate();

  const cart = useSelector((state) => state);
  console.log(cart);
  
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
 
  return (
    <div className="container my-5 ">
    <div className="row">
      <div className="col-md-6 bg-checkout">

      <table className="table  ">
        <tbody>
          {cart.map((item) => {
            return (
              <div>
                <tr>
                  <td width="150px">
                 
                    <img
                      src={item.images}
                      className=" rounded-circle my-3 "
                      alt="food"
                      width="120px"
                      height="120px"
                    />
                  </td>
                  <td
                    width="200px"
                
                  >
                    {item.name} <span style={{fontSize:"12px"}}>({item.gm}g)</span>
                  </td>
                  <td width="150px">
                 
                    <ul>
                     
                      <li style={{ marginRight: "12px" }}>Qut : {item.quantity}</li>

                   
                    </ul>
                  </td>
               <td className="remove d-flex justify-content-between" onClick={()=>dispatch({type:"REMOVE",payload:item})}>  Remove  </td>
                
                </tr>
              
              </div>
            );
          })}
            
        </tbody>
      </table>
      <p className="d-flex justify-content-end blk" >subtotal : $  {total > 0 && <p className="blk"> {total.toFixed(2)} </p>}</p>
      </div>
    </div>

<div className="my-3">
      {total > 0 && <h3>Total to Pay : ${total.toFixed(2)}</h3>}
      </div>
  
    </div>
  );
};

export default Checkout;
