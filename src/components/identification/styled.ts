import styled from "styled-components";



export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Montserrat";
    margin: 15px;
    
    h1 {
        font-size: 20px;
        margin-left: 10px;
        font-weight: 600;
        white-space: nowrap;
    }

    p {
        color: rgba(97, 97, 97, 1);
        padding-left: 50px;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;

    h1 {
        color: rgba(0, 153, 93, 1);
        font-size: 18px;
        font-weight: normal;
        margin: 0 1px 0px 10px;
    }

`