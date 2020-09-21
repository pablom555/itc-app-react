import React from 'react'
import styled from 'styled-components';
import CardItem from './CardItem';
import PropTypes from 'prop-types'


const SectionGrid = styled.article`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    margin: 10px 0;

    @media (max-width: 770px){    
        grid-template-columns: repeat(2,1fr);
    }    

    @media (max-width: 530px){    
        grid-template-columns: 1fr;
    }        
    
`

const CardContainer = props => {
    return (
        <SectionGrid>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
        </SectionGrid>
    )
}

CardContainer.propTypes = {

}

export default CardContainer
