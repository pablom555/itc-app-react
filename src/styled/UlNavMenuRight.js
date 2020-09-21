import styled from 'styled-components';

const UlNavMenuRight = styled.ul`
    
    margin-left: 30px;

    #menu-ham {
        display: none;
    }

    @media (max-width: 770px) {

        /* Nav Right */
        #menu-ham {

            display: inherit;

            & a:hover {
                color: #CD212A;
            }

            & a.activate {
                color: #CD212A;
            }

            & a.activate:hover {
                color: #e3f2fd;
            }

        }

        #menu-search {
            display: none;
        }
       
    }

`

export default UlNavMenuRight;