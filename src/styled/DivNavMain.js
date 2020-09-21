import styled from 'styled-components';

const DivNavMain = styled.div`

    font-size: 20px;
    height: 70px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 600px) {
        margin-top: 20px;   
    }

    @media (max-width: 430px) {
        margin-top: 10px;   
    }

    @media (max-width: 400px) {
        margin-top: 0px;   
    }

`
export default DivNavMain;