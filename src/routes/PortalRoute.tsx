import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import LayoutPortal from 'containers/PortalSite/Layouts';
import TrangChu from 'containers/PortalSite/Pages/TrangChu';
import GioiThieu from 'containers/PortalSite/Pages/GioiThieu';
import ChinhDangChayBo from 'containers/PortalSite/Pages/ChinhDangChayBo';
import HoTro from 'containers/PortalSite/Pages/HoTro';
import KhoaHoc from 'containers/PortalSite/Pages/KhoaHoc';
import KienThuc from 'containers/PortalSite/Pages/KienThuc';
import KhoaHocChiTiet from 'containers/PortalSite/Pages/KhoaHoc/ChiTiet';
import KhoaHocThu from 'containers/PortalSite/Pages/KhoaHoc/HocThu';
import portal_config from 'assets/json/portal_config.json'
import ChiTiet from 'containers/PortalSite/Pages/KienThuc/ChiTiet';
import ThanhToan from 'containers/PortalSite/Pages/ThanhToan';
import GioHang from 'containers/PortalSite/Pages/GioHang';
import DangNhap from 'containers/PortalSite/auth/DangNhap';
import DangKy from 'containers/PortalSite/auth/DangKy';
interface Props {
       
}

const PortalRoute = (props: Props) => {  
    const LayoutPortalPaths:any = [];
    const GetPage = (code:String) => {
        switch(code)
        {
            case "TrangChu":
                return <TrangChu />;
            case "GioiThieu":
                return <GioiThieu />;
            case "KhoaHoc":
                return <KhoaHoc />;
            case "KienThuc":
                return <KienThuc />;
            case "ChinhDangChayBo":
                return <ChinhDangChayBo />;
            case "HoTro":
                return <HoTro />;
            case "KhoaHocChiTiet":
                return <KhoaHocChiTiet />;
            case "KhoaHocThu":
                return <KhoaHocThu />;
            case "KienThuChiTiet":
                return <ChiTiet />;
            case "ThanhToan":
                return <ThanhToan />;
            case "GioHang":
                return <GioHang />;
            case "DangNhap":
                return <DangNhap />;
            case "DangKy":
                return <DangKy />;
        
            default:
                return <></>;                                                                                                         
        }        
    }
    const IsRouteOfUser = (route:any) => {   

        return false;
    }
    const RoutesRender =(isLayout: Boolean) => {
        let routesHtml:any = [];
        let routesConfig:any = portal_config.routes;
        for(let i = 0;i < routesConfig.length;i++)
        {
            if(!IsRouteOfUser(routesConfig[i]) && routesConfig[i].isMenu) {
                continue;
            }
            if(isLayout && isLayout == routesConfig[i].isLayout) {
                LayoutPortalPaths.push(routesConfig[i].url)
                routesHtml.push(<Route key={routesConfig[i].code} path={routesConfig[i].url} component={() => GetPage(routesConfig[i].code)} />)    
            }
            if(!isLayout && isLayout == routesConfig[i].isLayout) {
                routesHtml.push(<Route key={routesConfig[i].code} path={routesConfig[i].url} component={() => GetPage(routesConfig[i].code)} />)
            }
        }
        
        return routesHtml;
    }
    return(
        <div id="app-portal">
            <Route path={LayoutPortalPaths}>
                <LayoutPortal>
                    <Switch>
                        {RoutesRender(true)} 
                    </Switch>
                </LayoutPortal>
            </Route>
            {RoutesRender(false)}
        </div>
    )
}
const mapState = ({ ...state }) => ({
    
});
const mapDispatchToProps = {
    
};

export default connect(mapState, mapDispatchToProps)(PortalRoute);