import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./css/slice.css";

export default function SliceProduct() {
  return (
    <div className="slice-homepage">
      {/* start slice web */}
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            height={500}
            className="d-block w-100 "
            src="/image/slice01.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Trang trí nội thất phòng khách</h2>
            <p>
              Sau đây là 1 demo của Store.vn đã cập nhật những mẫu thiết kế
              phòng khách nhà cấp 4 đẹp,
              <br /> hiện đại và được nhiều người ưa chuộng nhất.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            height={500}
            className="d-block w-100"
            src="/image/slice02.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Trang trí nội thất phòng bếp</h3>
            <p>
              {" "}
              Sau đây là 1 demo của Store.vn đã cập nhật những mẫu thiết kế
              phòng bếp nhà cấp 4 đẹp,
              <br /> hiện đại và được nhiều người ưa chuộng nhất.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            height={500}
            className="d-block w-100"
            src="/image/slice03.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Trang trí nội thất phòng làm việc</h3>
            <p>
              Sau đây là 1 demo của Store.vn đã cập nhật những mẫu thiết kế
              phòng làm việc nhà cấp 4 đẹp,
              <br /> hiện đại và được nhiều người ưa chuộng nhất.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* stop slice web */}
    </div>
  );
}
