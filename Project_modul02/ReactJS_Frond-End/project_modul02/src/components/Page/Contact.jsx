import React from "react";
import Button from "react-bootstrap/Button";
import "./css/contact.css";
import NavbarProduct from "./NavbarProduct";
import FooterProduct from "./FooterProduct";
import SliceProduct from "./SliceProduct";

export default function Contact() {
  return (
    <>
      <NavbarProduct />
      <SliceProduct />
      <div id="contact-Sum">
        <div>
          {/* thông tin liên hệ vs shop */}
          <div className="container-contact-item1">
            <h2>Cửa hàng Store_Luxury</h2>
            <div className="icon-contact">
              <i className="fa-solid fa-location-dot"></i>
              <span className="text-contact">
                {" "}
                Địa chỉ : Quan Nhân - Thanh Xuân - Hà Nội .
              </span>
            </div>
            <div className="icon-contact">
              <i className="fa-solid fa-phone-volume"></i>
              <span className="text-contact"> Hotline : 098763xxx .</span>
            </div>
            <div className="icon-contact">
              <i className="fa-solid fa-clock"></i>
              <span className="text-contact">
                {" "}
                Thời gian làm việc : 8H - 22H <br /> Từ thứ 2 đến thứ 7 .
              </span>
            </div>
            <div className="icon-contact">
              <i className="fa-solid fa-envelope"></i>
              <span className="text-contact"> Email : GiaQuanJR@gmail.com</span>
            </div>
          </div>
          {/* stop thông tin liên hệ với shop */}
          {/* gg map của shop */}
          <div>
            <img
              className="img-contact"
              src="/image/image-contact.png"
              alt=""
            />
          </div>
          {/* stop gg map shop */}
        </div>
        {/* from gửi yêu cầu , nhận xét */}
        <div className="container-contact-item2">
          <h2> Liên hệ với chúng tôi </h2>
          <p>
            Nếu bạn có thắc mắc gì, có thể gửi yêu cầu với chúng tôi, và chúng
            tôi sẽ liên lạc với bạn sớm nhất có thể .
          </p>
          <input
            className="form-contact"
            type="text"
            placeholder="Họ Và Tên : "
          />
          <input className="form-contact" type="text" placeholder="Email : " />
          <input
            className="form-contact"
            type="text"
            placeholder="Số Điện thoại : "
          />
          <textarea
            className="form-contact-nx"
            name=""
            placeholder="Nội Dung :"
          ></textarea>{" "}
          <br />
          <Button variant="outline-success">Gửi thông tin</Button>
        </div>
        {/* stop from nhận xét */}
      </div>
      <FooterProduct />
    </>
  );
}
