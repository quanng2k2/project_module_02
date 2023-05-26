import React, { useEffect, useState } from "react";
import SidebarAdmin from "./SidebarAdmin";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function MainAdminUser() {
  // hàm xóa acc user
  const deleteUser = async (id) => {
    alert("Bạn có muốn xóa tài khoản này không ?");
    await axios.delete(`http://localhost:8000/user/${id}`);
    loadUser();
  };

  // get api render vào table
  const [data, setData] = useState([]);
  const loadUser = async () => {
    const results = await axios.get("http://localhost:8000/user");
    setData(results.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <SidebarAdmin />
      <div id="table-product" className="container">
        <Table striped bordered hover>
          <thead>
            <tr className="bg-dark text-white">
              <th>STT</th>
              <th>Email User</th>
              <th>Name User</th>
              <th>passUser</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.password}</td>
                  <td>
                    <Link>
                      <Button variant="primary">
                        {" "}
                        <i className="fa-solid fa-eye"></i>
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Link>
                      <Button
                        variant="danger"
                        onClick={() => deleteUser(user.id)}
                      >
                        Khóa
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
