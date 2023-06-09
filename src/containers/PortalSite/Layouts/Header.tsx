import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import logo from 'assets/img/logoRun.png'
import { useHistory, useLocation } from 'react-router-dom';


interface Props {

}

const Header = (props: Props) => {  
    const location = useLocation();
    const history = useHistory();
    const [change, setchange] = useState(false)
    const [item, setItem] = useState(1)

    const tabbar = () => {
        setchange(!change)
    }

    const GoToOtherPage = (page: string) => {
        setchange(false)
        history.push(page);
        window.scrollTo(0, 0)
    }
   
    useEffect(() => {
        if(location.pathname == '/' || location.pathname == 'trang-chu')
        {
            if(item != 1)
            {
                setItem(1)
            }
        }
        if(location.pathname == '/gioi-thieu')
        {
            if(item != 2)
            {
                setItem(2)
            }
        }
        if(location.pathname == '/khoa-hoc')
        {
            if(item != 3)
            {
                setItem(3)
            }
        }
        if(location.pathname == '/kien-thuc')
        {
            if(item != 4)
            {
                setItem(4)
            }
        }
        if(location.pathname == '/chinh-dang-chay-bo')
        {
            if(item != 5)
            {
                setItem(5)
            }
        }
        if(location.pathname == '/ho-tro')
        {
            if(item != 6)
            {
                setItem(6)
            }
        }
        if(location.pathname == '/gio-hang')
        {
            if(item != 7)
            {
                setItem(7)
            }
        }
        if(location.pathname == '/dang-nhap')
        {
            if(item != 9)
            {
                setItem(9)
            }
        }
        if(location.pathname == '/dang-ky')
        {
            if(item != 10)
            {
                setItem(10)
            }
        }
    }, [location.pathname, item])
   
    
    return(
      <div className="headers">
        {change && <div className='mob_scene_in' style={{padding: "20px 10px", color:'white'}}>
            <ul className='mt-2' style={{listStyle: 'none', padding: 0}}>
                <li onClick={() => {GoToOtherPage('/trang-chu')}}>
                    <h6 className={`${item == 1 ? 'golden': 'unGolden'}`}>TRANG CHỦ</h6>
                </li>    
                <li onClick={() => {GoToOtherPage('/gioi-thieu')}}>
                    <h6 className={`${item == 2 ? 'golden': 'unGolden'}`}>GIỚI THIỆU</h6>
                </li>   
                <li onClick={() => {GoToOtherPage('/khoa-hoc')}}>
                    <h6 className={`${item == 3 ? 'golden': 'unGolden'}`}>KHÓA HỌC</h6>
                </li>    
                <li onClick={() => {GoToOtherPage('/kien-thuc')}}>
                    <h6 className={`${item == 4 ? 'golden': 'unGolden'}`}>KIẾN THỨC</h6>
                </li>    
                <li onClick={() => {GoToOtherPage('/chinh-dang-chay-bo')}}>
                    <h6 className={`${item == 5 ? 'golden': 'unGolden'}`}>CHỈNH DÁNG CHẠY</h6>
                </li>   
                <li onClick={() => {GoToOtherPage('/ho-tro')}}>
                    <h6 className={`${item == 6 ? 'golden': 'unGolden'}`}>HỖ TRỢ</h6>
                </li>   
                <li onClick={() => {GoToOtherPage('/gio-hang')}}>
                    <h6 className={`${item == 7 ? 'golden': 'unGolden'}`}>GIỎ HÀNG</h6>
                </li>   
                <li style={{borderBottom: '1px solid grey'}} onClick={() => {GoToOtherPage('/')}}><h6>NHẮN TIN</h6></li>   

                <li className='mt-3' onClick={() => {GoToOtherPage('/dang-nhap')}}>
                    <h6 className={`${item == 9 ? 'golden': 'unGolden'}`}>ĐĂNG NHẬP</h6>
                </li>   
                <li className='mt-3' onClick={() => {GoToOtherPage('/dang-ky')}}>
                    <h6 className={`${item == 10 ? 'golden': 'unGolden'}`}>ĐĂNG KÝ</h6>
                </li> 
            </ul>    
        </div>}
        
        <div className="header_top bg-danger text-light ">
            <div className="header_top_container container-xl d-flex align-items-center justify-content-between">
                <div className="header_top_mobile">
                  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">   
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <span><i className="fa-solid fa-phone-volume"></i></span>
                        <span className=" header_top_left_text">091 650 2783</span>
                      </div>
                      <div className="carousel-item">
                        <span><i className="fa-solid fa-envelope"></i></span>
                        <span className="header_top_left_text">hocviendangquangmarathon@oao.vn</span>
                      </div>
                    </div>
                  </div>
                </div>

                <span className="header_top_tab">
                    <span>
                        <span><i className="fa-solid fa-phone-volume"></i></span>
                        <span className=" header_top_left_text">091 650 2783</span>
                    </span>
                    <span className="header_top_left_child">
                        <span><i className="fa-solid fa-envelope"></i></span>
                        <span className="header_top_left_text">hocviendangquangmarathon@oao.vn</span>
                    </span>
                </span>
                <span className="d-flex gap-2 align-items-center justify-content-center group_icon">
                    <a href="#" className="header_link"><i className="fa-brands fa-square-facebook header_icon"></i></a>
                    <a href="#" className="header_link"><i className="fa-brands fa-square-facebook header_icon"></i></a>
                    <a href="#" className="header_link"><i className="fa-brands fa-square-facebook header_icon"></i></a>
                    <a href="#" className="header_link"><i className="fa-brands fa-square-facebook header_icon"></i></a>
                </span>
            </div>
        </div>
        <div className="header_bottom">
            <div
                className="container-xl d-flex justify-content-between align-items-center h-100 ">
                <div className="d-flex align-items-center error">
                    <img src={logo} className="header_bottom_logo" />
                    <div className="header_bottom_logo_option">
                        <select className="form-select header_bottom_select form-select-sm" aria-label="Default select example">
                            <option value="Vi">Vi</option>
                            <option value="EN">EN</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex navbar_container_main">
                    <div className='show_catching'>
                        <p className="navbar_link catching" onClick={() => {GoToOtherPage('/trang-chu')}}>Trang chủ</p>
                        <div className='hide'>
                            <p className="navbar_link" onClick={() => {GoToOtherPage('/trang-chu')}}>Trang chủ</p>
                            <p className="navbar_link mt-1" onClick={() => {GoToOtherPage('/trang-chu')}}>Trang chủ</p>
                        </div>
                    </div>
                    
                    <div className='show_catching'>
                        <p className="navbar_link catching" onClick={() => {GoToOtherPage('/gioi-thieu')}}>Giới thiệu</p>
                        <div className='hide'>
                            <p className="navbar_link" onClick={() => {GoToOtherPage('/trang-chu')}}>Trang chủ</p>
                            <p className="navbar_link mt-1" onClick={() => {GoToOtherPage('/trang-chu')}}>Trang chủ</p>
                        </div>
                    </div>
                   
                    <div className='show_catching'>
                        <p className="navbar_link catching" onClick={() => {GoToOtherPage('/khoa-hoc')}}>Khóa học</p>
                        <div className='hide'>
                            <p className="navbar_link" onClick={() => {GoToOtherPage('/trang-chu')}}>Trang chủ</p>
                            <p className="navbar_link mt-1" onClick={() => {GoToOtherPage('/trang-chu')}}>Trang chủ</p>
                        </div>
                    </div>

                    <div className='show_catching'>
                        <p className="navbar_link catching" onClick={() => {GoToOtherPage('/kien-thuc')}}>Kiến thức</p>
                        <div className='hide'>
                            <p className="navbar_link" onClick={() => {GoToOtherPage('/trang-chu')}}>Trang chủ</p>
                            <p className="navbar_link mt-1" onClick={() => {GoToOtherPage('/trang-chu')}}>Trang chủ</p>
                        </div>
                    </div>
                    
                    <div className='show_catching'>
                        <p className="navbar_link catching" onClick={() => {GoToOtherPage('/chinh-dang-chay-bo')}}>Chỉnh dáng chạy bộ</p>
                        <div className='hide'>
                            <p className="navbar_link" onClick={() => {GoToOtherPage('/trang-chu')}}>Trang chủ</p>
                            <p className="navbar_link mt-1" onClick={() => {GoToOtherPage('/trang-chu')}}>Trang chủ</p>
                        </div>
                    </div>
                    
                    <div className='show_catching'>
                        <p className="navbar_link catching" onClick={() => {GoToOtherPage('/ho-tro')}}>Hỗ trợ</p>
                        <div className='hide'>
                            <p className="navbar_link" onClick={() => {GoToOtherPage('/ho-tro')}}>Hỗ trợ</p>
                            <p className="navbar_link mt-1" onClick={() => {GoToOtherPage('/trang-chu')}}>Trang chủ</p>
                        </div>
                    </div>
                    
                </div>
                <div className="d-flex gap-3 align-items-center error_nav">
                    <a href="#" className="header_bottom_link"><i className="bi bi-chat"></i></a>
                    <span style={{cursor:'pointer'}} onClick={() => {GoToOtherPage('/gio-hang')}} className="header_bottom_link"><i className="bi bi-cart"></i></span>
                    <button onClick={() => {GoToOtherPage('/dang-nhap')}} className="header_btn bg-danger text-light" style={{width: '100px'}}>Đăng nhập</button>
                    
                </div>
                <div className='header_mob_scene'>
                    {!change
                    ?
                    <i onClick={() => {tabbar()}} className="bi bi-list" style={{fontSize: '2rem'}}></i>
                    :
                    <i onClick={() => {tabbar()}} className="bi bi-x-lg" style={{fontSize: '2rem'}}></i>
                }
                   
                </div>
            </div>
        </div>
    </div>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
};

export default connect(mapState, mapDispatchToProps)(Header);