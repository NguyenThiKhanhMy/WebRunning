import React, { useEffect, useMemo, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from 'containers/AdminSite/Pages/Home';
import { Config, Log } from 'containers/AdminSite/Pages/System';
import { Account, Organ, Permission, Role } from 'containers/AdminSite/Pages/User';
import { Category0, Category1 } from 'containers/AdminSite/Pages/Category';
import admin_config from 'assets/json/admin_config.json'
import Page404 from 'containers/AdminSite/Pages/Page404';
import Profile from 'containers/AdminSite/Pages/Profile';
import Setting from 'containers/AdminSite/Pages/Setting';
import Support from 'containers/AdminSite/Pages/Support';
import { Cookie } from 'common/Cookie';
import { IUserInfo } from 'common/Models';
import Login from 'containers/AdminSite/Pages/Login';
import RestorePassword from 'containers/AdminSite/Pages/RestorePassword';
import Signup from 'containers/AdminSite/Pages/Signup';
import LayoutAdmin from 'containers/AdminSite/Layouts';
import Page401 from 'containers/AdminSite/Pages/Page401';
import Menu from 'containers/AdminSite/Pages/User/Menu';
interface Props {
    Apps: any
}

const AdminRoute = (props: Props) => {
    const LayoutAdminPaths:any = [];
    const GetPage = (code:String) => {
        switch(code)
        {
            case "Home":
                return <Home />;
            case "Config":
                return <Config />;  
            case "Log":
                return <Log />;
            case "Account":
                return <Account />;
            case "Organ":
                return <Organ />;
            case "Menu":
                return <Menu />;
            case "Permission":
                return <Permission />;
            case "Role":
                return <Role />; 
            case "Category0":
                return <Category0 />;
            case "Category1":
                return <Category1 />;  
            //
            case "Profile":
                return <Profile />; 
            case "Setting":
                return <Setting />;
            case "Support":
                return <Support />; 
            case "Page401":
                return <Page401 />;
            case "Page404":
                return <Page404 />; 
            case "Login":
                return <Login />;
            case "Signup":
                return <Signup />;     
            case "RestorePassword":
                return <RestorePassword />;  
            default:
                return <Page404 />;                                                                                                         
        }        
    }

    const IsRouteOfUser = (route:any) => {   
        let userInfo:IUserInfo = JSON.parse(Cookie.getCookie("UserInfo"));     
        if(userInfo && userInfo.UserName == "admin") return true;   
        if(userInfo)
        {
            for(let i = 0;i < userInfo.Menus.length;i++)
            {
              if(userInfo.Menus[i] == route.code)
              {
                return true
              }
            }
        }
        return false;
    }
    const RoutesRender =(isLayout: Boolean) => {
        let routesHtml:any = [];
        let routesConfig:any = admin_config.routes;
        for(let i = 0;i < routesConfig.length;i++)
        {
            if(!IsRouteOfUser(routesConfig[i]) && routesConfig[i].isMenu) {
                continue;
            }
            if(isLayout && isLayout == routesConfig[i].isLayout) {
                LayoutAdminPaths.push(routesConfig[i].url)
                routesHtml.push(<Route key={routesConfig[i].code} path={routesConfig[i].url} component={() => GetPage(routesConfig[i].code)} />)    
            }
            if(!isLayout && isLayout == routesConfig[i].isLayout) {
                routesHtml.push(<Route key={routesConfig[i].code} path={routesConfig[i].url} component={() => GetPage(routesConfig[i].code)} />)
            }
        }
        return routesHtml;
    }
    return (
        <div id="app-admin">
            <Route path={LayoutAdminPaths}>
                <LayoutAdmin>
                    <Switch>
                        {RoutesRender(true)}
                    </Switch>
                </LayoutAdmin>
            </Route>
            {RoutesRender(false)}
        </div>
    )
}
const mapState = ({ ...state }) => ({
    Apps: state.apps
});
const mapDispatchToProps = {
    
};

export default connect(mapState, mapDispatchToProps)(AdminRoute);