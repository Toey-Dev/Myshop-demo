import React from "react";

const Slide = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://picsum.photos/1800/720"
            className="d-block w-100"
            alt="slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>BIG SALE 50%</h1>
            <h5 className="fs-3 fw-bold">ลดกระหน่ำกลางปี</h5>
            <p>สินค้าลดราคาสูงสุด 50% เฉพาะเดือนนี้</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://picsum.photos/1800/720"
            className="d-block w-100"
            alt="slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>BIG SALE 50%</h1>
            <h5 className="fs-3 fw-bold">ลดกระหน่ำกลางปี</h5>
            <p>สินค้าลดราคาสูงสุด 50% เฉพาะเดือนนี้</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Slide;
