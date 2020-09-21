import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UlNavMenu from '../../../styled/UlNavMenu';

const NavMenu = ({ items, isShow, clickHamHandler }) => {

    const renderNavMenu = (item) => {
        const { texto, link } = item;                    
        return <li key={texto}> <Link data-menu="true" to={link} onClick={clickHamHandler}>{texto}</Link> </li>
    }

    return (

        <UlNavMenu className={isShow? 'show': ''}>
            {items.map(renderNavMenu)}
        </UlNavMenu>
    )
}

NavMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        texto: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    })).isRequired,
    isShow: PropTypes.bool.isRequired,
    clickHamHandler: PropTypes.func.isRequired,
}

export default NavMenu;
