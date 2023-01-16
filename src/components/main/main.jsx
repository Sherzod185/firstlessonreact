import React from "react";
import img1 from "../img/product1.jpg"
import img2 from "../img/product2.jpg"
import img3 from "../img/product3.jpg"
import img4 from "../img/product4.jpg"
import img5 from "../img/product5.jpg"
import img6 from "../img/product6.jpg"
import img7 from "../img/product7.jpg"
import img8 from "../img/product8.jpg"
export const Main=()=>{
  return (<div className="container">
<div className="shop-content">

<div className="product-box">
  <img src={img1} alt="watch1" class="product-img" />
<h2 className="product-title">
Rolex watch
</h2>
<span className="price">$345</span>
<i className='bx bx-shopping-bag add-cart'></i>
</div>

<div className="product-box">
  <img src={img2} alt="watch2" className="product-img" />
<h2 className="product-title">
  Curren watch 
</h2>
<span className="price">$49</span>
<i className='bx bx-shopping-bag add-cart'></i>
</div>

<div className="product-box">
  <img src={img3} alt="watch3" className="product-img" />
<h2 className="product-title">
  Tissot watch 
</h2>
<span className="price">$299</span>
<i className='bx bx-shopping-bag add-cart'></i>
</div>

<div className="product-box">
  <img src={img4} alt="watch4" className="product-img" />
<h2 className="product-title">
  Rate watch 
</h2>
<span className="price">$45</span>
<i className='bx bx-shopping-bag add-cart'></i>
</div>

<div className="product-box">
  <img src={img5} alt="watch5" className="product-img" />
<h2 className="product-title">
  Apple watch 
</h2>
<span className="price">$499</span>
<i className='bx bx-shopping-bag add-cart'></i>
</div>

<div className="product-box">
  <img src={img6}alt="watch6" className="product-img" />
<h2 className="product-title">
  Galaxy watch
</h2>
<span className="price">$299</span>
<i className='bx bx-shopping-bag add-cart'></i>
</div>

<div className="product-box">
  <img src={img7} alt="watch7" className="product-img" />
<h2 className="product-title">
  Galaxy Watch4
</h2>
<span className="price">$359</span>
<i className='bx bx-shopping-bag add-cart'></i>
</div>

<div className="product-box">
  <img src={img8} alt="watch8" className="product-img" />
<h2 className="product-title">
  GS8 Ultra watch
</h2>
<span className="price">$99</span>
<i className='bx bx-shopping-bag add-cart'></i>
</div>

</div>
  </div>)
}