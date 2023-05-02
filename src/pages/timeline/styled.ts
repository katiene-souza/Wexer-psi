import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 10px;
   

    section {
        display: flex;
        gap: 1rem;
    }

    .contentBox {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    footer{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        margin-left: 20%;

        p {
            font-family: 'Montserrat';
            color: rgba(33, 33, 33, 1);
            margin-left: 12px;
        }
    }
`

