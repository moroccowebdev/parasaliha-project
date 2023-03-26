import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown';

const NavBar = () => {
    
    return (
        <header className='parasaliha__home__header'>
            <img src="./img/parasaliha-logo.png" alt="logo" className="parasaliha__home__header__logo" />
            <ul className="parasaliha__home__header__list">
                <li><Link to={''}>Produits</Link></li>
                <li className="dropdown">
                    <Dropdown
                        button={'Clients'}
                        link1={'Ajouter Client'}
                        link2={'Liste des clients'}
                        route1={'/addClient'}
                        route2={'/clientList'}
                    />
                </li>
            </ul>
        </header>
    )
}

export default NavBar
