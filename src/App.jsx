import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TableContent from "./components/TableContent";
import Cards from "./components/Cards";
import Silde from "./components/Silde";
import FristCard from "./components/FristCard";
import TitleCard from "./components/TitleCard";
import Buttonproduct from "./components/Buttonproduct";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState("Toey");

  let tam = 55 + 66;

  const handleShow = () => {
    console.log("click");
  };

  return (
    <>
      {/* icon, title, content */}
      <Navbar text={tam} handleShow={handleShow} setData={setData} />
      <Silde />
      <div className="container">
        <div className="row g-3 mt-3">
          <FristCard
            icon={"fas fa-shipping-fast"}
            title={"ส่งฟรีทั่วประเทศ"}
            content={"บริการจัดส่งด่วนฟรี เมื่อมียอดสั่งซื้อขั้นต่ำตามกำหนด"}
          />
          <FristCard
            icon={"fa-solid fa-shield-halved"}
            title={"รับประกันสินค้า"}
            content={
              "มั่นใจได้ สินค้าทุกชิ้นมีการรับประกันความเสียหาย 1 ปีเต็ม"
            }
          />
          <FristCard
            icon={"fa-solid fa-medal"}
            title={"ของเเท้ 100%"}
            content={"สินค้าลิขสิทธิ์เเท้จากเเบรนด์ดัง เชื่อถือได้เเน่นอน"}
          />
        </div>
      </div>
      <TitleCard />
      <div className="container mt-3">
        <div className="row g-3">
          <Cards
            url={"https://picsum.photos/300/200?random=1"}
            title={"หูฟังไร้สาย"}
            content={"เสียงดี เบสเเน่น ตัดเสียงรบกวนได้"}
            price={"฿1,290"}
          />
          <Cards
            url={"https://picsum.photos/300/200?random=1"}
            title={"สมาร์ทวอทช์"}
            content={"วัดชีพจร นับก้าว กันน้ำ IP68"}
            price={"฿2,500"}
          />
          <Cards
            url={"https://picsum.photos/300/200?random=1"}
            title={"กล้อง Action Cam"}
            content={"ความชัด 4K พร้อมระบบกันสั่น"}
            price={"฿4,900"}
          />
          <Cards
            url={"https://picsum.photos/300/200?random=1"}
            title={"ลำโพง Bluetooth"}
            content={"เเบตอึด 12 ชม. เสียงรอบทิศทาง"}
            price={"฿900"}
          />
        </div>
      </div>
      <Buttonproduct />
      <Footer />
      <TableContent data={data} />
    </>
  );
}

export default App;
