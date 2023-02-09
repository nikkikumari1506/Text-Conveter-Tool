import React from 'react';
import "./Footer.css";
export default function Footer() {
  return (
    <>
    <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
            <ul className="horizontal-list">
            <li className="seperator"><a href="https://twitter.com/NikkiKumari1506">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/nikki-kumari-b9b42a207
">Linkedin</a></li>  
            <li><a href="mailto: nkumari.work@gmail.com">Contact</a></li>
            </ul>
            </div>
        </div>
        <hr />
        <div className="row">
            <p className = "col-sm">
                &copy;{new Date().getFullYear()} Text Converter Tool | All rights reserved  
            </p>
        </div>
      </div>
    </div>
    
    </>
  );
}
