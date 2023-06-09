import React, { useState } from 'react'
import { connect } from "react-redux";
import ban from 'assets/img/banner.jpg'
import { useHistory } from 'react-router-dom';

interface Props {

}

const GioHang = (props: Props) => {  

  const history = useHistory();

  const gotoThanhToan = () => {
    history.push('/thanh-toan');
  }

  return(
    <div style={{backgroundColor: 'white'}}>
       <div style={{padding: '30px 0'}}>
        <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>GIỎ HÀNG</h3>
        <div className="container-xl mb-5">
          <p className="mb-2" style={{fontWeight: 'bold'}}>Khóa học trong giỏ 2</p>
          <div className="mob_view">
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">
                    <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked />
                  </th>
                  <td>
                    <img src={ban} width="150px" height="auto" />
                  </td>
                  <td>
                    <p className="mb-1" style={{width: '400px'}}>GIÁO ÁN 6 THÁNG FM SUB 4 CHO NGƯỜI PACE 7-8</p>
                    <p className="mb-1" style={{fontSize: 'calc(1rem *0.7)'}}>25/12/2022 at 8.00 PM</p>
                    <div>
                      <span><i className="bi bi-clock" /> 3 tháng</span>
                      <span className="text-danger" style={{marginLeft: '5px'}}><i className="bi bi-cash" /> Miễn phí
                        gia
                        hạn thêm 3 tháng</span>
                    </div>
                  </td>
                  <td>
                    <span style={{fontSize: 'calc(1rem * 0.8)', textDecoration: 'line-through'}}>5.000.000đ</span>
                    <span style={{fontWeight: 'bold', marginLeft: "5px"}}>2.999.000đ</span>
                  </td>
                  <td>
                    <span style={{cursor: 'pointer'}} className="text-muted remove">Xóa</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked />
                  </th>
                  <td>
                    <img src={ban} width="150px" height="auto" />
                  </td>
                  <td>
                    <p className="mb-1" style={{width: '400px'}}>GIÁO ÁN 6 THÁNG FM SUB 4 CHO NGƯỜI PACE 7-8</p>
                    <p className="mb-1" style={{fontSize: 'calc(1rem *0.7)'}}>25/12/2022 at 8.00 PM</p>
                    <div>
                      <span><i className="bi bi-clock" /> 3 tháng</span>
                      <span className="text-danger" style={{marginLeft: '5px'}}><i className="bi bi-cash" /> Miễn phí
                        gia
                        hạn thêm 3 tháng</span>
                    </div>
                  </td>
                  <td>
                    <span style={{fontSize: 'calc(1rem * 0.8)', textDecoration: 'line-through'}}>5.000.000đ</span>
                    <span style={{fontWeight: 'bold', marginLeft: "5px"}}>2.999.000đ</span>
                  </td>
                  <td>
                    <span style={{cursor: 'pointer'}} className="text-muted remove">Xóa</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="container-xl">
          <div className="d-flex gap-3" style={{justifyContent: 'flex-end'}}>
            <div>
              <p style={{fontSize: 'calc(1rem*0.9)', fontWeight: 'bold'}}>Tổng thanh toán</p>
              <p style={{fontSize: 'calc(1rem*0.8)'}} className="text-muted">1 khóa học</p>
            </div>
            <p style={{fontSize: '1.2rem', fontWeight: 'bold'}}>2.999.000 đ</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button onClick={() => {gotoThanhToan()}} className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>THANH TOÁN</button>
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

export default connect(mapState, mapDispatchToProps)(GioHang);