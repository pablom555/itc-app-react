import React from 'react';
import CardContainer from '../CardContainer';
import Portada from './../Portada';
import Banner from './../Banner';
import Social from './../Social';

// Luego reemplazar por api
import imgBan1 from './../../img/tech-red.jpg';
import imgBan2 from './../../img/image-five.jpg';

let banners = [
    {
        title: 'Titulo Banner 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam fuga nihil consequatur sint sunt alias, rem consectetur a omnis',
        imgBgr: imgBan1
    },
    {
        title: 'Titulo Banner 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam fuga nihil consequatur sint sunt alias, rem consectetur a omnis',
        imgBgr: imgBan2
    },    
]
// Luego reemplazar por api Fin

const Home = () => {
    return (
        <>
            <Portada />
            <CardContainer />
            <Banner infoBanner={banners[0]}/>
            <CardContainer />
            <Banner infoBanner={banners[1]}/>
            <Social />
        </>
    )
}

export default Home;
