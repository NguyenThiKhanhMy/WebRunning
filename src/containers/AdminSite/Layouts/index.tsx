import { AppName } from 'common/Enums';
import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import Footer from './Footer';
import Header from './Header';
import Breadcrumb from 'components/ABreadcrumb';
import Sidebar from './Sidebar';
interface Props {
    children: React.ReactNode
}

const Index = (props: Props) => {  
    return(
        <>
            <Header />            
            <Sidebar />          
            <main id="main" className="main">
                <Breadcrumb />
                {props.children}
            </main>
            <Footer />
        </>
    )
}
export default Index;