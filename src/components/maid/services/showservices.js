import React from 'react'
import { deleteService } from '../../../actions/maid';

export default function Showservice(props) {
    return (
        <div>
            <div className="w3-col l4 m12 12">
                <span className="w3-padding-small" style={{ textAlign: "right" }}>{props.work}</span>
                <span><button className="w3-btn w3-hover-none w3-large w3-padding-small" style={{ outline: "none" }} onClick={()=>{deleteService(props.id)}}>×</button></span>
            </div>
        </div>
    )
}
