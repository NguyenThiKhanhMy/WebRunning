import React, { useState } from 'react'
import { connect } from "react-redux";
import Comment from '../../general/comment';
import bg40 from 'assets/img/bg40.png'
import bg7 from 'assets/img/bg7.png'
import bg39 from 'assets/img/bg39.png'
import bg38 from 'assets/img/bg38.png'

interface Props {

}

const ChiTiet = (props: Props) => {  
  const [change, setChange] = useState(1)

  const changeUl = (num: number) => {
    setChange(num)
  }

  return(
    <div>
    <img src={bg40} width="100%" height="auto" />
    <div id="main_newss_fat" style={{backgroundColor: '#eeeeee'}}>
      <div className="container main_newss">
        <p className="mb-2" style={{fontSize: 'calc(1rem * 0.8)', color: 'gray'}}><i className="bi bi-clock" /> 25/12/2022 at
          8.00 PM</p>
        <h3 className="mb-5" style={{fontWeight: 'bold'}}>VÌ SAO KHỞI ĐỘNG QUAN TRỌNG TRONG CHẠY BỘ ?</h3>
        <img className="mb-3" src={bg39} style={{width: '100%', height: 'auto', borderRadius: '2.5px 2.5px'}} />
        <p className="mb-3" style={{textAlign: 'justify'}}>Có rất nhiều người chạy bộ vì vội không kịp thời gian đi làm
          mỗi sáng nên
          khi ra khởi động thường rất
          nhanh chóng. Thực hiện qua loa và rất ít động tác khởi động, chính vì thế chỉ cần buổi chạy căng hơn
          bình thường bạn sẽ đau.</p>
        <p className="mb-2" style={{fontWeight: 'bold'}}>Nguyên nhân gây ra cơn đau</p>
        <p className="mb-3" style={{textAlign: 'justify'}}>Khởi động qua loa làm cho các nhóm cơ xương khớp chưa được đánh
          thức khi bạn
          thực hiện các động tác như
          tăng giảm tốc đột ngột hoặc chỉ cần dẫm phải một vật cản trên đường, cơ bắp sẽ đưa ra chỉ báo đau thậm
          chí bạn sẽ bị đau cổ chân, lật cổ chân hoặc ống đồng làm gián đoạn buổi tập và ngừng tập do chấn thương
          những ngày tiếp theo.</p>
        <p className="mb-2" style={{fontWeight: 'bold'}}>Cách khởi động như thế nào là nhanh và hiệu quả</p>
        <ul className="mb-2" style={{textAlign: 'justify'}}>
          <li>Hãy đi từ phần cổ chân, tránh bị lật cổ chân, bong gân, trật khớp.</li>
          <li>Xoay gối, với người hay bị đau gối do khô khớp thì động tác này nó như là tra dầu vào máy để vận
            hành tốt.
            hơn, vì khi bạn chạy thân trên của bạn dội vào phần gối, nó chịu một áp lực khá là lớn</li>
          <li>Xoay các khớp hông háng, bài xoay này giúp bạn dẻo hơn khi tăng sải và không đau đớn khi thực hiện
            các bài
            tập đẩy căng nhịp độ.</li>
          <li>Động tác xoay tay vai, nó giúp cho bạn không bị mỏi vai khi bạn chạy, bạn tập động tác này nhuần
            nhuyễn đến
            đâu, thì bạn sẽ đánh lỏng vai, và không gồng thân trên bạn sẽ chạy form dáng rất đẹp.</li>
          <li>Động tác xoay cổ, nó cực quan trọng khi bạn đi race chạy lâu, nó giúp bạn không bị mỏi cổ hay đau.
          </li>
        </ul>
        <p className="mb-3" style={{textAlign: 'justify'}}>Những động tác trên giúp bạn chạy tốt hơn và kết thúc bài tập
          rất nhẹ nhàng
          không mệt mỏi. Hãy dành thời
          gian cho khởi động, bạn sẽ thấy quá trình chạy bộ khỏe hơn và phục hồi tốt hơn sau mỗi lần race.</p>
        <p className="mb-3" style={{fontWeight: 'bold'}}>Video hướng dẫn khởi động</p>
        <img className="mb-2" src={bg38} style={{width: '100%', height: 'auto'}} />
        <p style={{textAlign: 'justify'}}>Khởi động qua loa làm cho các nhóm cơ xương khớp chưa được đánh thức khi bạn
          thực hiện các động tác như
          tăng giảm tốc đột ngột hoặc chỉ cần dẫm phải một vật cản trên đường, cơ bắp sẽ đưa ra chỉ báo đau thậm
          chí bạn sẽ bị đau cổ chân, lật cổ chân hoặc ống đồng làm gián đoạn buổi tập và ngừng tập do chấn thương
          những ngày tiếp theo.</p>
      </div>
    </div>
   
   
    <div className="pb-5" id="main_newss_fat mt-5" style={{backgroundColor: '#eeeeee', padding: '10px 10px'}}>
      <div className="container-xl main_newss_3nd" style={{maxWidth: '600px'}}>
      <h3 className="mb-5" style={{fontWeight: 'bold', textAlign: 'center'}}>BÌNH LUẬN</h3>
                  <div className="d-flex">
                    <div style={{backgroundColor: 'gray', height: '40px', width: '40px', borderRadius: '50%'}} />
                    <div className="input-group flex-nowrap" style={{marginLeft: '10px'}}>
                      <input type="text" className="form-control" placeholder="Viết bình luận" aria-label="Comment" aria-describedby="addon-wrapping" />
                    </div>
                  </div>
   <Comment tital='ok'/>
   </div>
   </div>
   
   
    <div className="pb-5" id="main_newss_fat" style={{backgroundColor: '#eeeeee'}}>
      <div className="container main_newss_3nd"  style={{backgroundColor: 'white'}}>
        <h3 className="mb-5 mt-3" style={{fontWeight: 'bold', textAlign: 'center'}}>BÀI VIẾT LIÊN QUAN</h3>
        <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center mb-5">
          <div className="col " style={{minWidth: '200px'}}>
            <div className="card card_main_container" style={{cursor: 'pointer'}}>
              <img src={bg7} className="card-img-top" alt="..." />
              <div className="card-body" style={{textAlign: 'start'}}>
                <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>
                  25/12/2022
                  at
                  8pm</p>
                <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr
                  Long
                </p>
                <button className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                  chi
                  tiết</button>
              </div>
            </div>
          </div>
          <div className="col " style={{minWidth: '200px'}}>
            <div className="card card_main_container" style={{cursor: 'pointer'}}>
              <img src={bg7} className="card-img-top" alt="..." />
              <div className="card-body" style={{textAlign: 'start'}}>
                <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>
                  25/12/2022
                  at
                  8pm</p>
                <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr
                  Long
                </p>
                <button className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                  chi
                  tiết</button>
              </div>
            </div>
          </div>
          <div className="col " style={{minWidth: '200px'}}>
            <div className="card card_main_container" style={{cursor: 'pointer'}}>
              <img src={bg7} className="card-img-top" alt="..." />
              <div className="card-body" style={{textAlign: 'start'}}>
                <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>
                  25/12/2022
                  at
                  8pm</p>
                <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr
                  Long
                </p>
                <button className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                  chi
                  tiết</button>
              </div>
            </div>
          </div>
          <div className="col " style={{minWidth: '200px'}}>
            <div className="card card_main_container" style={{cursor: 'pointer'}}>
              <img src={bg7} className="card-img-top" alt="..." />
              <div className="card-body" style={{textAlign: 'start'}}>
                <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>
                  25/12/2022
                  at
                  8pm</p>
                <p className=" card-text" style={{fontSize: 'calc(1rem*.9)', color: 'grey', fontWeight: 'bold'}}>Mr
                  Long
                </p>
                <button className="header_btn bg-danger text-light mt-3" style={{width: '120px'}}>Xem
                  chi
                  tiết</button>
              </div>
            </div>
          </div>
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

export default connect(mapState, mapDispatchToProps)(ChiTiet);