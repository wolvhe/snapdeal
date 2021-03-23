import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import "./header.css";


function Header() {
    return (
        <div>
        <div className="pre_header">
             <div className="pre_headerTitle">
                <p className="pre_headerMenu0">India's fastest online shopping destination</p>
             </div>
             <div className="pre_headerMenu">
                <p className="pre_headerMenu1">Gift cards</p>
                <p className="pre_headerMenu1">Help center</p>
                <p className="pre_headerMenu1">Sell on snapdeal</p>
                <p className="pre_headerMenu1">Download app</p>
             </div>
        </div> 
           {/*  */}
        <div>
        <Navbar bg="" expand="lg" className="navbar_color">
            <a href="#home" ><img className="header_img" src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" /></a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
        <div class="input-group">
                    <input type="search" className="form-control searchbar_css" placeholder="Search Products & Brands" aria-label="Search"
                        aria-describedby="search-addon" />
                    <button type="button" class="btn btn-dark">SEARCH</button>
                    </div>
            <Nav className="mr-auto">
                
                    <div className="nav_menu">
                        <div className="nav_cart">
                            <p className="nav_signinText">Cart</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-cart2" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                            </svg>                      
                        </div>

                       

                        <div className="nav_signin">
                            <div class="navbar_dropdown">
            <p class="navbar_dropbtn" className="nav_signinText">Sign in</p>
            <div class="navbar_dropdown-content">
                <a href="#" className="nav_signin_subtext">Your Account</a>
                <a href="#" className="nav_signin_subtext">Your Orders</a>
                <a href="#" className="nav_signin_subtext">Shortlist</a>
                <a href="#" className="nav_signin_subtext">SD Cash</a>
                <hr />
                <Button className="navbar_loginbutton">LOGIN</Button>
                <br />
            </div>
            </div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                        </div>

                    </div>
                
            </Nav>
            
        </Navbar.Collapse>
        </Navbar>
        </div>
        {/*  */}
       
        </div>
    )
}

export default Header
