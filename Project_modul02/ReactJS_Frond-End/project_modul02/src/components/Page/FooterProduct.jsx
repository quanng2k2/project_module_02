import React from "react";
import "./css/footer.css";

export default function FooterProduct() {
  return (
    <div>
      <>
        {/* Footer */}
        <footer className="text-center text-lg-start bg-light text-muted">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <h5>
                Đăng nhập với shop bằng cách liên kết qua các trang mạng xã hội
                :
              </h5>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <section className="mb-4">
                {/* Facebook */}
                <a
                  className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                {/* Twitter */}
                <a
                  className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter" />
                </a>
                {/* Google */}
                <a
                  className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: "#dd4b39" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-google" />
                </a>
                {/* Instagram */}
                <a
                  className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram" />
                </a>
                {/* Linkedin */}
                <a
                  className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                {/* Github */}
                <a
                  className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: "#333333" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-github" />
                </a>
              </section>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3" />
                    Store Luxury.vn
                  </h6>
                  <p>
                    - Tại Store Luxury này,bạn có thể tìm được những ý tưởng về
                    thiết kế và trang trí nội thất được thực hiện bởi chúng tôi,
                    đó đều là những ý tưởng mới và độc quyền .
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Sản Phẩm </h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Phòng Bếp
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Phòng Khách
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Phòng Làm việc
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Hướng Dẫn</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Hướng dẫn mua hàng
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Hướng dẫn thanh toán
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Hỗ trợ khách hàng
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Liên Hệ</h6>
                  <p>
                    <i className="fas fa-home me-3" /> Địa chỉ :Thanh Xuân - Hà
                    Nội
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    Email : Giaquan@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" /> Hotline (tư vấn) :
                    1900555
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* footer image start */}
          <section className="footer-img-flex">
            <div className="row">
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img src="/image/imagedemo01.avif" className="w-100" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img src="/image/imagedemo02.avif" className="w-100" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img src="/image/imagedemo03.avif" className="w-100" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img src="/image/imagedemo04.avif" className="w-100" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img src="/image/imagedemo05.avif" className="w-100" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* footer image stop */}
          {/* Copyright */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            Bản quyền thuộc về Store Luxury . Cung cấp bởi Quân_JR
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </>
    </div>
  );
}
