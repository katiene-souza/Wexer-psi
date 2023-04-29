import styled from "styled-components";

export const MainContainer =styled.main`
    position: fixed;
    z-index: 2;
    font-family: "Montserrat";

    main {
      position: fixed;
      background: rgba(0, 153, 93, 1);
      width: 80px;
      height: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;

      Button {
        padding: 20px;
    }
    }

    section {
        background: #FFFFFF;
        box-shadow: 0.5px 0px 20px rgba(0, 0, 0, 0.2);
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;   
    }

`

export const MenuOptions =styled.section` 
    Button {
    display: flex;
    align-items: center;
    z-index: 1;  
    margin-left: 20vh; 
    }
    
`

export const Container = styled.div<{isOpen: boolean}>`
  background-color: rgba(0, 153, 93, 1);
  box-shadow: 0.5px 0px 20px rgba(0, 0, 0, 0.2);
  z-index: 2;
  position: fixed;
  height: 100%;
  left: ${({isOpen}) => isOpen ? "0" : "100%"};
  width: 250px;
  animation: showSidebar .4s;

  Button {
        margin-left: 25px;
        margin-bottom: 10px;
  
        p {
          color: #FFFF;
          margin-left: 20px;
        }
      }
     
`