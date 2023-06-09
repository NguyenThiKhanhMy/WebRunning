import React, { useState } from 'react'
import { connect } from "react-redux";
import avatar from 'assets/img/ava3.png'
import Comment from '../../general/comment';

interface Props {  
}

const HocThu = (props: Props) => {  
    const [item, setItem] = useState(1)

    const changeItem = (num: number) => {
      setItem(num)
    }
  
    return(
        <div>
        <div id="main_test" className="d-flex">
          <div style={{width: '70%'}} id="main_test_after">
            <iframe id="video" width="100%" height="500px" src="https://www.youtube.com/embed/zgPJMbApf_0" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <div id="main_test_after" style={{width: '30%', padding: '10px 10px', overflowY: 'scroll', height: '500px', backgroundColor: 'white'}} className="right_container">
            <p className="mb-3 " style={{fontWeight: 'bold'}}>Nội dung giáo án</p>
            <div className="d-flex justify-content-between" style={{borderBottom: '1px solid gainsboro'}}>
              <div>
                <p style={{fontWeight: 'bold', fontSize: 'calc(1rem * 0.9)'}}>1. Tổng quan</p>
                <p className="mb-2" style={{fontSize: 'calc(1rem * 0.8)'}}>1/2 | 30:44</p>
              </div>
              <p><i className="bi bi-caret-up-fill" /></p>
            </div>
            <div style={{padding: '10px 20px'}}>
              <p style={{fontSize: 'calc(1rem * 0.8)'}}>1. Những chấn thương thường gặp, phương pháp tránh
                chấn thương
              </p>
              <p className="mb-3" style={{fontSize: 'calc(1rem * 0.8)'}}><i className="bi bi-play-circle-fill text-danger" />
                17:54</p>
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{fontSize: 'calc(1rem * 0.8)'}}>2. Những chấn thương thường gặp, phương pháp tránh chấn
                    thương
                  </p>
                  <p className="mb-3" style={{fontSize: 'calc(1rem * 0.8)'}}><i className="bi bi-play-circle-fill" />
                    12 :54</p>
                </div>
                <p><i className="bi bi-lock-fill" /></p>
              </div>
            </div>
            <div className="d-flex justify-content-between" style={{borderBottom: '1px solid gainsboro'}}>
              <div>
                <p style={{fontWeight: 'bold', fontSize: 'calc(1rem * 0.9)'}}>2. Luyện tập tăng sức bền</p>
                <p className="mb-2" style={{fontSize: 'calc(1rem * 0.8)'}}>0/2 | 50:44</p>
              </div>
              <p><i className="bi bi-caret-up-fill" /></p>
            </div>
            <div style={{padding: '10px 20px'}}>
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{fontSize: 'calc(1rem * 0.8)'}}>Những chấn thương thường gặp, phương pháp tránh chấn
                    thương
                  </p>
                  <p className="mb-3" style={{fontSize: 'calc(1rem * 0.8)'}}><i className="bi bi-play-circle-fill" />
                    12 :54</p>
                </div>
                <p><i className="bi bi-lock-fill" /></p>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{fontSize: 'calc(1rem * 0.8)'}}>4. Những chấn thương thường gặp, phương pháp tránh chấn
                    thương
                  </p>
                  <p className="mb-3" style={{fontSize: 'calc(1rem * 0.8)'}}><i className="bi bi-play-circle-fill" />
                    12 :54</p>
                </div>
                <p><i className="bi bi-lock-fill" /></p>
              </div>
            </div>
            <div className="d-flex justify-content-between" style={{borderBottom: '1px solid gainsboro'}}>
              <div>
                <p style={{fontWeight: 'bold', fontSize: 'calc(1rem * 0.9)'}}>3. Luyện tập tăng sức bền</p>
                <p className="mb-2" style={{fontSize: 'calc(1rem * 0.8)'}}>0/2 | 50:44</p>
              </div>
              <p><i className="bi bi-caret-up-fill" /></p>
            </div>
            <div style={{padding: '10px 20px'}}>
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{fontSize: 'calc(1rem * 0.8)'}}>Những chấn thương thường gặp, phương pháp tránh chấn
                    thương
                  </p>
                  <p className="mb-3" style={{fontSize: 'calc(1rem * 0.8)'}}><i className="bi bi-play-circle-fill" />
                    12 :54</p>
                </div>
                <p><i className="bi bi-lock-fill" /></p>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{fontSize: 'calc(1rem * 0.8)'}}>4. Những chấn thương thường gặp, phương pháp tránh chấn
                    thương
                  </p>
                  <p className="mb-3" style={{fontSize: 'calc(1rem * 0.8)'}}><i className="bi bi-play-circle-fill" />
                    12 :54</p>
                </div>
                <p><i className="bi bi-lock-fill" /></p>
              </div>
            </div>
          </div>
        </div>

        <br/>
        <div className='style17 container-xl mt-5'></div>

        <div>
          <div className="container-xl mt-5" style={{padding: '20px 0'}}>
            <div className="p-2 text-center">
              <h5 className="mb-3 ">Những chấn thương thường gặp, phương pháp tránh chấn thương</h5>
              <p className="mb-5">Giáo án dành cho những runner mới bắt đầu tập chạy, yếu về mặt thể lực sức bền hoặc yếu
                về
                mặt kỹ thuật
                căn bản dẫn tới việc luyện tập khó khăn. Giáo án cơ bản được các giảng viên xây dựng một cách khoa
                học
                nhằm giải quyết các vấn đề của người mới</p>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              <div className="mb-3" style={{backgroundColor: 'white', borderRadius: '2.5px 2.5px', padding: '30px 10px', width: '550px'}}>
                <div className="container main_news_2nd">
                  <div className="d-flex justify-content-between">
                    <p className={`${item == 1 ? 'checkCommentDetailIn' : 'checkCommentDetailOut'} mb-5`} onClick={() => changeItem(1)} style={{cursor: 'pointer'}}>
                      Hỏi &amp; đáp
                    </p>
                    <p className={`${item == 2 ? 'checkCommentDetailIn' : 'checkCommentDetailOut'} mb-5`} onClick={() => changeItem(2)} style={{cursor: 'pointer'}}>Bài tập
                    </p>
                    <p className={`${item == 3 ? 'checkCommentDetailIn' : 'checkCommentDetailOut'} mb-5`} onClick={() => changeItem(3)} style={{cursor: 'pointer'}}>Nhận xét
                      của GV
                    </p>
                    <p className={`${item == 4 ? 'checkCommentDetailIn' : 'checkCommentDetailOut'} mb-5`} onClick={() => changeItem(4)} style={{cursor: 'pointer'}}>Xin tạm
                      hoãn
                    </p>
                  </div>

                 <Comment tital='ok'/>
               
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

export default connect(mapState, mapDispatchToProps)(HocThu);