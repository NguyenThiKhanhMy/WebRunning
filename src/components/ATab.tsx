import { Tabs } from 'element-react';
import React from 'react'
import { connect } from "react-redux";
interface Props {
    key: string,
    activeName: string,
    tabsPanel: ITabPanel[],
    onTabClick?: Function
}
interface ITabPanel {
    label: string,
    name: string, 
    panel: React.ReactNode
}
const ATab = (props: Props) => {  
    const TabsPanelRender = () => {
        let tabsPanel = [];
        for(let i = 0;i < props.tabsPanel.length;i++)
        {
            tabsPanel.push(<Tabs.Pane key={i} label={props.tabsPanel[i].label} name={props.tabsPanel[i].name}>{props.tabsPanel[i].panel}</Tabs.Pane>)
        }
        return tabsPanel;
    }    
    return (
        <Tabs key={props.key} type="border-card" activeName={props.activeName} onTabClick={ (tab) => props.onTabClick(tab) }>
            {TabsPanelRender()}
        </Tabs>
    )
}
const mapState = ({ ...state }) => ({
    
});
const mapDispatchToProps = {
    
};

export default ATab;