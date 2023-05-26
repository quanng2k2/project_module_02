import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./css/edit_product.css";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
export default function EditProduct() {
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
  const [dataProduct, setDataProduct] = useState({
    imageProduct: "",
    nameProduct: "",
    price: "",
  });
  const navigate = useNavigate();

  const { id } = useParams();

  const { nameProduct, price } = dataProduct;

  const handleInputChange = (e) => {
    setDataProduct({
      ...dataProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);

    try {
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);

      setImageUrls((prev) => [...prev, url]);

      const editProduct = {
        ...dataProduct,
        imageProduct: url,
      };

      await axios.put(`http://localhost:8000/listProduct/${id}`, editProduct);
      navigate("/adminproduct");
    } catch (error) {
      console.error(error);
    }
  };

  const loadProducts = async () => {
    let result = await axios.get(`http://localhost:8000/listProduct/${id}`);
    setDataProduct(result.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2>Edit Product Form</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className="label-form-edit">Image Product : </label>
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
          <label> Name Product : </label>
          <input
            className="input-form-edit"
            type="text"
            name="nameProduct"
            value={nameProduct}
            onInput={(e) => handleInputChange(e)}
          />
          <br />

          <label>Price Product : </label>
          <input
            className="input-form-edit"
            type="text"
            name="price"
            value={price}
            onInput={(e) => handleInputChange(e)}
          />
          <br />
          <br />
          <Button variant="outline-success" type="submit">
            Save Product
          </Button>
        </form>
      </div>
    </div>
  );
}
