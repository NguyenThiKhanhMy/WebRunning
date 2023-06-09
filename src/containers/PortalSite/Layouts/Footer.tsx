import React from 'react'
import { connect } from "react-redux";
import logo from '../../../assets/img/logoRun.png'

interface Props {

}

const Footer = (props: Props) => {  
    return(
      <div className="footer bg-danger text-light ">
        <div className="container-xl d-flex flex-column justify-content-center h-100 gap-2">
            <div className="d-flex justify-content-between footer_container">
                <div className="a">
                    <img src={logo} className="footer_img" />
                </div>

                <div className="d-flex flex-column b">
                    <p className="footer_text_head e">Về chúng tôi</p>
                    <a className="footer_text text_f f">Giới thiệu</a>
                    <a className="footer_text text_f">Giáo trình chạy bộ</a>
                    <a className="footer_text text_f">Kiến thức chạy bộ</a>
                    <a className="footer_text text_f">Đăng kí CTV</a>
                </div>
                <div className="d-flex flex-column delay c">
                    <p className="footer_text_head e">Hỗ trợ</p>
                    <a className=" footer_text text_f f">Chăm sóc
                        khách hàng</a>
                    <a className="footer_text text_f">Điều khoản sử dụng</a>
                </div>
                <div className="d-flex flex-column delay">
                    <p className="footer_text_head e">Thông tin liên hệ</p>
                    <p className="footer_text text_g f" >Hotline: 0916
                        582 783</p>
                    <p className="footer_text text_g">Email:
                        hocviendangquangmarathon@oao.vn</p>
                    <div className='f d-flex gap-2 icon_f'>
                        <a href="#" className="header_link"><i className="fa-brands fa-square-facebook header_icon"></i></a>
                        <a href="#" className="header_link"><i className="fa-brands fa-square-facebook header_icon"></i></a>
                        <a href="#" className="header_link"><i className="fa-brands fa-square-facebook header_icon"></i></a>
                        <a href="#" className="header_link"><i className="fa-brands fa-square-facebook header_icon"></i></a>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="footer_text_head">NƠI HUẤN LUYỆN CHẠY BỘ CHUẨN CĂN BẢN</p>
                <p className="footer_text">Học Viện Đăng Quang Marathon gồm các HLV điền kinh chuyên nghiệp chuyên đào
                    tạo
                    chạy bộ, chạy trail
                </p>
                <p className="footer_text">Copyright &#169; 2020 Học Viện Đăng Quang Marathon | Liên hệ quảng cáo: 0916
                    582
                    783</p>
            </div>
        </div>
    </div>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
};

export default connect(mapState, mapDispatchToProps)(Footer);