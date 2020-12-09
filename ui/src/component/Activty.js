import React from 'react'
import './Activity.css'
export default function Activty({title,no_user,per}) {
    return (
        <div className="activity">
            <div><h5>{title}</h5>
            <h6>{no_user} Users</h6></div>

            <div className="circle">
            <h5>{per}%</h5>
            </div>
            
        </div>
    )
}
