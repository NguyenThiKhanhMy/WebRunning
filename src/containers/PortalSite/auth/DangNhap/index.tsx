import React, { useState } from 'react'
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';

interface Props {

}


const DangNhap = (props: Props) => {  
    const history = useHistory();
    const [item, setItem]  = useState(false)
    const [forgetPass, setForgetPass] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [condition, setCondition] = useState(0)
    const error = [
      {errCode: 1, errMsg: "Required field"},
      {errCode: 2, errMsg: "Password required"},
    ]
    const eye = () => {
      setItem(!item)
    }

    const forget = () => {
      setForgetPass(!forgetPass)
    }

    const register = () => {
      history.push('/dang-ky');
    }

    const DangNhap = () => {
      if(!username){
        setCondition(1)
      }
      if(!password){
        setCondition(2)
      }
      if(username && password){
        setCondition(0)
        history.push('/trang-chu');
      }
    }

    return(
      <div className='d-flex justify-content-center align-items-center main_dang_nhap' style={{height: '100vh'}}>
        <div className='dang_nhap_container'>
          {!forgetPass ?
          <h3 className='text-muted mb-4 mt-4' style={{fontWeight: 'bold'}}>Đăng nhập</h3>
          :
          <p className='mb-4 mt-4'>Chúng tôi sẽ gửi xác nhận tới email của bạn</p>
          }
          

          {!forgetPass ?
          <div>
            <input onChange={e => setUsername(e.target.value)} required type="text" className={`form-control ${condition != 1 && 'mb-3'}`} placeholder="Tên đăng nhập" aria-label="Username" aria-describedby="basic-addon1"/>
            <p className='mb-3 text-danger' style={{fontSize: 'calc(1rem * 0.8)'}}>{condition == 1 &&  error[0].errMsg}</p>
            <div className={`input-group ${condition != 2 && 'mb-2'}`}>
              <input onChange={e => setPassword(e.target.value)} type={`${item ? 'text' : 'password'}`} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
              <span onClick={() => {eye()}} className="input-group-text" id="basic-addon1" style={{cursor: 'pointer'}}>{item ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash-fill"></i>}</span>
            </div>
            <p className='mb-3 text-danger' style={{fontSize: 'calc(1rem * 0.8)'}}>{condition == 2 && error[0].errMsg}</p>
          </div>
          :
          <div>
            <input type="text" className="form-control mb-3" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
            <input type={'text'} className="form-control mb-3" placeholder="OPT" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        }
          

          
            
            {!forgetPass ? 
            
            <div className='d-flex justify-content-between mb-4'>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{cursor: "pointer"}}/>
                <label className="form-check-label" style={{fontSize: 'calc(1rem * 0.8)'}}>
                Lưu tài khoản
                </label>
              </div>
              <span onClick={() => {forget()}} className='k_dang_nhap'>Quên mật khẩu</span>
            </div>: 
            <div className=' mb-4'>
              <span onClick={() => {forget()}} className='k_dang_nhap'>Quay lại đăng nhập</span>
            </div>}
            
          {!forgetPass ? 
          <div className='d-flex justify-content-center align-items-center mb-4'><button onClick={() => {DangNhap()}} className="header_btn bg-danger text-light " style={{width: '120px'}}>Đăng nhập</button></div>
          :
          <div className='d-flex justify-content-center align-items-center mb-4'><button  className="header_btn bg-danger text-light " style={{width: '120px'}}>Gửi</button></div>  
          }
          
          
          {
            !forgetPass && 
            <div className='style18 container-xl mb-3'></div>
          }

          {
            !forgetPass && 
            <div style={{fontSize: '2rem'}} className='d-flex justify-content-center gap-3 mb-3'>
            <i className="bi bi-facebook change_icon_dang_nhap_face"></i>
            <i className="bi bi-google change_icon_dang_nhap"></i>
          </div>
          }
          
          {
            !forgetPass && 
            <p className='text-center mb-4' style={{fontSize: 'calc(1rem * 0.8)'}}>Bạn chưa có tài khoản? <span className='k_dang_nhap' onClick={() => {register()}}>hãy tạo ngay nào.</span></p>
          }
          
        </div>
      </div>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
};

export default connect(mapState, mapDispatchToProps)(DangNhap);