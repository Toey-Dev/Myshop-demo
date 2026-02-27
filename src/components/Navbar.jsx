// rafc
import React, { useState } from "react";

const Navbar = () => {
  // const [show, setShow] = useState(false);
  // const [n] = useState([
  //   { id: "1", name: "toey1", detail: "MSI" },
  //   { id: "2", name: "Notebook", detail: "ASUS" },
  // ]);

  // const handleClick = () => {
  //   // setN(n + 1);
  //   setShow(true);
  //   if (show) {
  //     alert("555+");
  //   } else {
  //     alert("111++");
  //   }
  // };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-house me-3"></i>
            MyShop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className=" navbar-nav ms-auto mb-2 me-4 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <button type="button" className="btn btn-primary py-1 px-3">
              login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
