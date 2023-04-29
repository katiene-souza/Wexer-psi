import styled from "styled-components";

export const Section = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Montserrat";

    div  {
        font-family: "Comfortaa"; 
        color: rgba(1, 120, 73, 1);
        border-bottom: 2px solid rgba(1, 120, 73, 1);
        border-right: 1px solid rgba(242, 242, 242, 1);
        padding: 0 40px 0 40px;   
        font-size: 16px;
        font-weight: 700;
        margin: 10px 0px;
    }

    main {
        display: flex;
        flex-direction: row; 
        align-items: center;
        border: 1px solid rgba(224, 224, 224, 1);  
        border-radius: 8px;
        padding: 0px 10px;

            p {
                padding-right: 20vh;
                font-size: 14px;
                color: rgba(158, 158, 158, 1);  
            }
    }
`