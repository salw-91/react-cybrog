import React from 'react'
import logo from '../../assets/images/logo.png'
import Navitem, { NavitemDropDown } from '../../components/Navitem/Navitem'
import "./Header.css"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light cyborg-navbar">
            <a className="navbar-brand ms-5" href="#">
                <img src={logo} alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end me-5" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <Navitem>
                        <a className="nav-link text-light" href="#">Home</a>
                    </Navitem>
                    <Navitem>
                        <a className="nav-link text-light" href="#">Browse</a>
                    </Navitem>
                    <Navitem>
                        <a className="nav-link text-light" href="#">Details</a>
                    </Navitem>
                    <Navitem>
                        <a className="nav-link text-light" href="#">Streams</a>
                    </Navitem>
                    <Navitem>
                        <a className="nav-link text-light" href="#">Profile</a>
                    </Navitem>
                </ul>

            </div>
        </nav>

    )
}

export default Header