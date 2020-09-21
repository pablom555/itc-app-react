import styled from 'styled-components';

const Footer = styled.footer`

    background-color: #1c0d02;
    margin-top: 30px;
    border-top: 3px solid rgba(0, 140, 69, .20);
    padding: 35px;

    & .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        align-items: center;
        justify-items: center;
    }

    & .container ul li {
        line-height: 2; 
    }

    & .copyright {
        text-align: center;
        margin-top: 30px;
        color: #616161;

        a {
            color: #616161;
        }
    }

    @media (max-width: 530px) {
        & .container {
            grid-template-columns: 1fr;
        }
    }

`

export default Footer;