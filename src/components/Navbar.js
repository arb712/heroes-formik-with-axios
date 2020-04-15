import React, {Component} from 'react';
import './navbar.css'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NaviBar extends Component {
    render() {
        return (
            <div className="parent" style={{width:'100%'}}>
                <div className="logoName">
                    <h1 style={{fontSize:'15px'}}>H E R O E S</h1>
                </div>
                <div className="bg-color">
                    <Navbar bg="light" expand="lg">
                    <Link className="navbar-brand" to="home">Home</Link>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="heroes">Heroes</Link>
                        <Link className="nav-link" to="view_heroes">View Heroes</Link>
                    </Nav>
                     </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}
export default NaviBar