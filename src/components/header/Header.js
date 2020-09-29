import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({items}) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link text-dark">Store</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link text-dark">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cart" className="nav-link text-dark">
                        <img src="./img/shopping-cart.png" className="shopping-cart-icon" alt="Shopping cart"/>
                            Cart ({items.reduce((s, i) => s + i.count, 0)})
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapState = state => ({
    items: state.items.items
})

export default connect(mapState)(Header)
