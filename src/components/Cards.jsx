import React from "react";

const Cards = ({ url, title, price, content }) => {
  return (
    <>
      {/* url, title , content , price */}
      <div className="col-12 col-md-3">
        <div className="card">
          <img src={url} className="card-img-top" alt="Product 1" />
          <div className="card-body">
            <h5 className="card-title mt-1 fs-5 fw-medium">{title}</h5>
            <p className="card-text fs-6 fw-lighter text-body-tertiary">
              {content}
            </p>
            <div className="d-flex align-items-center">
              <p className="fs-6 fw-semibold text-danger mt-3">{price}</p>
              <button
                type="button"
                className="btn btn-outline-primary py-1 px-2 ms-auto"
              >
                <i className="fa-solid fa-cart-shopping me-2"></i>ใส่ตะกร้า
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
