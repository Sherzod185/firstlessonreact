import React from "react";
export const Footer=()=>{
  return   <footer className="footer-site">

  <div className="container">

    <div className="footer-block">

      <div className="footer-text-block">
        <h2 className="footer-title">Copyright 2020</h2>
        <p className="footer-text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia
          ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar tincidunt.</p>
      </div>
      <div className="footer-jadval-block">
        <div className="footer-list">
          <h3 className="footer-jadval-title">Sayt sahifalari</h3>
          <ul className="footer-list">
            <li className="footerr-item">
              <p className="footer-item-link" >Bosh sahifa</p>
            </li>
            <li className="footer-item">
              <p className="footer-item-link" >Xizmatlar</p>
            </li>
            <li className="footer-item">
              <p className="footer-item-link" >Portfolio</p>
            </li>
            <li className="footer-item">
              <p className="footer-item-link" >Jamoa</p>
            </li>
            <li className="footer-item">
              <p className="footer-item-link" >Blog</p>
            </li>
            <li className="footer-item">
              <p className="footer-item-link">Kontaktlar</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-ijtimoiy-block">
        <h3 className="footer-ijtimoiy-title">Biz internetda</h3>

        <p className="footer-internet linka" >Telegram</p>
        <p className="footer-internet linkb" >Facebook</p>
        <p className="footer-internet linkc" >Instagram</p>
      </div>
    </div>
  </div>
</footer>
}