import React, { useEffect, useState } from "react";
import "./css/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userLogin;
  const [dataLogin, setDataLogin] = useState([
    {
      id: 1,
      name: "Giaquan102",
      email: "GiaquanJr@gmail.com",
      password: "686868",
      confirmpassword: "686868",
      type: "admin",
    },
  ]);
  const handleChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const loadUserLogin = async (e) => {
    const resultUserLogin = await axios.get("http://localhost:8000/user");
    console.log(resultUserLogin);
    setDataLogin(resultUserLogin.data);
  };
  useEffect(() => {
    loadUserLogin();
  }, []);

  console.log(dataLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkLogin = dataLogin.find(
      (user) => user.email === email && user.password === password
    );

    if (!checkLogin) {
      alert("Tài khoản đăng nhập chưa đúng và không được để trống :) ");
      return;
    } else {
      alert("Đăng nhập thành công");
      if (checkLogin.type === "admin") {
        localStorage.setItem("flagAdmin", 666);
        navigate("/adminproduct");
      } else {
        const obj = {
          email: checkLogin.email,
          name: checkLogin.name,
        };
        localStorage.setItem("flagUser", JSON.stringify(obj));
        navigate("/");
      }
    }
  };

  // hàm tắt và show password
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="color-login">
      <div className="container">
        <div className="loginFrom">
          <div className="name">
            <h2>Đăng nhập</h2>
            <br />
            <label className="labelOne" htmlFor="">
              Email :{" "}
            </label>
            <i className="fa-solid fa-user" />
            <input
              name="email"
              value={email}
              onChange={(e) => handleChange(e)}
              type="text"
              id="userEmail"
              placeholder="Type your userEmail "
            />
            <br />
            <hr />
          </div>
          <br />
          <div className="pass">
            <label className="labelOne" htmlFor="">
              Password :{" "}
            </label>
            <i className="fa-solid fa-lock" />
            <input
              name="password"
              value={password}
              onChange={(e) => handleChange(e)}
              type={showPassword ? "text" : "password"}
              id="passUser"
              placeholder="Type your pass"
            />
            <i
              onClick={toggleShowPassword}
              className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
            />
            <hr />
          </div>
          <div className="getPass">
            <a href=".">Quên mật khẩu ?</a>
          </div>
          <div className="buttonSlice">
            <button className="buttonPretty" onClick={handleSubmit}>
              ĐĂNG NHẬP
            </button>
          </div>
          <div className="iconSign">
            <a href="https://vi-vn.facebook.com/">
              <i className="fa-brands fa-facebook icon-social" />
            </a>
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidmkifQ%3D%3D%22%7D">
              <i className="fa-brands fa-twitter icon-social" />
            </a>
            <a href="https://business.instagram.com/getting-started/?locale=vi_VN&content_id=NynnhacPgcYLy73&ref=sem_smb&utm_term=dsa-1878572981228&gclid=Cj0KCQjw8qmhBhClARIsANAtbodHW_rG03rlCbsnN4oL8fCtSSpdgdS3GGI3_EJGfGNYtXXRPD0YP3saAmM1EALw_wcB">
              <i className="fa-brands fa-square-instagram icon-social" />
            </a>
            <Link to={"/"} style={{ fontSize: 19, marginLeft: 7 }}>
              <i className="fa-solid fa-house"></i>
            </Link>
          </div>
          <div className="textSign">
            <p>Hoặc đăng ký sử dụng</p>
            <Link to="/signup">Đăng Ký</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
