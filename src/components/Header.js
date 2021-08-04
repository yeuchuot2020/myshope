import React from 'react';


const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <a href="/">qshoper</a>
                </div>
                <ul className="main-menu">
                    <li><a href="/" className="active">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">cart</a></li>
                    <li><a href="#">checkout</a></li>
                    
                </ul>
                <ul className="user-menu">
                    <li><a href=""><i class="fab fa-opencart"></i></a></li>
                    <li><a href="" className="log">login</a></li>
                    <li><a href="" className="log">register</a></li>
                    <li><a href=""><i class="fas fa-search"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
