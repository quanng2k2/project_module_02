import React, { useEffect, useState } from "react";
import "./css/productportfolio.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Rate } from "antd";

export default function ProductPortfolio() {
  // khởi tạo state để search product
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filteredData = data.filter((product) =>
      product.nameProduct.toLowerCase().includes(keyword)
    );
    setSearchResult(filteredData);
  };
  // get flag về
  const flaguser = localStorage.getItem("flagUser");
  // get listProduct axios render ra homepage
  const [data, setData] = useState([]);
  const loadListProduct = async () => {
    const result = await axios.get("http://localhost:8000/listProduct");
    setData(result.data);
  };
  useEffect(() => {
    loadListProduct();
  }, []);

  // hàm format tiền tệ
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  // check ko đăng nhập ko cho thêm vào giỏ hàng
  const checkLogin = localStorage.getItem("flagUser");

  const handleAddToCart = async (product) => {
    if (checkLogin == null) {
      alert("Bạn phải đăng ký hoặc đăng nhập :(( ");
      return;
    }
    //get data cart
    const dataCart = await axios.get("http://localhost:8000/cart");
    const cartItems = dataCart.data.filter(
      (user) => user.userEmail === flaguser
    );
    //check  xem sản phẩm đã có trong giỏ hàng chưa
    const productCart = cartItems.find((item) => item.idProduct === product.id);
    if (productCart) {
      alert("Sản phẩm đã có trong giỏ hàng");
      return;
    }

    //Thêm sản phẩm mới vào giỏ hàng
    let cartItem = {
      userEmail: flaguser,
      name: product.nameProduct,
      idProduct: product.id,
      img: product.imageProduct,
      price: product.price,
      quantity: 1,
    };
    await axios.post("http://localhost:8000/cart", cartItem);
    alert("Đã thêm vào giỏ hàng <3 ");
  };
  useEffect(() => {
    loadListProduct();
  }, []);

  return (
    <div className="container-Card">
      <div className="flex-title-seach">
        <div>
          <h2 className="title-product">Tất cả sản phẩm của Web </h2>
          <hr />
        </div>
        <div>
          <input
            className="input-search"
            placeholder="Nhập để tìm sản phẩm..."
            type="text"
            onChange={handleSearch}
            autofocus
          />
          <button className="btn-search">Tìm</button>
          <hr />
        </div>
      </div>
      <div className="list-product">
        {(searchResult.length > 0 ? searchResult : data).map(
          (product, index) => (
            <div className="card" style={{ width: "12rem" }} key={index}>
              <div className="hoverImg">
                <img
                  height={200}
                  src={product.imageProduct}
                  alt={product.name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.nameProduct}</h5>
                <p className="card-text">{formatCurrency(product.price)}</p>
                <div className="icon-loveCart">
                  <i class="fa-solid fa-heart"></i>
                </div>
                <Rate allowHalf defaultValue={5} />
                <button
                  className="btn btn-primary "
                  onClick={() => handleAddToCart(product)}
                >
                  Mua hàng
                </button>
              </div>
            </div>
          )
        )}
      </div>
      <Button variant="outline-secondary">Xem thêm</Button>
      <hr className="hr-listPro" />
    </div>
  );
}
