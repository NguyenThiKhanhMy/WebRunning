import React from 'react'
import CButton from './CButton';
import { IActionDefs } from 'common/Models';
interface Props {
    actionDefs: any,
    actions: any
}

const CDynamicButton = (props: Props) => {  
    const ButtonsRender = () => {
        let ActionDefs:IActionDefs[] = props.actionDefs;
        let Actions = props.actions;        
        let html = []
        const onAction = (action:string) => {            
            Actions[action]();
        }
        for(let i = 0;i < ActionDefs.length;i++)
        {
            html.push(<CButton title={ActionDefs[i].Title} titleTooltip={ActionDefs[i].TitleTooltip} key={ActionDefs[i].Key} icon={ActionDefs[i].Icon} onClick={() => { onAction(ActionDefs[i].Action) }} />);
        }
        return html;
    }
    return (
        <>
            {ButtonsRender()}
        </>
    )
}

export default CDynamicButton;