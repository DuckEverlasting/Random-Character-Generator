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