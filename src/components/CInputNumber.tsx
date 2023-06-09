import { Input, InputNumber } from 'element-react';
import React from 'react'

interface Props {
    key?: any,
    value: any,
    size?: any,
    onChange: Function
    disabled?: any
}

const CInputNumber = (props: Props) => {  
    return (
        <InputNumber  key={props.key}      
                disabled={props.disabled == true ? true : false}                          
                size={props.size ? props.size : 'small'}                                
                onChange={(e) => {props.onChange(e)}}
                defaultValue={props.value}
                value={props.value} />
    )
}

export default CInputNumber;