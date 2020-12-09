import React from 'react'
import Activty from './Activty'
import './Mid.css'
export default function Mid() {
    return (
        <div className="mid">
            <div className="header">
               <div className="header_left">
                    <h1>Hello, User</h1>
                    <h4>Welcome, Back</h4>
               </div>
               <div className="header_right">
                   <div className="searchbar">
                     <span /> 
                     <input placeholder="Seacrh"/>
                   </div>
               </div>

            </div>

            <div className="main_ad">
             <h2>Get your News & Facts <br />  the right way </h2>
            </div>

            <div className="lower_ad">

<div className="flex">
            <div className="top_active">
                <h2>Top Activity</h2>
                <div className="list">
               <Activty no_user="256k" title="Donalad trump" per="50"/>
               <Activty no_user="256k" title="Donalad trump" per="50"/>
               <Activty no_user="256k" title="Donalad trump" per="50"/>
               <Activty no_user="256k" title="Donalad trump" per="50"/>
               </div>
            </div>

   <div>
            <div className="real_app">

            </div>

            <div className="real_app">
            
            <h3 style={{color:"white",textAlign:"center",fontWeight:100}}>Use our Prenium <br /> Feature now </h3>
                        <button className="cards_btn">Get Premnium</button>
                </div>

            </div>
    
            </div>

            </div>
        </div>
    )
}
