import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './../../Button';
import imgCard from './../../../img/news1-card.jpg';

const ImgCard = styled.img`
    width: 100%;
    height: 180px;
    border: 3px solid rgba(0, 140, 69, .20);

    @media (max-width: 1000px){    
        height: 150px;
    }

    @media (max-width: 770px){    
        height: 180px;
    }    

    @media (max-width: 530px){    
        height: 250px;
    }        

    @media (max-width: 430px){    
        height: 200px;
    }     

    @media (max-width: 350px){    
        height: 180px;
    }         

`

const H3Card = styled.h3`
    font-size: 20px;
    margin: 10px 0;
`

const CardItem = props => {
    return (
        <div className="card">
            <ImgCard src={imgCard} alt="Noticia 1" />
                <H3Card>Lorem, ipsum dolor.</H3Card>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati fugiat quibusdam, consequatur
                    veritatis necessitatibus sed. Nobis autem fugit blanditiis et?</p>
            <Button texto={"Leer Más"}/>
        </div>
    )
}

CardItem.propTypes = {

            }

export default CardItem
