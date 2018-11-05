import React from 'react'
import ShowService from './showservices'
import { changeAddService, addService } from '../../../actions/maid';

export default function Service(props) {
    return (
        <div className="w3-cell w3-cell-middle w3-mobile">
            <div className="w3-card w3-margin w3-red" style={{ height: "250px", width: "100%", minWidth: "200px", overflowY: "auto" }}>
                <p className="w3-xxlarge w3-center">Services Pending</p>
                <ul>
                    {
                        props.pending.map((val, i) => {
                            return (
                                <li className="w3-large" key={i}>Location: {val.location} <br />Service  : {val.service}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="w3-card-2 w3-margin w3-center w3-display-container" style={{ minHeight: "200px", width: "100%", minWidth: "200px" }}>
                <p className="w3-xlarge w3-text-blue">Services</p>
                <div className="w3-row" style={{ minWidth: "90%", overflowY : "auto"}}>
                    {
                        props.services.map((val) => {
                            return <ShowService key={val.id} id={val.id} work={val.service_name} />
                        })
                    }
                </div>
                <div className="w3-container w3-center w3-padding w3-display-bottommiddle w3-hide-small w3-hide-medium" style={{width : "100%"}}>
                    <select className="w3-select w3-margin" style={{outline : "none", width : "50%"}} value={props.add} onChange={(e)=>{changeAddService(e.target.value)}}>
                        <option>Cleaning</option>
                        <option>Baby Sitting</option>
                        <option>Washing Clothes</option>
                        <option>Washing Utensils</option>
                        <option>Gardening</option>
                    </select>
                    <button className="w3-button w3-green w3-circle w3-margin w3-large" style={{ outline: "none" }} onClick={()=>{addService()}}>+</button>
                    <span>Add</span>
                </div>
                <div className="w3-container w3-center w3-padding w3-hide-large" style={{width : "100%"}}>
                    <select className="w3-select w3-margin" style={{outline : "none", width : "50%"}} value={props.add} onChange={(e)=>{changeAddService(e.target.value)}}>
                        <option>Cleaning</option>
                        <option>Baby Sitting</option>
                        <option>Washing Clothes</option>
                        <option>Washing Utensils</option>
                        <option>Gardening</option>
                    </select>
                    <button className="w3-button w3-green w3-circle w3-margin w3-large" style={{ outline: "none" }} onClick={()=>{addService()}}>+</button>
                </div>
            </div>
        </div>
    )
}
