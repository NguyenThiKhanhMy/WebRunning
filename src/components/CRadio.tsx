import { Radio } from 'element-react';
import React from 'react'

interface Props {
    key?: any,
    value: any,
    options: any,
    keyOptions?: any,
    disabled?: boolean,
    InlineBlock?: boolean,
    onChange: Function
}

const CRadio = (props: Props) => {  
    const OptionRender = () => {
        let options = [];
        let propLabel = "label";
        let propValue = "value";
        if(props.options == null || props.options.length == 0) return<></>;        
        if(props.keyOptions)
        {            
            propLabel = props.keyOptions.label;
            propValue = props.keyOptions.value;                        
        }        
        for(let i = 0;i < props.options.length;i++)
        {
            options.push(<Radio style={props.InlineBlock == true ? null:{marginLeft: 0}} key={i} value={props.options[i][propValue]}>{props.options[i][propLabel]}</Radio>)
        }
        return options;
    }      
    return (
        <Radio.Group value={props.value} onChange={(e) => {props.onChange(e)}} style={props.InlineBlock == true ? null:{display: "grid"}}>
            {OptionRender()}
        </Radio.Group>
    )
}

export default CRadio;