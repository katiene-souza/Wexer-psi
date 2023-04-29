import styled from "styled-components";

export  const Section = styled.section`
  position: fixed;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0.5px 0px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: right;
  z-index: 2;
  font-family: "Montserrat";
 

  div {
      display: flex;
      align-items: center;
      margin: 0 10px 0 90px;    
  }

  h1 {
      padding: 15px;  
      font-weight: normal;
      color: rgba(1, 120, 73, 1);
  }

`

export const ContainerLogin = styled.div<{isOpen: boolean}>`
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.2);
  z-index: 2;
  position: fixed; 
  margin-top: 85px;
  width: 279px;
  height: 184px;
  border-radius: 16px;
  left: ${({isOpen}) => isOpen ? "75%" : "-100%"};
  animation: showSidebar .4s;
  font-family: "Montserrat";

  h1 {
    font-size: 14px;
    font-weight: normal;
  }

  p {
    font-size: 12px;
  }

  Button {
    margin-bottom: 20px;
    

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      line-height: 0px;
      margin-left: 12px;
      
    }
  }

`
export const Identify = styled.div`
  background: linear-gradient(358.25deg, rgba(229, 229, 229, 0.68) 19.64%, #FFFFFF 75.78%);
  font-family: "Montserrat";

  div {
    margin: 13px;
  }
`
