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
            <li className="seperator">❤︎ Fork this on<a href="https://github.com/nikkikumari1506/Text-Conveter-Tool"> Github</a></li>
            
            
            </ul>
            </div>
        </div>
        <hr />
        <div className="row">
            <p className = "col-sm">
                &copy;{new Date().getFullYear()}・Text Converter Tool・All rights reserved・<a href="https://nikkikumari.notion.site/5c6e9c5d8aed42e79fc82a50b7bb8986
">Nikki Kumari</a>
            </p>
        </div>
      </div>
    </div>
    
    </>
  );
}
