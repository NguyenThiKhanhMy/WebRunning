import React from 'react'

interface Props {
    title: string,
    children?: React.ReactNode,
    buttonGroups?: React.ReactNode
}

const ACard = (props: Props) => {  

    return (
        <div className="card">
            <div className="card-header">{props.title}
                <div className="button-groups">
                    {props.buttonGroups?props.buttonGroups:<></>}
                </div>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>    
    )
}

export default ACard;