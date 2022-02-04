import React ,{useState}from "react";
import { Data } from "./Data";


import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";

const Product = () => {
  const dispatch = useDispatch();
  
  const[state,setState]=useState(Data)


const filterItem=(filter)=>{
  const updateData= Data.filter(items=>{
    return  items.category===filter
  });

setState( updateData)
}

  return (
    <div className="container   ">
      <div className="row">
        <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12 ">
          <div className="row">
            <div className="col-md-3 col-lg-2 col-sm-4 col-xl-2 bg-menu">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="menu"
                >
               <i className="fa fa-minus-square"></i> Menu
                </button>
              
              
                        <ul className="dropdown-menu dropdown-menu-start"  >
                             
                  <li className="dropdown-item"  >
                  Cabage salad<span className="red">(250g)</span> <span className="space"> .......4.99 </span>    </li>
                  
                  <li className="dropdown-item"  >
                  Noodles salad<span className="red">(250g)</span>  <span className="space"> .....6.30 </span>    </li>
                  <li className="dropdown-item" >
                  Vegetable mix<span className="red">(400g)</span>  <span className="space"> .....5.99 </span>   </li>
                  <li className="dropdown-item" >
                  Seafood soup<span className="red">(350g)</span>  <span className="space"> .....6.10 </span>   </li>
                  <li className="dropdown-item" >
                  Bean soup<span className="red">(300g)</span>  <span className="space"> ..........4.40 </span>   </li>
                  <li className="dropdown-item" >
                  Stewed - <br/> vegetable<span className="red">(400g)</span>  <span className="space"> ...........4.99 </span>    </li>
                  <li className="dropdown-item" >
                  Chicken-soup<span className="red">(350g)</span>   <span className="space"> ......3.99  </span> </li>
                  <li className="dropdown-item" >
                  Roast Potatoes<span className="red">(300g)</span>  <span className="space"> ... 4.99</span>   </li>

               
                  
                          </ul>
                    
               
              </div>
            </div>
            <div className="col-md-9 col-lg-10 col-sm-8 col-xl-10 col-12  my-5">
         
              <div className="row">
                <div className="col-md-7  col-7  col-xl-8 col-lg-8 col-sm-8  ">
                <div className="dropdown d-flex justify-content-end">
  <button className="btn  fw-bold bg-light border-1 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Filter
  </button>
  <ul className="dropdown-menu  " style={{cursor:"pointer"}} aria-labelledby="dropdownMenuButton1">
    <li onClick={()=>filterItem("soup")} className="dropdown-item fs-6  fw-bold" >Soup</li>
    
    <li onClick={()=>filterItem("salad")} className="dropdown-item fs-6  fw-bold" >Salad</li>
    <li onClick={()=>filterItem("veg")} className="dropdown-item fs-6  fw-bold" >Vegetable mix</li>
    <li onClick={()=>filterItem("Rosted")} className="dropdown-item fs-6  fw-bold" >Potatoes Rosted</li>
  </ul>
</div>
                
         
         
                  <div className="row">
                    {state.map((item) => {
                      item.quantity = 1;
                      return (
                        <div className="col-md-6 col-lg-4 col-sm-6  col-7 col-xl-4 my-3 addto prd " key={item.id}>
                          <div className=" product ">
                         <div className="d-flex justify-content-between">
                          <p className="rating"> <i className="fa fa-star"></i > {item.rating}</p>
                          <i className="fa fa-heart"></i>
                          </div>
                        <div className="products">
                          
                          <img src={item.images} alt="" />
                          <div className="overlay" onClick={()=> dispatch({type:"ADD",payload:item})}>Add to cart </div>
                          </div>
                          <li>{item.name} <span className="rounded-pill">{item.gm}g</span></li>
                          <li>$ {item.price}</li>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 col-sm-4  col-5 col-xl-4">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
