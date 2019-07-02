import styled from 'styled-components';

export const ButtonSection=styled.section`
    display:flex;
    justify-content:space-between;
`

export const PrevButton=styled.button`
    background-color:red;
    color:white;
    border:2px white outset;
    :hover{
        border:2px white inset;
    }
`

export const NextButton=styled.button`
    background-color:black;
    color:white;
    border:2px white outset;
    :hover{
        border:2px white inset;
    }
`
export const InitList=styled.section`
    display:flex;
    flex-direction:column;
    overflow:hidden;
`
export const Inits=styled.section`
    width:100%;
    height:15vh;
    display:flex;
    overflow:auto;
    
`