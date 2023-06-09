import React, { useState } from 'react'
import { connect } from "react-redux";

interface Props {
    content: any,
    
}


const NoiDung = (props: Props) => {  
    const [change, setChange] = useState(true)

    const changeTo = () => {
        setChange(!change)
    }
    return(
        <div>
            <div className={`${change ?'removeContent':'undoRemoveContent'} mb-5`}>
            {props.content}
            </div>
            
            <div className="d-flex justify-content-center align-items-center">
                {change ?
                <span onClick={() => {changeTo()}} style={{cursor: 'pointer'}}><i className="bi bi-caret-down-fill"></i> Xem thêm <i className="bi bi-caret-down-fill"></i></span>
                :
                <span onClick={() => {changeTo()}} style={{cursor: 'pointer'}}><i className="bi bi-caret-up-fill" /> Thu gọn <i className="bi bi-caret-up-fill" /></span>
            }
                
            </div>
        </div>
    
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
};

export default connect(mapState, mapDispatchToProps)(NoiDung);