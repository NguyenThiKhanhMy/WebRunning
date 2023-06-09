import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
interface Props {
       
}

const Log = (props: Props) => {  
    return(
        <>
            <h1>Xem log</h1>
        </>
    )
}
const mapState = ({ ...state }) => ({
    
});
const mapDispatchToProps = {
    
};

export default connect(mapState, mapDispatchToProps)(Log);