import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { logo } from "../logo.svg";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="navbar-item ml-4">
                        <Link to="/" className="nav-link">
                            Items
                        </Link>
                    </li>
                </ul>
								<Link to='/cart' className="ml-auto">
									<button>
										<i className="fas fa-cart-plus" />
									</button>
								</Link>
            </nav>
        );
    }
}
