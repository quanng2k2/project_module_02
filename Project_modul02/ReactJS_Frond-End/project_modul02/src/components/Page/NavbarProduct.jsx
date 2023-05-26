import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./css/navbarProduct.css";

export default function NavbarProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userLocal = localStorage.getItem("flagUser");

  const userInfo =
    JSON.parse(userLocal) != null
      ? JSON.parse(userLocal)
      : { name: "", email: "" };

  const handleRemove = () => {
    localStorage.removeItem("flagUser");
  };

  return (
    <div id="fix-navbar">
      <Navbar
        style={{
          backgroundColor: "rgba(255, 255 ,200, 0.4)",
        }}
        expand="lg"
      >
        <Container className="container-Navbar">
          <Navbar.Brand>
            <div className="hover-logo">
              <img className="imageLogo" src="/image/logo2.png" alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/introduce"
                >
                  Giới thiệu
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Liên hệ
                </Link>
              </li>
            </Nav>
            <div className="d-flex">
              {userLocal ? (
                <div className="flex-iconUser">
                  <div onClick={handleShow}>
                    <i class="fa-solid fa-circle-user"></i>
                  </div>
                  <div>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"/login"}
                    >
                      <Button variant="outline-success" onClick={handleRemove}>
                        Đăng xuất
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/login"}
                >
                  <Button variant="outline-success">Đăng nhập </Button>
                </Link>
              )}
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/cart"}
              >
                <i className="fa-sharp fa-solid fa-cart-shopping iconCart"></i>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose} className="modalUser">
        <Modal.Header closeButton>
          <Modal.Title>
            Xin chào {userInfo.name} <i class="fa-brands fa-mailchimp"></i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tên : {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
