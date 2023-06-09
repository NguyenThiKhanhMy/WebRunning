import React from 'react'
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import banner from 'assets/img/banner.jpg'
interface Props {

}

const DangNhap = (props: Props) => {  
    const history = useHistory();
    const register = () => {
      history.push('/trang-chu');
      console.log('ji')
    }
    return(
      <div className='d-flex justify-content-center align-items-center main_dang_ky' style={{minHeight: '100vh'}}>
        <section className="h-100 h-custom" >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-8 col-xl-6">
                <div className="card rounded-3">
                  <img src={banner}
                    className="w-100" style={{borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem'}}
                    alt="Sample photo"/>
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Đăng ký</h3>

                    <div className="px-md-2">

                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example1q" placeholder='Họ và Tên' className="form-control" />
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">

                          <div className="form-outline datepicker">
                            <input type="text" className="form-control" placeholder='Email' id="exampleDatepicker1" />
                          </div>

                        </div>
                        <div className="col-md-6 mb-4">

                        <div className="form-outline datepicker">
                            <input type="text" className="form-control" placeholder='Số điện thoại' id="exampleDatepicker1" />
                          </div>

                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">

                          <div className="form-outline datepicker">
                            <input type="text" className="form-control" placeholder='Mật khẩu' id="exampleDatepicker1" />
                          </div>

                        </div>
                        <div className="col-md-6 mb-4">

                        <div className="form-outline datepicker">
                            <input type="text" className="form-control" placeholder='Nhập lại mật khẩu' id="exampleDatepicker1" />
                          </div>
                        </div>
                      </div>

                      <div >
                        <p className="mb-2" style={{fontSize: "calc(1rem * 0.8)"}}>Chú ý: bạn nên sử dụng mật khẩu mạnh có ít nhất 1 chữ in hoa, chữ thường, số và kí hiệu</p>
                        <div className="form-check mb-4" style={{fontSize: 'calc(1rem * 0.8)'}}>
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <label className="form-check-label" >
                              Xác nhận với các <span className='k_dang_nhap'>Điều khoản trong chính sách sử dụng</span>
                          </label>
                        </div>
                      </div>
                     
                      <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => {register()}} className="header_btn bg-danger text-light " style={{width: '120px'}}>Đăng ký</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
};

export default connect(mapState, mapDispatchToProps)(DangNhap);