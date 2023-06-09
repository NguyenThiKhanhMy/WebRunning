import React, { useState } from 'react'
import { connect } from "react-redux";
import MainCard from '../general/MainCard';
import bg40 from 'assets/img/bg40.png'

interface Props {

}

const KienThuc = (props: Props) => {  
  const [change, setChange] = useState(1)

  const changeUl = (num: number) => {
    setChange(num)
  }

  return(
    <div style={{backgroundColor: 'white'}}>
      <img src={bg40} width="100%" height="auto" />
      <div className='box_sub_d mt-4' style={{padding: '0 10px'}}>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
      <div className="mt-5 chen" style={{textAlign: 'center'}}>
        <ul id="menu_bar" style={{listStyle: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
          <li>
            <h5 style={{margin: 0}} onClick={() => {changeUl(1)}} className={`${change == 1 ? 'menu_active' : 'menu_unactive'}`}>All</h5>
          </li>
          <li>
            <h5 style={{margin: 0}} onClick={() => {changeUl(2)}} className={`${change == 2 ? 'menu_active' : 'menu_unactive'}`}>Kỹ thuật chạy bộ</h5>
          </li>
          <li>
            <h5 style={{margin: 0}} onClick={() => {changeUl(3)}} className={`${change == 3 ? 'menu_active' : 'menu_unactive'}`}>Chấn thương</h5>
          </li>
          <li>
            <h5 style={{margin: 0}} onClick={() => {changeUl(4)}} className={`${change == 4 ? 'menu_active' : 'menu_unactive'}`}>Chỉnh dáng chạy bộ</h5>
          </li>
        
        </ul>

       <MainCard paths='/kien-thuc-chi-tiet'/>

      </div>
    </div>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
};

export default connect(mapState, mapDispatchToProps)(KienThuc);