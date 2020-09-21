import React from 'react';
import PropTypes from 'prop-types';
import UlNavMenuRight from './../../../styled/UlNavMenuRight';
import { FaSearch, FaBars } from 'react-icons/fa';


const NavMenuRight = ({ clickHamHandler, isShow }) => {

    return (
        <UlNavMenuRight>  
            <li id="menu-search">
                <a href="#">
                    <FaSearch/>                    
                </a>
            </li>
            <li id="menu-ham">
                <a href="#" onClick={clickHamHandler} className={isShow? 'activate': ''}>
                    <FaBars/>                    
                </a>
            </li>        
        </UlNavMenuRight>
    )
};

NavMenuRight.propTypes = {
    clickHamHandler: PropTypes.func.isRequired,
    isShow: PropTypes.bool.isRequired,
}

export default NavMenuRight;
;