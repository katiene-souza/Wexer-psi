import styled from "styled-components"

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
    
    input {
        color: rgba(79, 79, 79, 1);
        border: 1px solid rgba(189, 189, 189, 1);
        border-radius: 8px;
        min-width: 180px;
        height: 48px;
        font-family: 'Montserrat';
    }

    .annex {
        border: none;
    }
   
    input[type="file"]::file-selector-button{
       border: none;
       background-color: rgba(47, 128, 237, 1);
       border-radius: 8px;
       color: #FFFF;
       width: 145px;
       height: 40px;
    }

`