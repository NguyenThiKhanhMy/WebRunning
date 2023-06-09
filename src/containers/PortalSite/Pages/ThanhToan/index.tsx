import React, { useState } from 'react'
import { connect } from "react-redux";
import qr from 'assets/img/QR.png'
import { useHistory } from 'react-router-dom';

interface Props {

}

const ThanhToan = (props: Props) => {  
  const history = useHistory();

  const goToTrangChu = () => {
    window.scrollTo(0, 0)
    history.push('/trang-chu');
  }

  const goToGioHang = () => {
    history.push('/gio-hang');
    window.scrollTo(0, 0)
  }

  return(
    <div style={{backgroundColor: 'white'}}>
       <div style={{backgroundColor: '#eeeeee', padding: '30px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h3 className="mb-3" style={{fontWeight: 'bold', textAlign: 'center', margin: 0}}>THANH TOÁN</h3>
        <div>
          <p style={{fontWeight: 'bold'}}><span>1.Chi tiết đơn hàng</span><span> &gt;&gt; </span><span className="text-danger">2.Phương thức thanh
              toán</span><span> &gt;&gt;
            </span><span> 3.Xác nhận đơn
              hàng</span></p>
          <div style={{borderRadius: '5px 5px', backgroundColor: 'white'}}>
            <div className="d-flex mg-3 justify-content-between p-2" style={{border: '1px solid grey', borderRadius: '5px 5px'}}>
              <div className="form-check">
                <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked />
                <label className="form-check-label" style={{fontWeight: 'bold'}} htmlFor="flexCheckChecked">
                  Chuyển khoản
                </label>
              </div>
              <p>o</p>
            </div>
            <div className="d-flex justify-content-center align-items-center p-4">
              <div className="row row-cols-1 p-3 row-cols-md-2 g-3 justify-content-center" style={{border: '1px solid red', borderRadius: '5px 5px', maxWidth: '770px'}}>
                <div className="col text-muted">Ngân hàng:</div>
                <div className="col" style={{fontWeight: 'bold'}}>BIDV- Ngân hàng BIDV chi nhánh Hai Bà Trưng</div>
                <div className="col text-muted">Chủ thẻ:</div>
                <div className="col" style={{fontWeight: 'bold'}}>Đinh Quang Tiến</div>
                <div className="col text-muted">Nội dung chuyển khoản:</div>
                <div className="col" style={{fontWeight: 'bold'}}>[Họ tên] + [Số điện thoại] + [Tên khóa học]</div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4 className=" text-center mb-3">Quét mã QR</h4>
              <img className="mb-5" src={qr} />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <button onClick={() => {goToGioHang()}} className=" bg-light text-danger mt-3" style={{width: '120px', border: '1px solid pink', borderRadius: '5px 5px', padding: '5px 0'}}>Trở về</button>
            <button onClick={() => {goToTrangChu()}} className=" bg-danger text-light mt-3" style={{width: '120px', border: 'none', borderRadius: '5px 5px', padding: '5px 0'}}>TIẾP TỤC</button>
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

export default connect(mapState, mapDispatchToProps)(ThanhToan);