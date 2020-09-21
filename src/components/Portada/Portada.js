import React from 'react';
import styled from 'styled-components';
import Button from './../Button';
import imgPort from './../../img/showcase.jpg';

const ShowCase = styled.article`

    width: 100%;
    height: 400px;
    background: url(${props => props.imgBg}) no-repeat center center/cover;
    margin: 20px 0;
    border: 3px solid rgba(0, 140, 69, .20);
    padding: 0px 10px 30px 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    h2 {
        margin-bottom: 10px;
    }

    @media (max-width: 680px) {
    
        margin-top: 10px;
    
    }

    @media (max-width: 530px) {
    
        margin-top: 0;
    
    }
`

const Portada = () => {
    return (
        <ShowCase imgBg={imgPort}>
            <h2>Noticia Principal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti, nisi dolore magnam fugiat ad illo
            ullam error earum rerum, quam quibusdam facilis, quasi inventore iure tempora non. Architecto, impedit!
            </p>            
            <Button texto={"Leer Más"}></Button>
        </ShowCase>
    );
}

export default Portada
