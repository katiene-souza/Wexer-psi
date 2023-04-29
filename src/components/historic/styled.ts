    import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    font-family: "Montserrat";
    margin-top: 40px;  

   
    .green {
        border-left: 4px solid #00995D;
        border-radius: 2px;   
    }

    .blue {
        border-left: 4px solid #2F80ED;
        border-radius: 2px;  
    }
    
    .purple {
        border-left: 4px solid #9D28AC;
        border-radius: 2px;  
    }

    .pink {
        border-left: 4px solid #EA1E61;
        border-radius: 2px;   
    }
` 

export const Image = styled.div`
    position: absolute;
    margin: -20px 35px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BoxLine = styled.div`
    height: 100px;
    position: absolute;
    margin-bottom: 50%;
    z-index: -1;
    
`

export const Main = styled.main`
    position: relative;
    padding: 24px;

    div {
        line-height: 10px;
        padding-top: 16px;   
    }

    Button {
        float: right;
        margin: 15px 5px;
    }

    h1 {
        font-size: 18px;    
       
    }

    h2 {
        font-size: 14px;
        color: rgba(97, 97, 97, 1);
        font-weight: normal;
    }

    p {
        color: rgba(66, 66, 66, 1);
        line-height: 27px;
    }
`

export const ContainerPopup = styled.div<{isOpen: boolean}>`
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 1;
  margin-top: 60px;
  margin-bottom: 40%;
  width: 182px;
  height: 173px;
  border-radius: 8px 0px 8px 8px;
  left: ${({isOpen}) => isOpen ? "80%" : "40%"};
  animation: showSidebar .4s;
  font-family: "Montserrat";

  div {
    margin: 10px;
  }

  p {
    margin-left: 12px;
  }


.bluePopup {
    color: rgba(47, 128, 237, 1);
}
    
.redPopup {
    color: rgba(235, 87, 87, 1);
}

.greenPopup {
    color: rgba(0, 153, 93, 1);  
}
`