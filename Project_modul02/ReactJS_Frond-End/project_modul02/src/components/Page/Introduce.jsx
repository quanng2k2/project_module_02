import React from "react";
import "./css/introduce.css";
import NavbarProduct from "./NavbarProduct";
import FooterProduct from "./FooterProduct";
import SliceProduct from "./SliceProduct";

export default function Introduce() {
  return (
    <>
      <NavbarProduct />
      <SliceProduct />
      <div className="text-introduce">
        <h2>
          <b>Giá trị và sự khác biệt</b>
        </h2>
        <h5>
          Với mong muốn phát triển thương hiệu Việt bằng nội lực,{" "}
          <b>Store.vn</b> đã chú trọng vào thiết kế và sản xuất nội thất trong
          nước. Danh mục sản phẩm của <b>Store.vn</b> thường xuyên được đổi mới
          và cập nhật, liên tục cung cấp cho khách hàng các dòng sản phẩm theo
          xu hướng mới nhất. Do chính người Việt thiết kế và sản xuất, nội thất
          thương hiệu <b>Store.vn</b> luôn phù hợp với cuộc sống Á Đông, đem đến
          sự tiện nghi hoàn hảo trong mọi không gian sống.
        </h5>
        <h5>
          Hơn 70% sản phẩm của <b>Store.vn</b> được thiết kế, sản xuất bởi đội
          ngũ nhân viên cùng công nhân ưu tú với nhà máy có cơ sở vật chất hiện
          đại bậc nhất tại Việt Nam.
        </h5>
        <h5>
          Sự khác biệt của <b>Store.vn</b> chính là sáng tạo nội thất thành
          phong cách riêng, phù hợp với nhu cầu khách hàng. Không chỉ là sản
          phẩm nội thất đơn thuần, mà còn là không gian sống theo phong cách
          riêng với cách bày trí hài hòa từ đồ nội thất kết hợp với đồ trang
          trí. Giúp khách hàng cảm nhận được một không gian sống thực sự, cảm
          thấy thoải mái để tận hưởng cuộc sống.
        </h5>
        <img className="introduce-img" src="/image/introduceimg.jpeg" alt="" />
        <h2>
          <b>Chất lượng và dịch vụ</b>
        </h2>
        <h5>
          Chất lượng của nguyên vật liệu, phụ kiện và quy trình sản xuất đều
          được kiểm định và giám sát chặt chẽ bởi hệ thống quản lý chất lượng
          ADC. Sản phẩm của <b>Store.vn</b> được thiết kế theo định hướng công
          năng sử dụng, thẩm mỹ và chất lượng. Trong những năm gần đây, thương
          hiệu luôn hướng đến xu hướng thiết kế xanh nhằm đóng góp không chỉ một
          không gian sống tiện nghi mà còn là một môi trường sống trong lành cho
          người sử dụng và cộng đồng. Với nhiều cống hiến như vậy,{" "}
          <b>Store.vn</b> vinh dự nhiều năm liền được trao tặng các danh hiệu
          “Hàng Việt Nam chất lượng cao”, “Trusted brand” và “Top 100 nhà cung
          cấp hàng đầu”.
        </h5>
        <h5>
          Bên cạnh đó, <b>Store.vn</b> tự hào sở hữu đội ngũ tư vấn thiết kế và
          kỹ sư chuyên nghiệp, có kiến thức sâu rộng trong lĩnh vực đồ gỗ nội
          thất. Tập thể nhân viên tại <b>Store.vn</b>
          cam kết nỗ lực tư vấn và trợ giúp khách hàng lựa chọn sản phẩm ưng ý
          nhất. Dịch vụ tư vấn thiết kế của <b>Store.vn</b> sẽ giúp khách hàng
          kiến tạo một không gian sống như ý thông qua sự phối hợp điêu luyện
          giữa các sản phẩm nội thất và đồ trang trí.
        </h5>
        <img className="introduce-img" src="/image/introduceimg.webp" alt="" />
      </div>
      <FooterProduct />
    </>
  );
}
