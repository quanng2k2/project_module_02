import React from "react";
import "./css/sidebar_admin.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function SidebarAdmin() {
  const handleRemove = () => {
    localStorage.removeItem("flagAdmin");
  };

  return (
    <div className="sidebar">
      {/* Sidebar */}
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            {/* Collapse 1 */}
            <a
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
              href="/adminproduct"
              data-mdb-toggle="collapse"
              aria-expanded="true"
              aria-controls="collapseExample1"
            >
              <i className="fa-solid fa-house">
                <span> Trang chủ </span>
              </i>
            </a>
            {/* Collapsed content */}
            <ul
              id="collapseExample1"
              className="collapse show list-group list-group-flush"
            >
              <li className="list-group-item py-1">
                <Link to="/adminproduct" className="text-reset">
                  <i className="fa-solid fa-store">
                    <span> Quản lý sản phẩm</span>
                  </i>
                </Link>
              </li>
              <li className="list-group-item py-1">
                <Link to="/adminuser" className="text-reset ">
                  <i className="fa-solid fa-users ">
                    <span> Quản lý User</span>
                  </i>
                </Link>
              </li>
              <li className="list-group-item py-1">
                <Link to="" className="text-reset">
                  <i class="fa-solid fa-truck-fast">
                    <span> Quản lý đơn hàng</span>
                  </i>
                </Link>
              </li>
              <li className="list-group-item py-1">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  <Button variant="outline-success" onClick={handleRemove}>
                    Đăng xuất
                  </Button>
                </Link>
              </li>
            </ul>
            {/* Collapse 1 */}
          </div>
        </div>
      </nav>
      {/* Sidebar */}
    </div>
  );
}
