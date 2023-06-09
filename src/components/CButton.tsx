import { Button, Tooltip } from 'element-react';
import React, { useState } from 'react'

interface Props {
    title?: string,
    titleTooltip?: string,
    onClick?: any,
    size?: any,
    type?: any,
    icon?: any,
    isFullWidth?: boolean,
    isDisabled?: boolean,
    className?: any,
    style?: any
}

const CButton = (props: Props) => {  
    const [delayClick, setDelayClick] = useState(false);
    const ButtonRender = () => {
        return  <Button               
                    disabled={(props.isDisabled == true ? true : false)}       
                    style={props.style ? props.style : ""}          
                    size={props.size ? props.size : 'small'} 
                    className= {(props.isFullWidth == true ? "w-100":"") + " " + props.className + " "} 
                    type={props.type ? props.type : 'primary'}
                    icon={props.icon ? props.icon: ''}
                    loading={delayClick}
                    onClick={() => { 
                        props.onClick(); 
                        setDelayClick(true);
                        setTimeout(
                            () => { setDelayClick(false); }, 
                            500
                        );
                    }}>{" " + props.title}</Button>   
    }
    const WrapperButtonRender = (titleTooltip: string) => {
        if(titleTooltip)
        {
            return <Tooltip className="item" effect="dark" content={props.titleTooltip} placement="top">{ButtonRender()}</Tooltip>   
        }
        return <>{ButtonRender()}</>;
    }
    return <>{WrapperButtonRender(props.titleTooltip)}</>
}

export default CButton;