import styled from "styled-components";

export const Section = styled.section `
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    font-family: "Montserrat";

    h1 {
        font-size: 18px;
        font-weight: 600;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    p {
        font-size: 16px;
        color: rgba(66, 66, 66, 1);
        line-height: 27px; 
    }
`
