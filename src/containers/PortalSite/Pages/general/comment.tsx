import React, { useState } from 'react'
import { connect } from "react-redux";
import avatar from 'assets/img/ava3.png'

interface Props {  
    tital: any
}

const Comment = (props: Props) => {  
  const [item, setItem] = useState(3)
  const [comment, setComment] = useState([
    {id: 0, name: 'Hạ Vũ', stat: false, time: '25/12/2022 at 8.00 PM', cons: 'Trải qua 3 tháng huấn luyện em, cứ nghĩ chỉ cần sức khỏe tăng lên 1 chút, chạy xa 1 chút là mọi thứ đã đủ rồi, nhưng mà kết quả vướt qua em mong đợi, em từ một người mới không biết gì về kỹ thuật chạy chỉ có thể chạy 2 3 km mỗi buổi tập vậy mà sau khóa học em đã chinh phục được cột mốc 15km một buổi tập.'},
    {id: 1, name: 'Hạ Vũ', stat: false, time: '25/12/2022 at 8.00 PM', cons: 'Trải qua 3 tháng huấn luyện em, cứ nghĩ chỉ cần sức khỏe tăng lên 1 chút, chạy xa 1 chút là mọi thứ đã đủ rồi, nhưng mà kết quả vướt qua em mong đợi, em từ một người mới không biết gì về kỹ thuật chạy chỉ có thể chạy 2 3 km mỗi buổi tập vậy mà sau khóa học em đã chinh phục được cột mốc 15km một buổi tập.'},
    {id: 2, name: 'Hạ Vũ', stat: false, time: '25/12/2022 at 8.00 PM', cons: 'Trải qua 3 tháng huấn luyện em, cứ nghĩ chỉ cần sức khỏe tăng lên 1 chút, chạy xa 1 chút là mọi thứ đã đủ rồi, nhưng mà kết quả vướt qua em mong đợi, em từ một người mới không biết gì về kỹ thuật chạy chỉ có thể chạy 2 3 km mỗi buổi tập vậy mà sau khóa học em đã chinh phục được cột mốc 15km một buổi tập.'},
    {id: 3, name: 'Hạ Vũ', stat: false, time: '25/12/2022 at 8.00 PM', cons: 'Trải qua 3 tháng huấn luyện em, cứ nghĩ chỉ cần sức khỏe tăng lên 1 chút, chạy xa 1 chút là mọi thứ đã đủ rồi, nhưng mà kết quả vướt qua em mong đợi, em từ một người mới không biết gì về kỹ thuật chạy chỉ có thể chạy 2 3 km mỗi buổi tập vậy mà sau khóa học em đã chinh phục được cột mốc 15km một buổi tập.'},
    {id: 4, name: 'Hạ Vũ', stat: false, time: '25/12/2022 at 8.00 PM', cons: 'Trải qua 3 tháng huấn luyện em, cứ nghĩ chỉ cần sức khỏe tăng lên 1 chút, chạy xa 1 chút là mọi thứ đã đủ rồi, nhưng mà kết quả vướt qua em mong đợi, em từ một người mới không biết gì về kỹ thuật chạy chỉ có thể chạy 2 3 km mỗi buổi tập vậy mà sau khóa học em đã chinh phục được cột mốc 15km một buổi tập.'},
    {id: 5, name: 'Hạ Vũ', stat: false, time: '25/12/2022 at 8.00 PM', cons: 'Trải qua 3 tháng huấn luyện em, cứ nghĩ chỉ cần sức khỏe tăng lên 1 chút, chạy xa 1 chút là mọi thứ đã đủ rồi, nhưng mà kết quả vướt qua em mong đợi, em từ một người mới không biết gì về kỹ thuật chạy chỉ có thể chạy 2 3 km mỗi buổi tập vậy mà sau khóa học em đã chinh phục được cột mốc 15km một buổi tập.'},
    {id: 6, name: 'Hạ Vũ', stat: false, time: '25/12/2022 at 8.00 PM', cons: 'Trải qua 3 tháng huấn luyện em, cứ nghĩ chỉ cần sức khỏe tăng lên 1 chút, chạy xa 1 chút là mọi thứ đã đủ rồi, nhưng mà kết quả vướt qua em mong đợi, em từ một người mới không biết gì về kỹ thuật chạy chỉ có thể chạy 2 3 km mỗi buổi tập vậy mà sau khóa học em đã chinh phục được cột mốc 15km một buổi tập.'},
    {id: 7, name: 'Hạ Vũ', stat: false, time: '25/12/2022 at 8.00 PM', cons: 'Trải qua 3 tháng huấn luyện em, cứ nghĩ chỉ cần sức khỏe tăng lên 1 chút, chạy xa 1 chút là mọi thứ đã đủ rồi, nhưng mà kết quả vướt qua em mong đợi, em từ một người mới không biết gì về kỹ thuật chạy chỉ có thể chạy 2 3 km mỗi buổi tập vậy mà sau khóa học em đã chinh phục được cột mốc 15km một buổi tập.'},
    {id: 8, name: 'Hạ Vũ', stat: false, time: '25/12/2022 at 8.00 PM', cons: 'Trải qua 3 tháng huấn luyện em, cứ nghĩ chỉ cần sức khỏe tăng lên 1 chút, chạy xa 1 chút là mọi thứ đã đủ rồi, nhưng mà kết quả vướt qua em mong đợi, em từ một người mới không biết gì về kỹ thuật chạy chỉ có thể chạy 2 3 km mỗi buổi tập vậy mà sau khóa học em đã chinh phục được cột mốc 15km một buổi tập.'},
  ])

  const seeMore = () => {
    setItem(item + 3)
  }
  const changeBool = (idex: number) => {
    var arr = [...comment];
    arr[idex].stat = !arr[idex].stat
    setComment(arr)
  }
    return(
      <div>
         {comment.slice(0, item).map((val, index)=> {
                    return(
                      <div key={index} className="mb-3" style={{border: '1px solid gainsboro', borderRadius: '5px 5px'}}>
                        <div id="main_comment" style={{padding: '10px 10px'}}>
                          <div className="d-flex mb-3">
                            <img src={avatar} />
                            <div style={{marginLeft: '10px'}}>
                              <p style={{fontWeight: 'bold'}}>{val.name}</p>
                              <p style={{fontSize: 'calc(1rem * 0.8)', color: 'gray'}}><i className="bi bi-clock" />
                                {val.time}</p>
                            </div>
                          </div>
                          <p className="mb-4 text-muted" style={{textAlign: 'justify', fontSize: 'calc(1rem * 0.8)'}}>
                          {val.cons}</p>
                          {val.stat 
                          ?
                            <div className="input-group mb-3">
                              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                          :
                            <p onClick={() => {changeBool(val.id)}} id="removeInput"  className="mb-2 text-muted" style={{cursor: 'pointer', fontSize: 'calc(1rem * 0.8)'}}>Phản
                            hồi</p>
                          }
                        
                        </div>
                      </div>
                    )
                  })}
                 
                  <div className="d-flex justify-content-center align-items-center">
                    <span onClick={() => {seeMore()}} style={{cursor: 'pointer'}}><i className="bi bi-caret-down-fill" /> Xem thêm <i className="bi bi-caret-down-fill" /></span>
                  </div>
      </div>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
};

export default connect(mapState, mapDispatchToProps)(Comment);