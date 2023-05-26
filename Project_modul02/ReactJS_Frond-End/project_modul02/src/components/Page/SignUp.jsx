import React, { useEffect, useState } from "react";
import "./css/signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [users, setUsers] = useState([]);
  const { email, name, password, confirmpassword } = user;
  const loadUserRegister = async (e) => {
    const result = await axios.get("http://localhost:8000/user");
    setUsers(result.data);
  };
  useEffect((e) => {
    loadUserRegister();
  }, []);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkEmail = users.find((userr) => userr.email === email);
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      alert("Nhập đầy đủ đi fen :)) ");
      return;
    } else if (checkEmail) {
      alert("Email đã có tồn tại rồi fen :) ");
      return;
    } else if (password.length < 5) {
      alert("Mật khẩu của fen chưa thỏa mãn :) ");
      return;
    } else if (confirmpassword !== password) {
      alert("Fen ơi xác nhận password sai rồi :) ");
      return;
    }
    const validateEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!validateEmail.test(email)) {
      alert("Email của fen ko đúng định dạng :)");
      return;
    }
    await axios.post("http://localhost:8000/user", user);
    alert("Đăng ký thành công");
    navigate("/login");
  };

  // hàm tắt và show password
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="color-sign">
      <div className="container">
        <div className="loginFrom">
          <div id="register-form" className="name">
            <h2>Đăng ký</h2>
            <br />
            <label className="labelOne" htmlFor="">
              Username :
            </label>
            <i className="fa-solid fa-user" />
            <input
              onInput={(e) => handleChange(e)}
              value={name}
              name="name"
              type="text"
              id="userName"
              placeholder="Type your username "
            />
            <br />
            <hr />
            <label className="labelOne" htmlFor="">
              Email :
            </label>
            <i className="fa-solid fa-user" />
            <input
              name="email"
              onInput={(e) => handleChange(e)}
              type="text"
              id="userEmail"
              placeholder="Type your Email"
              value={email}
            />
            <br />
            <div className="error" id="email-error" />
            <hr />
          </div>
          <br />
          <div className="pass">
            <label className="labelOne" htmlFor="">
              Password :
            </label>
            {/* <i className="fa-solid fa-lock"></i> */}
            <input
              name="password"
              onInput={(e) => handleChange(e)}
              value={password}
              type={showPassword ? "text" : "password"}
              id="passUser1"
              placeholder="Type your pass"
            />
            <i
              onClick={toggleShowPassword}
              className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
            />
            <hr />
            <div className="pass">
              <label className="labelOne" htmlFor="">
                {" "}
                Confirm Password :
              </label>
              {/* <i className="fa-solid fa-lock"></i> */}
              <input
                name="confirmpassword"
                onInput={(e) => handleChange(e)}
                value={confirmpassword}
                type={showPassword ? "text" : "password"}
                id="passUser2"
                placeholder="Type your pass"
              />
              <i
                onClick={toggleShowPassword}
                className={`fa-solid ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                }`}
              />
              {/* <i className="fa-solid fa-eye"></i> */}
              <hr />
              <div id="passWordVali" />
              <div className="buttonSlice">
                <button
                  id="singUpRight"
                  className="buttonPretty"
                  onClick={handleSubmit}
                >
                  Đăng ký
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
                <div>
                  <Link to="/login">Đăng nhập</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
