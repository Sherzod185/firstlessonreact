import React from "react";
export const Header=()=>{
  return (<header >  
      <div className="cart">
        <h2 class="cart-title">
          You cart
        </h2>
        <div className="cart-context">
    
        </div>
    
  
        <div className="total">
          <h2 className="total-title">
            Total
          </h2>
          <span className="total-price">
            $0
          </span>
                </div>
                <button className="btn-buy" type="button">Buy Now</button>
          <i className="bx bx-x" id="close-cart"></i>
          </div>
    
    <div className="container nav">
      <p><span className="A">SH</span><span className="B">E</span><span className="A">R</span><span className="B">Z</span><span className="A">O</span><span className="B">D</span>⌚️</p>
    
      <input className="searchProduct" type="text"   placeholder=" Search a name of product" />
      <div className="iconblock"> 
        <i class='bx bx-cart bx-tada'  id="cart-icon"> <p className="count">0</p></i>
        Korzinka </div>
      <button className="logout">Log Out</button>
    
    
    </div>
    </header>)
}