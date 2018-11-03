import React from 'react'

export default function Showservice(props) {
    return (
        <div>
            <div className="w3-col l4 m6 12">
                <span className="w3-padding-small" style={{ textAlign: "right" }}>{props.work}</span>
                <span><button className="w3-btn w3-hover-none w3-large w3-padding-small" style={{ outline: "none" }}>×</button></span>
            </div>
        </div>
    )
}
