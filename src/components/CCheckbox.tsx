import { Checkbox, } from 'element-react';
import React from 'react'

interface Props {
    key?: any,
    value: any,
    label: any,
    disabled?: boolean,
    onChange: Function,
    style?: any
}

const CCheckbox = (props: Props) => {  

    return (
        <Checkbox style={props.style} key={props.key} checked={typeof props.value === "string" ? (props.value === "true" ? true : false ) : props.value} disabled={props.disabled} onChange={(e) => {props.onChange(e)}}><b>{props.label}</b></Checkbox>
    )
}

export default CCheckbox;