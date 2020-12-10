import './SideBar.css'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class SideBar extends Component {

    constructor(props){
        super(props);
        this.wrapperref = React.createRef();
        this.link2 = React.createRef();
        this.state = {
            
        }   

    }


    handleclick(){
        const wrapper = this.wrapperref.current;
        wrapper.classList.toggle('t_1')
    }
    handleclicklink(){
        const wrapper = this.link2.current;
        wrapper.classList.toggle('check')
    }

    render() {
        return (
<div className="sidebar">

                <div className="logo">
                   <h1>Adan</h1>
                </div>

                <div  className="menu">
                    
                <div ref={this.wrapperref} onClick={() => this.handleclick()} className="menu_item">
                    <Link className="menu_item" to= "/">
                   <h3>Home </h3>
                   </Link>
                   </div>
                   
                    <div  className="menu_item">
                   <h3>Dashoard</h3>
                   </div>
                   <div className="menu_item" ref={this.link2} onClick={() => this.handleclicklink()}>
                   <Link className="menu_item" to="/factchecker" > 
                   <h3 style={{color:"black"}}>Fact Checker</h3>
                   </Link>
                   </div>

                   <div className="menu_item">
                   <h3>Premnium</h3>
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
                        <button className="cards_btn">Get Premnium</button>
                    </div>
              
                     
                </div>
                
        </div>
        )
    }
}

