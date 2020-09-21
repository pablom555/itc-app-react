import styled from 'styled-components';

export const SpanNavBrandOne = styled.span`

    width: 150px;
    font-size: 80px;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    justify-content: space-evenly;
    
    span:nth-child(1) {
        color: #008C45;
    }

    span:nth-child(2) {
        color: #F4F5F0;
    }
    
    span:nth-child(3) {
        color: #CD212A;
    }    

    @media (max-width: 770px) {
        display: none;
    }

`

export const SpanNavBrandTwo = styled.span`

    width: 95%;
    font-size: 60px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: none;

    span:nth-child(1) {
        color: #008C45;
    }

    span:nth-child(2) {
        color: #F4F5F0;
    }
    
    span:nth-child(3) {
        color: #CD212A;
    }   

    @media (max-width: 770px) {
        font-size: 55px;
        display: flex;
        justify-content: space-around;
    }

    @media(max-width: 680px) {
        font-size: 50px;
    }

    @media (max-width: 600px) {    
        font-size: 45px;
    }

    @media (max-width: 530px) {
        font-size: 40px;
    }

    @media (max-width: 470px) {
        font-size: 35px;
    }    

    @media (max-width: 430px) {
        font-size: 30px;
    }
    
    @media (max-width: 400px) {
        font-size: 25px;
    }
    
    @media (max-width: 350px) {
        font-size: 23px;
    }    

`