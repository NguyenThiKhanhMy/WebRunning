import { Cookie } from 'common/Cookie';
import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import CDynamicTableAjax from "components/CDynamicTableAjax";
import roleListViewJson from 'containers/AdminSite/Pages/User/Role/ListView.json';
import { IAjax } from 'common/Models';
interface Props {
       
}

const Home = (props: Props) => {  
    console.log(123)
    const roleListView:any = roleListViewJson;    
    const [ajax, setAjax] = useState<IAjax>({
        url: "http://localhost:5050/api/Sys_Role/Search",
        method: 'post',
        data: { SearchBy: { Query: "", Values: [] }, OrderBy: "" }
    })
    const onChangeTable = (pageInfo:any) => {

    }
    return(
        <section className="section dashboard">
            <div className="row">
                <div className="col-md-4">
                <div className="card info-card sales-card">
                    <div className="card-body">
                    <h5 className="card-title">Tiêu đề lớn <span>tiêu đề nhỏ</span></h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cart" />
                        </div>
                        <div className="ps-3">
                        <h6>150</h6>
                        <span className="small pt-1 fw-bold">150</span> <span className="text-muted small pt-2 ps-1">mô tả</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card info-card revenue-card">
                    <div className="card-body">
                    <h5 className="card-title">Tiêu đề lớn <span>tiêu đề nhỏ</span></h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cart" />
                        </div>
                        <div className="ps-3">
                        <h6>150</h6>
                        <span className="small pt-1 fw-bold">150</span> <span className="text-muted small pt-2 ps-1">mô tả</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card info-card customers-card">
                    <div className="card-body">
                        <h5 className="card-title">Tiêu đề lớn <span>tiêu đề nhỏ</span></h5>
                        <div className="d-flex align-items-center">
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart" />
                            </div>
                            <div className="ps-3">
                            <h6>150</h6>
                            <span className="small pt-1 fw-bold">150</span> <span className="text-muted small pt-2 ps-1">mô tả</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>               
            </div>
            <div className="row">
                <div className="col-md-12">
                    <CDynamicTableAjax 
                        id="test_abc" 
                        onChangeData={(pageInfo:any) => { console.log(pageInfo) }}
                        columnDefs={roleListView.DataGrid.ColumnDefs} 
                        ajax={ajax} />
                </div>
            </div>
        </section>
    )
}
const mapState = ({ ...state }) => ({
    
});
const mapDispatchToProps = {
    
};

export default connect(mapState, mapDispatchToProps)(Home);