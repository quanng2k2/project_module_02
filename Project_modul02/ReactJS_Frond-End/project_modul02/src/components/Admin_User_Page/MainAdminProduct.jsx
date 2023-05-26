import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/main_admin_product.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SidebarAdmin from "./SidebarAdmin";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

export default function MainAdminProduct() {
  const [imageUpload, setImageUpload] = useState(null);
  // State lấy url ảnh về
  const [imageUrls, setImageUrls] = useState([]);

  // Bước 1: Upload ảnh
  // Bước 2: Lấy ảnh về
  // Bước 3: Hiển thị ảnh

  // Tạo storage lưu trữ từ dịch vụ của firebase
  const imagesListRef = ref(storage, "images/");

  // Lấy dữ liệu trả về từ firebase

  useEffect(() => {
    listAll(imagesListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // get api listProduct về để reder ra table
  const [data, setData] = useState([]);
  const loadProduct = async () => {
    const result = await axios.get("http://localhost:8000/listProduct");
    setData(result.data);
  };

  //lấy các giá trị ở form để post vào api sau đó render ra table
  const [listProducts, setListProducts] = useState({
    nameProduct: "",
    price: "",
    imageProduct: "",
  });

  const { nameProduct, price } = listProducts;

  const handleInputChange = (e) => {
    setListProducts({
      ...listProducts,
      [e.target.name]: e.target.value,
    });
  };

  // Thêm sản phẩm vào db
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);

    try {
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);

      setImageUrls((prev) => [...prev, url]);

      const newProduct = {
        ...listProducts,
        imageProduct: url,
      };

      await axios.post("http://localhost:8000/listProduct", newProduct);
      loadProduct();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  // hàm xóa product
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/listProduct/${id}`);
    loadProduct();
  };

  // hàm format tiền tệ
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  return (
    <div>
      <SidebarAdmin />
      <div className="container-from">
        <h2> Quản lý sản phẩm </h2>
        <form className="main-admin" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex-container-from">
            <div className="flex-from">
              <label>Name Product :</label>
              <input
                value={nameProduct}
                name="nameProduct"
                onInput={(e) => handleInputChange(e)}
                placeholder="Add name product..."
                className="input-from-product"
              />{" "}
              <br />
              <label>Img Product :</label>
              <input
                name="imageProduct"
                className="input-from-product"
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={(e) => {
                  setImageUpload(e.target.files[0]);
                }}
              />
              <br />
              <label>Price Product :</label>
              <input
                name="price"
                value={price}
                onInput={(e) => handleInputChange(e)}
                placeholder="Add price product..."
                className="input-from-product"
              />
            </div>
            <div className="flex-from">
              <button
                type="submit"
                id="button-admin-product"
                className="btn btn-primary"
              >
                Thêm sản phẩm
              </button>
            </div>
          </div>
        </form>
      </div>
      <div id="table-product" className="container">
        <Table striped bordered hover>
          <thead>
            <tr className="bg-dark text-white">
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Ảnh sản phẩm</th>
              <th>Giá sản phẩm</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1} </th>
                  <td style={{ textAlign: "left" }}>{product.nameProduct}</td>
                  <td>
                    <img
                      className="img-admin-product"
                      src={product.imageProduct}
                      alt={product.nameProduct}
                    />
                  </td>
                  <td>{formatCurrency(product.price)}</td>
                  <td>
                    <Link>
                      <Button variant="primary">
                        <i className="fa-solid fa-eye"></i>
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/product/edit/${product.id}`}>
                      <Button variant="warning">Sửa</Button>
                    </Link>
                  </td>
                  <td>
                    <Link>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(product.id)}
                      >
                        Xóa
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
