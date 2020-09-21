import React from 'react'
import styled from 'styled-components';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { PropTypes } from 'prop-types';

const ButtonLink = styled.a`

    cursor: pointer;
    display: inline-block;
    border: 1px solid rgba(205, 33, 42, 0.30);
    padding: 5px 20px;
    font-size: 15px;
    background-color: #1c0d02;
    margin-top: 15px;

    &:hover {
    opacity: .70;
}
`

const Button = ({texto}) => {
    return (
        <ButtonLink>{texto} <FaAngleDoubleRight /> </ButtonLink>
    )
}

Button.propTypes = {
    texto: PropTypes.string.isRequired
}

export default Button;
