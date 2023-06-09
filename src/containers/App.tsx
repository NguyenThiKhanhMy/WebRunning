
import React, { useEffect, useState } from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'assets/css/global.css';
import 'assets/scss/admin.scss';
import 'assets/scss/portal.scss';
import { connect } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import PortalRoute from 'routes/PortalRoute';
import AdminRoute from 'routes/AdminRoute';
import admin_config from 'assets/json/admin_config.json';
import portal_config from 'assets/json/portal_config.json'
import TrangChu from './PortalSite/Pages/TrangChu';
import LayoutPortal from 'containers/PortalSite/Layouts';
interface Props {
    Apps: any
}

const App = (props: Props) => {  
    let path = window.location.pathname;
    useEffect(() => {
        if(path == "/")
        {
            window.location.href = "trang-chu";
        }
    }, [path])
    const RoutesRender = () => {
        let routes:any = [];
        let adminRoutes = admin_config.routes;
        let portalRoutes = portal_config.routes;
        for(let i = 0;i < portalRoutes.length;i++)
        {
            if(path == portalRoutes[i].url)
            {
                routes.push(<PortalRoute />);
                break;
            }
        }
        for(let i = 0;i < adminRoutes.length;i++)
        {
            if(path == adminRoutes[i].url)
            {
                routes.push(<AdminRoute />);
                break;
            }
        }
        return routes;
    }
    return (         
        <Router> 
            <Switch>      
                {RoutesRender()}
            </Switch>                                
        </Router> 
    )
}
const mapState = ({ ...state }) => ({
    Apps: state.apps
});
const mapDispatchToProps = {
    
};

export default connect(mapState, mapDispatchToProps)(App);