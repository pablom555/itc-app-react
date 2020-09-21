import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

const SocialArticle = styled.article`
    
    p {
        text-align: center;
        margin-bottom: 20px;
        font-size: 30px;
    }

    .links {
        display: flex;
        justify-content: center;
        align-items: center; 
    }
`

const Social = () => {

    return (
        <SocialArticle>
            <p>Seguinos...</p>
            <div className="links">
                <IconContext.Provider value={{ style: { margin: "0 30px" }, size: "2.5em" }}>
                    <a href=""> <FaFacebookF /> </a>
                    <a href=""> <FaTwitter /> </a>
                    <a href=""> <FaInstagram /> </a>
                </IconContext.Provider>
            </div>
        </SocialArticle>
    )
}

export default Social;
