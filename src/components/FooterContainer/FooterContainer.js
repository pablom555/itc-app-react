import React from 'react';
import Footer from './../../styled/Footer';
import { FaCopyright } from "react-icons/fa";
import { IconContext } from "react-icons";

const FooterContainer = () => {
    return (
        <Footer>
            <div className="container">
                <ul>
                    <li>
                        <a href="#">
                            <h3>Titulo uno</h3>
                        </a>
                    </li>
                    <li><a href="#">Ejemplo</a></li>
                    <li><a href="#">Ejemplo</a></li>
                    <li><a href="#">Ejemplo</a></li>
                    <li><a href="#">Ejemplo</a></li>
                </ul>

                <ul>
                    <li>
                        <a href="#">
                            <h3>Titulo uno</h3>
                        </a>
                    </li>
                    <li><a href="#">Ejemplo</a></li>
                    <li><a href="#">Ejemplo</a></li>
                    <li><a href="#">Ejemplo</a></li>
                    <li><a href="#">Ejemplo</a></li>
                </ul>

                <ul>
                    <li>
                        <a href="#">
                            <h3>Titulo uno</h3>
                        </a>
                    </li>
                    <li><a href="#">Ejemplo</a></li>
                    <li><a href="#">Ejemplo</a></li>
                    <li><a href="#">Ejemplo</a></li>
                    <li><a href="#">Ejemplo</a></li>
                </ul>
            </div>
            <div className="copyright">
                <IconContext.Provider value={{style: { margin: "0 10px" } }}>
                    <FaCopyright />
                </IconContext.Provider>
                <span>Itc Online by </span><a href="#">Pablo Martinez Soft</a>
            </div>
        </Footer>
    )
}

export default FooterContainer;
