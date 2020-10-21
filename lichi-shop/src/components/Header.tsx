import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Header.css"
import Menu from "../svg/bars-solid.svg"
import Close from "../svg/times-solid.svg"
import Cart from "../svg/shopping-cart-solid.svg"

export default class Header extends Component {
    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} =  this.state;
        return (
            <header className = "navbar">
                    <div className="menu" onClick = {this.menuToggle}>
                        <img src={Menu} alt="" width = "20"/>
                    </div>
                    <div className="logo">
                        <Link to={'/'}><img src="https://lichi.com/statics/images/new_logo.png" alt="" width = "100"/></Link>
                    </div>
                    <nav>
                        <ul className = {toggle?"toggle":""}>
                            <li><Link to={'/newClothes'}>New Items</Link></li>
                            <li><Link to={'/categories'}>Categories</Link></li>
                            <li><Link to={'/login'}>Login</Link></li>
                            <li><Link to={'/registration'}>Register</Link></li>
                            <li className="close">
                                <img src={Close} alt="" width = "20" onClick = {this.menuToggle}/>                                    
                            </li>  
                            <li className="nav-card">
                                <span>0</span>
                                <Link to = {"/card"}><img src={Cart} alt="" width = "25"/></Link>
                            </li> 
                        </ul>                
                    </nav>
            </header >
        )
    }
}
