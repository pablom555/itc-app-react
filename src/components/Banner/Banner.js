import React from 'react'
import styled from 'styled-components';
import Button from './../Button/Button';
import PropTypes from 'prop-types'

const BannerArticle = styled.article`

    width: 100%;
    padding: 30px;
    margin: 40px 0;    
    border: 3px solid rgba(0, 140, 69, .20);
    background: url(${props => props.imgBgr}) no-repeat center center/cover;

    & .content {
        width: 50%;

        h2, p {
            margin: 10px 0 20px 0;
        }
    }

    @media (max-width: 770px) {
        
        & .content {
            width: 70%;
        }

    }

    @media (max-width: 530px) {
        
        & .content {
            width: 100%;
        }

    }    

`

const Banner = ({infoBanner}) => {
    
    const { title, description, imgBgr } = infoBanner

    return (
        <BannerArticle imgBgr={imgBgr}>
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
                <Button texto={"Leer Más"}/>
            </div>            
        </BannerArticle>
    )
}

Banner.propTypes = {
    infoBanner: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imgBgr: PropTypes.string.isRequired
    }).isRequired,
}

export default Banner;