import React, { useState } from 'react';
import DivNavMain from '../../styled/DivNavMain';
import NavBrand from './NavBrand';
import NavMenu from './NavMenu';
import NavMenuRight from './NavMenuRight';

const menuItems = [
    {
        texto: "Noticias",
        link: "/"
    },
    {
        texto: "Jugadores",
        link: "/11"
    },
    {
        texto: "Encuentros",
        link: "/22"
    },
    {
        texto: "El Club",
        link: "/33"
    }
];


const AppNavigation = () => {

    // Estado para asignar clase show el menu vertical
    const [isShow, setIsShow] = useState(false);

    const clickHamHandler = (e) => {
        
        // Si el click lo hizo un item del menu
        // paso el estado a false solo si esta abierto
        if (e.target.dataset.menu) {
            isShow && setIsShow(!isShow) 
        } else {
        // Si el click lo hizo el menuHam cambio el estado al estado contrario            
            setIsShow(!isShow)
        }
    }

    return (<DivNavMain>
                <NavBrand />
                <NavMenu items={menuItems} isShow={isShow} clickHamHandler={clickHamHandler}/>
                <NavMenuRight clickHamHandler={clickHamHandler} isShow={isShow} />
            </DivNavMain>)
}

export default AppNavigation
