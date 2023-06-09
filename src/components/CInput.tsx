import { Input } from 'element-react';
import React from 'react'

interface Props {
    value: any,
    type?: string,
    size?: any,
    placeholder?: string,
    readOnly?: boolean,
    disabled?: boolean,
    autoFocus?: boolean,
    onChange: Function,
    rows?: any
}

const CInput = (props: Props) => {  

    return (
        <Input  
                rows = {props.rows? props.rows: 4}
                autoFocus = {props.autoFocus == true ? true : false}
                readOnly={props.readOnly == true ? true : false}
                disabled={props.disabled == true ? true : false}
                size={props.size ? props.size : 'small'}
                type={props.type ? props.type : 'text'}
                placeholder={props.placeholder} 
                onChange={(e) => {props.onChange(e)}}
                value={props.value} />
    )
}

export default CInput;