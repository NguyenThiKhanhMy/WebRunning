import { MessageBox  } from 'element-react';
import React, { forwardRef, useImperativeHandle } from 'react'

interface Props {  
  Title: string,  
  Ok: any,
  Canel: any   
}

const CConfirm = forwardRef((props: Props, ref) => {  
    useImperativeHandle(ref, () => ({
      showConfirm: (type: String, message: String) => {showConfirm()}
    }));
    const showConfirm = () => {
      MessageBox.confirm(props.Title, 'Cảnh báo', {
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Hủy',
        type: 'warning'
      }).then(() => {
        props.Ok();
      }).catch(() => {
        props.Canel();
      });
    }
    return(
        <></>
    )
});

export default CConfirm;