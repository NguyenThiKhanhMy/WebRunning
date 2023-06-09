import { Notification } from 'element-react';
import React, { forwardRef, useImperativeHandle } from 'react'

interface Props {    
    
}

const CNotification = forwardRef((props: Props, ref) => {  
    useImperativeHandle(ref, () => ({
      showNotification: (type: String, message: String) => {ShowNotification(type, message)}
    }));
    const SuccessNotification = (message:string) => {        
        Notification({
          title: 'Thành công',
          message: message,
          type: 'success'
        });  
    }
    const WarningNotification = (message:string) => {
        Notification({
          title: 'Cảnh báo',
          message: message,
          type: 'warning'
        });  
    } 
    const InfoNotification = (message:string) => {
        Notification({
          title: 'Thông tin',
          message: message,
          type: 'info'
        });  
    }      
    const ErrorNotification = (message:string) => {
        Notification({
          title: 'Lỗi',
          message: message,
          type: 'error'
        });  
    }           
    const ShowNotification = (type:any, message:any) => {      
      switch(type)
      {
        case 'success':
          SuccessNotification(message); return;
        case 'warning':
          WarningNotification(message); return; 
        case 'info':
          InfoNotification(message); return;  
        case 'error':
          ErrorNotification(message); return;     
        default:
          return;                         
      }
    }
    return(
        <></>
    )
});

export default CNotification;