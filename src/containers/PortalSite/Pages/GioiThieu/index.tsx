import React from 'react'
import { connect } from "react-redux";
import bg30 from 'assets/img/bg30.png'
import bg35 from 'assets/img/bg35.png'
import bg36 from 'assets/img/bg36.png'
import ava1 from 'assets/img/ava1.png'

interface Props {

}

const GioiThieu = (props: Props) => {  
    return(
      <div>
        <img src={bg30} style={{width: '100%', height: 'auto'}} />

        <div className="d-flex justify-content-center align-items-center mt-2" style={{padding: '20px 0'}}>
          <div className="main_container_fap" style={{width: '55%'}}>
            <iframe id="video" width="100%" height="400px" src="https://www.youtube.com/embed/zgPJMbApf_0" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <h3 className="mt-4" style={{textAlign: 'center', fontWeight: 'bold'}}>HỌC VIỆN ĐĂNG QUANG MARATHON</h3>
            <p className="text-center">"Chạy là đam mê"</p>
            <p className="text-center">Thành công - Tỏa sáng - Khỏe mạnh</p>
            <p className="mt-3" style={{textIndent: '30px', textAlign: 'justify'}}>Học viện Đăng Quang Marathon là đơn vị sáng
              lập, quản lý và
              training cho Hội những người
              chạy Marathon
              (Gọi tắt Team VRC Toàn Quốc). Trong hai năm qua, Học viện Đăng Quang Marathon đã xây dựng mạng lưới các
              Team VRC ở các tỉnh , thành phố lớn gồm Hà Nội, Hồ Chí Minh, Đà Nẵng,..</p>
            <p className="mt-3" style={{textIndent: '30px', textAlign: 'justify'}}>Học viện Đăng Quang Marathon là nơi huấn
              luyện chuyên
              nghiệp và chuẩn căn bản về chạy bộ, bạn sẽ được đào
              tạo từ những trình độ mới bắt đầu xỏ giày chạy bộ, đến đạt được các mục tiêu từ chạy 5km, 10km đến chạy
              Half Marathon 21km trong vòng 2h và chạy Full Marathon 42 km trong vòng 4h.</p>
            <p className="mt-3" style={{textIndent: '30px', textAlign: 'justify'}}>Không chỉ vậy, học viện có những giáo án để
              bạn có thể
              phát triển dựa trên cơ địa của chính mình với mục
              tiêu HM sub 1h10 phút và FM sub 3h đối với những học viên muốn được đào tạo ở ngưỡng đứng bục và Elite.
            </p>
          </div>
        </div>

        <div className="d-flex body_container mt-5" style={{backgroundColor: 'white'}}>
          <div className="d-flex justify-content-center align-items-center body_container_top" style={{width: '50%'}}>
            <div className="w-75">
              <h3 className="text-danger" style={{fontWeight: 'bold'}}>Tôn chỉ đào tạo</h3>
              <ul style={{color: 'gray', textAlign: 'justify'}}>
                <li>Hoạt động vì cộng đồng</li>
                <li>Hướng tới người học và giúp đỡ người mới tiếp cận phương pháp huấn luyện hiệu quả</li>
                <li>Phương pháp tập luyện tích lũy chuẩn căn bản, phát triển và huấn luyện từng nhóm cơ</li>
              </ul>
            </div>
          </div>
          <div style={{width: '50%'}} className="body_container_top">
            <img src={bg35} style={{width: '100%'}} />
          </div>
        </div>

        <div className="d-flex body_container" style={{flexDirection: 'row-reverse', backgroundColor: 'white'}}>
          <div className="d-flex justify-content-center align-items-center body_container_top" style={{width: '50%'}}>
            <div className="w-75">
              <h3 className="text-danger" style={{fontWeight: 'bold'}}>Định hướng</h3>
              <ul style={{color: 'gray', textAlign: 'justify'}}>
                <li>Mở rộng phạm vi dạy học trên toàn quốc</li>
                <li>GIúp đỡ nhiều runner có cơ hội học tập kỹ thuật chạy bộ chuẩn căn bản</li>
                <li>Phát triển mở rộng quy mô và nâng cao chất lượng của Hội nhưng người chạy Marathon Việt Nam
                  (VRC)</li>
              </ul>
            </div>
          </div>
          <div style={{width: '50%'}} className="body_container_top">
            <img src={bg35} style={{width: '100%'}} />
          </div>
        </div>
        <div className="d-flex body_container" style={{backgroundColor: 'white'}}>
          <div className="d-flex justify-content-center align-items-center body_container_top" style={{width: '50%'}}>
            <div className="w-75">
              <h3 className="text-danger" style={{fontWeight: 'bold'}}>Mục tiêu</h3>
              <ul style={{color: 'gray', textAlign: 'justify'}}>
                <li>Đào tạo và phát triển các học viên có tiềm năng đứng bục và sub 3h với FM</li>
                <li>Với team chính là Team Lê Quang cùng với các thành viên đứng bục, xây dựng đội VRC toàn quốc để
                  trở thành CLB mạnh nhất Việt Nam</li>
                <li>Với team chính là Team Lê Quang cùng với các thành viên đứng bục, xây dựng đội VRC toàn quốc để
                  trở thành CLB mạnh nhất Việt Nam</li>
              </ul>
            </div>
          </div>
          <div style={{width: '50%'}} className="body_container_top">
            <img src={bg35} style={{width: '100%'}} />
          </div>
        </div>
        <div className="d-flex body_container" style={{flexDirection: 'row-reverse', backgroundColor: 'white'}}>
          <div className="d-flex justify-content-center align-items-center body_container_top" style={{width: '50%'}}>
            <div className="w-75">
              <h3 className="text-danger" style={{fontWeight: 'bold'}}>Sứ mệnh</h3>
              <ul style={{color: 'gray', textAlign: 'justify'}}>
                <li>Truyền cảm hứng và niềm đam mê chạy bộ</li>
                <li>Xây dựng Việt Nam thành một cộng đồng yêu thể thao</li>
                <li>Giúp người học khỏe mạnh hơn mỗi ngày</li>
              </ul>
            </div>
          </div>
          <div style={{width: '50%'}} className="body_container_top">
            <img src={bg35} style={{width: '100%'}} />
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-2 mb-2" style={{ padding: '30px 0'}}>
          <div className="main_container_fap" style={{width: '55%'}}>
            <h3 className="mt-4 text-danger" style={{textAlign: 'center', fontWeight: 'bold'}}>HỌC VIỆN ĐĂNG QUANG MARATHON
            </h3>
            <p className="text-center" style={{fontWeight: 'bold'}}>Học viện xây dựng phương pháp huấn luyện tiếp cận với nhu
              cầu từng nhóm học viên</p>
            <br className="mt-3" style={{textAlign: 'center'}} />Trong những năm qua, Đăng Quang Marathon đã
            tiến hành đào tạo chạy bộ trực tuyến rất hiệu quả, đã kết nối với người học từ các vùng đất xa xôi, đến
            các thành phố lớn như Hà Nội, HCM, Đà Nẵng, Cần Thờ và các vùng đất Tây Nguyên như Gia Lai, Lâm Đồng hay
            nhưng nơi như Hà Giang địa đầu của Tổ Quốc.<br />
            Bên cạnh đó, giáo an đã được một số người VN ở nước ngoài học
            tập, đây là một sự khích lệ lớn vì nó đã có tính lan tỏa, không bị giới hạn bởi không gian, thời gian và
            cách xa về địa lý.
            <p />
            <p className="mt-3" style={{textAlign: 'center'}}>Có nhiều người học đã giành được rất nhiều các thành tích tốt
              trong giải đâu và một số người tập đã đứng bục cao nhất trong các giải đã tham gia, điều đó minh chứng
              cho phương pháp huấn luyện phù hợp của Đăng Quang Marathon.
            </p>
            <p className="mt-3" style={{textAlign: 'center'}}>Đối tượng người học là những người đi làm yếu sức bền, cơ xương
              khớp cứng, giáo án sẽ có đầy đủ các bài tập từ sức bên, đến tập nhóm cơ và tốc độ để người tập đạt hiệu
              quả cao nhất. Với giáo án tập tích lũy, tính điểm rơi chuẩn cho các giải là sự khác biệt lớn nhất của
              Đăng Quang Marathon so với các đơn vị dạy chạy bộ tại Việt Nam.
            </p>
            <p className="mt-3" style={{textAlign: 'center'}}>Trong quá trình phát triển Đăng Quang Marathon luôn mở rộng xây
              dựng các môn thể thao mới như Ironman(Bơi, Đạp, Chạy), Aquathlon(Bơi và chạy), Duathlon(Chạy bộ và đạp
              xe) để bắt kịp với tốc độ phát triển của thể thao nước nhà cũng như nắm bắt thị hiếu của người chơi thể
              thao cần một trung tâm chuyên nghiệp để đào tạo bài bản ngay từ khi mới bắt đầu tập luyện. Hãy đễn với
              chúng tôi để trải nghiệm giáo dục trực tuyến về chạy bộ cũng như học trực tiếp cùng huấn luyện viên.
            </p>
          </div>
        </div>

        <div className='style17 container-xl'></div>

        <div className="d-flex justify-content-center align-items-center mt-2 mb-2">
          <div className="main_container_fap" style={{width: '55%'}}>
            <h3 className="mt-4 text-danger" style={{textAlign: 'center', fontWeight: 'bold'}}>HOẠT ĐỘNG NỔI BẬT
            </h3>
            <p className="mt-3" style={{textAlign: 'center'}}>Đăng Quang Marathon đã training rất nhiều nơi trên lãnh thổ
              Việt Nam, kể cả training trực tiếp lẫn dạy học trực tuyến, với phương châm đào tạo chạy bộ chuẩn căn bản
              tránh chấn thương. Trong
              nhiều năm qua, chúng tôi đã liên tục mở các khóa học online, đối tượng người học ở các tỉnh
              thành trong cả nước, thông qua hoạt động training trực tuyến chúng tôi đã đạt được những bước
              tiến vượt bậc và thu về những tiến bộ của người học và tạo được thế đứng trong giới chạy bộ
              phong trào Việt Nam
            </p>
            <p className="mt-3 mb-5" style={{textAlign: 'center'}}>Đội ngũ Team Coach và Leader luôn nỗ lực tạo nên những nét
              riêng biệt bằng các buổi training thiết kế theo những mục tiêu cụ thể:
            </p>
            <div className="card mt-5" style={{maxWidth: '100%'}}>
              <div className="row g-0 p-2">
                <div className="col-md-4" style={{padding: '2px'}}>
                  <img src={bg36} className="img-fluid rounded-start" alt="..." width='100%'/>
                </div>
                <div className="col-md-8">
                  <div className="card-body" style={{padding: '2px', marginLeft: '10px'}}>
                    <p style={{fontSize: 'calc(1rem * .8)'}} className="text-muted"><i className="bi bi-calendar-range-fill" /> 15/12/2022</p>
                    <h5 className="card-title" style={{margin: 0}}>KỸ THUẬT CHẠY TRAIL: CHẠY DỐC VÀ
                      LEO NÚI</h5>
                    <p className="card-text"><small className="text-muted"><i className="bi bi-person" /> Nguyễn Thành
                        Long</small></p>
                    <p className="card-text teat mt-2"><small className="text-muted" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore blanditiis quos distinctio libero magnam! Sed perferendis perspiciatis iure, nobis temporibus pariatur molestiae nostrum, blanditiis ipsa tenetur, veniam delectus! Molestias.</small></p>
                    <div className='d-flex justify-content-end align-items-center l'>
                    <button className="header_btn bg-danger text-light mt-2" style={{width: '120px'}}>Chi
                      tiết</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-5" style={{maxWidth: '100%'}}>
              <div className="row g-0 p-2">
                <div className="col-md-4" style={{padding: '2px'}}>
                  <img src={bg36} className="img-fluid rounded-start" alt="..." width='100%'/>
                </div>
                <div className="col-md-8">
                  <div className="card-body" style={{padding: '2px', marginLeft: '10px'}}>
                    <p style={{fontSize: 'calc(1rem * .8)'}} className="text-muted"><i className="bi bi-calendar-range-fill" /> 15/12/2022</p>
                    <h5 className="card-title" style={{margin: 0}}>KỸ THUẬT CHẠY TRAIL: CHẠY DỐC VÀ
                      LEO NÚI</h5>
                    <p className="card-text"><small className="text-muted"><i className="bi bi-person" /> Nguyễn Thành
                        Long</small></p>
                    <p className="card-text teat mt-2"><small className="text-muted" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore blanditiis quos distinctio libero magnam! Sed perferendis perspiciatis iure, nobis temporibus pariatur molestiae nostrum, blanditiis ipsa tenetur, veniam delectus! Molestias.</small></p>
                    <div className='d-flex justify-content-end align-items-center l'>
                    <button className="header_btn bg-danger text-light mt-2" style={{width: '120px'}}>Chi
                      tiết</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-5" style={{maxWidth: '100%'}}>
              <div className="row g-0 p-2">
                <div className="col-md-4" style={{padding: '2px'}}>
                  <img src={bg36} className="img-fluid rounded-start" alt="..." width='100%'/>
                </div>
                <div className="col-md-8">
                  <div className="card-body" style={{padding: '2px', marginLeft: '10px'}}>
                    <p style={{fontSize: 'calc(1rem * .8)'}} className="text-muted"><i className="bi bi-calendar-range-fill" /> 15/12/2022</p>
                    <h5 className="card-title" style={{margin: 0}}>KỸ THUẬT CHẠY TRAIL: CHẠY DỐC VÀ
                      LEO NÚI</h5>
                    <p className="card-text"><small className="text-muted"><i className="bi bi-person" /> Nguyễn Thành
                        Long</small></p>
                    <p className="card-text teat mt-2"><small className="text-muted" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore blanditiis quos distinctio libero magnam! Sed perferendis perspiciatis iure, nobis temporibus pariatur molestiae nostrum, blanditiis ipsa tenetur, veniam delectus! Molestias.</small></p>
                    <div className='d-flex justify-content-end align-items-center l'>
                    <button className="header_btn bg-danger text-light mt-2" style={{width: '120px'}}>Chi
                      tiết</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-5" style={{maxWidth: '100%'}}>
              <div className="row g-0 p-2">
                <div className="col-md-4" style={{padding: '2px'}}>
                  <img src={bg36} className="img-fluid rounded-start" alt="..." width='100%'/>
                </div>
                <div className="col-md-8">
                  <div className="card-body" style={{padding: '2px', marginLeft: '10px'}}>
                    <p style={{fontSize: 'calc(1rem * .8)'}} className="text-muted"><i className="bi bi-calendar-range-fill" /> 15/12/2022</p>
                    <h5 className="card-title" style={{margin: 0}}>KỸ THUẬT CHẠY TRAIL: CHẠY DỐC VÀ
                      LEO NÚI</h5>
                    <p className="card-text"><small className="text-muted"><i className="bi bi-person" /> Nguyễn Thành
                        Long</small></p>
                    <p className="card-text teat mt-2"><small className="text-muted" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore blanditiis quos distinctio libero magnam! Sed perferendis perspiciatis iure, nobis temporibus pariatur molestiae nostrum, blanditiis ipsa tenetur, veniam delectus! Molestias.</small></p>
                    <div className='d-flex justify-content-end align-items-center l'>
                    <button className="header_btn bg-danger text-light mt-2" style={{width: '120px'}}>Chi
                      tiết</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='style17 container-xl mt-5' ></div>

        <div className="d-flex justify-content-center align-items-center" style={{padding: '20px 0'}}>
          <div className="main_container_fap" style={{width: '75%'}}>
            <h3 className="mt-2 text-danger" style={{textAlign: 'center', fontWeight: 'bold'}}>REVIEW TỪ HỌC VIÊN CŨ
            </h3>
            <div className="d-flex justify-content-between review_bottom_main mt-5">
              <div className="review_bottom_main_sp" style={{width: '49%'}}>
                <div className="review_card mb-4">
                  <div className=" d-flex align-items-center mb-4">
                    <img src={ava1} />
                    <div style={{marginLeft: '15px'}}>
                      <p style={{fontWeight: 'bold'}}>Nguyễn Văn A</p>
                      <p className="text-danger" style={{fontSize: 'calc(1rem*0.8)'}}>Học viên giáo án chạy cho
                        người
                        mới</p>
                    </div>
                  </div>
                  <p style={{textAlign: 'justify'}}>
                    “Tôi là một nhân viên văn phòng với nhiều vấn đề về sức khỏe, mới đầu tôi thậm chí không thể
                    hoàn thành quãng đường 500m vì thể lực yếu kém nhưng sau 6 tháng học tập và rèn luyện cùng
                    với sự hỗ trợ nhiệt tình tới từ các giảng viên của học viện, tôi đã có thể hoàn thành quãng
                    đường 10km và sức khỏe của tôi đã được cải thiện rất nhiều”
                  </p>
                </div>
                <div className="review_card mb-4">
                  <div className=" d-flex align-items-center mb-4">
                    <img src={ava1} />
                    <div style={{marginLeft: '15px'}}>
                      <p style={{fontWeight: 'bold'}}>Nguyễn Văn B</p>
                      <p className="text-danger" style={{fontSize: 'calc(1rem*0.8)'}}>Học viên Giáo án chạy Trail
                      </p>
                    </div>
                  </div>
                  <p style={{textAlign: 'justify'}}>
                    “Tôi là một nhân viên văn phòng với nhiều vấn đề về sức khỏe, mới đầu tôi thậm chí không thể
                    hoàn thành quãng đường 500m vì thể lực yếu kém nhưng sau 6 tháng học tập và rèn luyện cùng
                    với sự hỗ trợ nhiệt tình tới từ các giảng viên của học viện, tôi đã có thể hoàn thành quãng
                    đường 10km và sức khỏe của tôi đã được cải thiện rất nhiều”
                  </p>
                </div>
              </div>
              <div className="review_bottom_main_sp" style={{width: '49%'}}>
                <div className="review_card mb-4">
                  <div className=" d-flex align-items-center mb-4">
                    <img src={ava1}/>
                    <div style={{marginLeft: '15px'}}>
                      <p style={{fontWeight: 'bold'}}>Nguyễn Văn A</p>
                      <p className="text-danger" style={{fontSize: 'calc(1rem*0.8)'}}>Học viên Giáo án chỉnh dáng
                      </p>
                    </div>
                  </div>
                  <p style={{textAlign: 'justify'}}>
                    “Dáng chạy và hệ cơ xương của tôi đã được cải thiện rất nhiều nhờ sự giúp đỡ của các giảng
                    viên Học Viện Đăng Quang.”
                  </p>
                </div>
                <div className="review_card mb-4">
                  <div className=" d-flex align-items-center mb-4">
                    <img src={ava1} />
                    <div style={{marginLeft: '15px'}}>
                      <p style={{fontWeight: 'bold'}}>Nguyễn Văn A</p>
                      <p className="text-danger" style={{fontSize: 'calc(1rem*0.8)'}}>Học viên Giáo án Combo 3 môn
                      </p>
                    </div>
                  </div>
                  <p style={{textAlign: 'justify'}}>
                    “3 môn kết hợp là môn thể thao cực kỳ thử thách đối với các VĐV, tuy nhiên nhờ giáo trình
                    khoa học cùng với lời khuyên về dinh dưỡng của thầy Long, tôi đã hoàn thành được chặng đua
                    Bơi - Chạy - Đạp xe.”
                  </p>
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

export default connect(mapState, mapDispatchToProps)(GioiThieu);