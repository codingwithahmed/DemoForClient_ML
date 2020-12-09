import './SideBar.css'
import React, { Component } from 'react'

export default class SideBar extends Component {

    constructor(props){
        super(props);
        this.wrapperref = React.createRef();
        this.state = {
            
        }   

    }


    handleclick(){
        const wrapper = this.wrapperref.current;
        wrapper.classList.toggle('t_1')
    }

    render() {
        return (
<div className="sidebar">

                <div className="logo">
                   <h1>Adan</h1>
                </div>

                <div  className="menu">
                    <div ref={this.wrapperref} onClick={() => this.handleclick()} className="menu_item">
                   <h3>Dashoard</h3>
                   </div>

                   <div className="menu_item">
                   <h3>Cards</h3>
                   </div>

                   <div className="menu_item">
                   <h3>Prenium</h3>
                   </div>

                   <div className="menu_item">
                   <h3>Profile</h3>
                   </div>

                   <div className="menu_item">
                   <h3>Setting</h3>
                   </div>

                </div>

                <div className="cards">
                    <div className="card">
                        <h3 style={{color:"white",textAlign:"center",fontWeight:100}}>Use our Prenium <br /> Feature now </h3>
                        <button className="cards_btn">Get Prenium</button>
                    </div>
              
                     
                </div>
                
        </div>
        )
    }
}

