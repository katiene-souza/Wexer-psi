import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    font-family: 'Montserrat';  
    margin: 25px;

    h1 {
        font-size: 24px;
        color: rgba(0, 153, 93, 1);
        font-weight: bold;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: left;

        p {
            color: rgba(33, 33, 33, 1);
            font-weight: bold;
            font-size: 18px;
        }
    }
`

export const NumberCircle = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
color: rgba(255, 255, 255, 1);
width: 32px;
height: 32px;
border-radius: 16px;
background-color: rgba(0, 153, 93, 1);
`

export const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
   

    main {
        display: flex;
        flex-direction: row;
        gap: 16px;
        white-space: nowrap;
        margin-bottom: 16px;
    }

    label {
        display: flex;
        flex-direction: column;
        color: rgba(79, 79, 79, 1);
        margin-top: 10px;
    }

    textarea {
        border: 1px solid rgba(189, 189, 189, 1);
        border-radius: 8px;
        padding: 10px;
        width: 96%;
        height: 200px;
        resize: none;
        margin-bottom: 10px;
    }

    select {
        color: rgba(79, 79, 79, 1);
        border: 1px solid rgba(189, 189, 189, 1);
        border-radius: 8px;
        max-width: 185px;
        height: 48px;
    }

    .errorYup {
        color: red;
        white-space: pre-wrap;
        margin-bottom: 10px;
    }

    .optionPay {
        color: rgba(79, 79, 79, 1);
        height: 20px;
    }
`

export const OptionPay = styled.div`
    margin-left: 20px;
    width: 16%;

       div{
        display: flex;
        align-items: center;
        justify-content: center;
        

        input[type="radio"]{
        display: flex;
        border: none;
        background-color: rgba(47, 128, 237, 1);
        border-radius: 8px;
        color: #FFFF;
        height: 20px;
    }
       }
`

export const Content = styled.div`
    background-color: rgba(197, 242, 224, 1);
    border-radius: 8px;
    padding: 10px;

    h1 {
        font-size: 16px;
    }

    p {
        width: 80%;
    }

`

export const ButtonsForms = styled.div`
    border-top: 2px solid rgba(224, 224, 224, 1);
    margin-top: 20px;
    white-space: nowrap;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    p {
        font-size: 14px;
        color: rgba(97, 97, 97, 1);
    }

    .cancel {
        color: rgba(97, 97, 97, 1);
        font-weight: 500;
        margin-left: 30%;
        margin-right: 10px;
    }

    .submit {
        display: flex;
        justify-content: center;
        font-weight: 700;
        color: #FFFF;
        background-color:rgba(0, 153, 93, 1);
        width: 150px;
        height: 48px;
        border-radius: 24px;  
    }
`