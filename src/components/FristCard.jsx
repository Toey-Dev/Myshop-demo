import React from "react";

const FristCard = ({ icon, title, content }) => {
  return (
    <>
      <div className="col-12 col-md-4">
        <div className="card text-bg-light text-center">
          <div className="card-body">
            <i className={`${icon} fa-3x mt-3 text-primary`}></i>
            {/* <i className="fas fa-shipping-fast fa-3x mt-3 text-primary"></i> */}
            <h5 className="card-title mt-3 fs-4 fw-semibold">{title}</h5>
            <p className="card-text fs-6 fw-lighter text-body-tertiary">
              {content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FristCard;
