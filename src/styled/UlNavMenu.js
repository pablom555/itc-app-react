import styled from 'styled-components';

const UlNavMenu = styled.ul`

    flex-grow: 1;
    margin-left: 20px;
    color: #F4F5F0;
    display: flex;
    justify-content: space-around;

    li {
        list-style: none;
	    position: relative;
        padding: 5px 20px;
    }

    li a::after, li a::before {
        content: '';
        width: 100%;
	    height: 100%;
	    position: absolute;
	    transition: ease 0.4s;
        opacity: 0;        
    }

    li a::before {
        right: 0;
        top: 0;
	    border-right: 3px solid #CD212A;
	    border-top: 2px solid #CD212A;
    	transform: translate(-30%, 30%);
    }

    li a::after {
        left: 0;
        bottom: 0;
	    border-left: 3px solid #008C45;
	    border-bottom: 2px solid #008C45;
	    transform: translate(30%, -30%);
    }    

    li a:hover {        
        &::before, &::after {
            transform: translate(0%, 0%);
            opacity: 1;
        }
    }

    @media (max-width: 770px) {

        display: block;
        position: absolute;
        top: 0;
        left: 0;
        padding: 30px;
        height: 100%;
        background-color:rgba(28, 13, 2, 0.7);
        transform: translateX(-500px);
        transition: transform .5s ease-in-out;

        &.show {
            transform: translateX(-40px);
        }

        li {
            padding-bottom: 10px;
	        border-bottom: 1px solid rgba(70, 131, 131, 0.40);
        }
        
        li a::after, li a::before {
            display: none;
        }

        li a:hover {
            padding-bottom: 3px;
            color: cyan;
        }
    }

`

export default UlNavMenu;