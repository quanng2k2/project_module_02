import React, { useEffect, useState } from "react";
import "./css/cart.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cart() {
  const flaguser = localStorage.getItem("flagUser");
  const [dataCart, setDataCart] = useState([]);
  // lưu 1 state để tính total
  const [total, setTotal] = useState(0);
  const loadDataCart = async () => {
    const result = await axios.get("http://localhost:8000/cart");
    const filterCart = result.data.filter(
      (user) => user.userEmail === flaguser
    );
    setDataCart(filterCart);
  };

  useEffect(() => {
    loadDataCart();
  }, []);

  const handleQuantityChange = (product, newQuantity) => {
    const newDataCart = dataCart.map((item) =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item
    );
    setDataCart(newDataCart);
  };

  useEffect(() => {
    let newTotal = 0;
    dataCart.forEach((product) => {
      const productTotal = product.price * product.quantity;
      newTotal += productTotal;
    });
    setTotal(newTotal);
  }, [dataCart]);

  // hàm format tiền tệ
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  // hàm xóa sản phẩm trong giỏ hàng
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Bạn có chắc chắn muốn xóa sản phẩm này ?"
    );
    if (confirmed) {
      await axios.delete(`http://localhost:8000/cart/${id}`);
      loadDataCart();
    }
  };

  // hàm thanh toán remove đi sản phẩm
  const handleCheckout = async () => {
    const confirmed = window.confirm("Bạn có chắc chắn muốn thanh toán ?");
    if (confirmed) {
      // Xóa tất cả sản phẩm trong giỏ hàng
      for (let i = 0; i < dataCart.length; i++) {
        await axios.delete(`http://localhost:8000/cart/${dataCart[i].id}`);
      }
      // Load lại giỏ hàng để cập nhật dữ liệu
      loadDataCart();
    }
  };

  return (
    <>
      <div className="navigate-homepage">
        <Link to={"/"} className="button-home">
          <button className="snip1547">
            <span>Quay lại trang chủ</span>
          </button>
        </Link>
      </div>
      <div className="container-cart">
        <h1>Shopping Cart </h1>
        <div className="shopping-cart">
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Giá</label>
            <label className="product-quantity">Số lượng</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Tổng cộng</label>
          </div>
          {dataCart.map((product) => (
            <div className="product" key={product.id}>
              <>
                <div className="product-image">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="product-details">
                  <h6 className="product-title">{product.name}</h6>
                </div>
                <h5 className="product-price">
                  {formatCurrency(product.price)}
                </h5>
                <div className="product-quantity">
                  <input
                    value={product.quantity}
                    className="form-control"
                    type="number"
                    min={1}
                    onChange={(e) =>
                      handleQuantityChange(product, parseInt(e.target.value))
                    }
                  />
                </div>
                <div className="product-removal">
                  <button
                    className="remove-product"
                    onClick={() => handleDelete(product.id)}
                  >
                    Xóa
                  </button>
                </div>
                <h5 className="product-line-price">
                  {formatCurrency(product.price * product.quantity)}
                </h5>
              </>
            </div>
          ))}

          {/* start total check */}
          <div className="totals">
            <div className="totals-item">
              <label>Mã giảm giá:</label>
              <input
                className="totals-value"
                id="cart-tax"
                placeholder="Nhập mã giảm giá..."
                type="text"
                autoFocus
              />
            </div>
            <div className="totals-item totals-item-total">
              <label>Tổng cộng :</label>
              <div className="totals-value" id="cart-total">
                {formatCurrency(total)}
              </div>
            </div>
          </div>
          <button className="checkout" onClick={handleCheckout}>
            {" "}
            Thanh toán{" "}
          </button>
        </div>
      </div>
    </>
  );
}
