import React from 'react'
import loaderImg from '../../images/loading/loading.gif'

export default function Loader() {
    return (
        <div className="w3-container w3-display-container" style={{ height: window.innerHeight }}>
            <div className="w3-display-middle w3-center">
                <img src={loaderImg} width={"100%"} style={{minWidth : "70px"}} alt="Loading"/>
                <div className="ball-pulse">
                    <div style={{ backgroundColor: "black" }}></div>
                    <div style={{ backgroundColor: "blue" }}></div>
                    <div style={{ backgroundColor: "black" }}></div>
                </div>
            </div>
        </div >
    )
}
