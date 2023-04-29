import styled from "styled-components";



export const Section = styled.section `
    font-family: 'Montserrat';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
`

export const Service = styled.div`
    display: flex;
    justify-content: center; 
    font-weight: bold;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    font-size: 16px;
    padding-bottom: 25px;

    div {
        display: flex;
        justify-content: center; 

        p {
            padding: 0px 10px;
        }
    }

   select {
    background: #FFFFFF;
    color: rgba(97, 97, 97, 1);
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    width: 350px;
    height: 48px;
    margin: 5px;   
   }
`

export const Main = styled.main`
    display: flex;
    align-items: center;
   

    div {
        display: flex;
        padding: 0px 25px;
        white-space: nowrap;
    }

    Button {
        gap: 5px;
        padding: 10px;
        font-size: 16px;
        font-weight: bold;
        color: rgba(97, 97, 97, 1); 
    }
`

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    font-family: 'Montserrat';
    white-space: nowrap; 
    gap: 10px;

    div {
        background-color: rgba(189, 189, 189, 1);
        width: 100%;
        height: 1px;
    }

    select{
        background: none;
        border-color: transparent;
        outline: none;
        appearance: none;
        font-weight: bold;
        font-size: 14px;
        padding-left: 10px;
        width: 35%;
    }
`