import styled from "styled-components"

export const ModalOutside = styled.div<{isOpen: boolean}>`
    display: ${({isOpen}) => isOpen ? "initial" : "none"};
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;   
    background-color: rgba(0,0,0,0.4);
    font-family: 'Montserrat'; 
`

export const ModalContent = styled.div`
    overflow-y: scroll;
    margin: 8% auto;
    max-height: 70%;
    max-width: 50%;
    background-color: #fefefe;
    border-radius: 8px;
   

    Button {
        position: relative;
        padding-top: 10px; 
        float: right; 
    }
`

