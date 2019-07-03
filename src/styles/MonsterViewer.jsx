import styled from 'styled-components';

export const Important=styled.section`
    font-size:10pt;
    display:flex;
    section{
        margin:.5rem;
    }
    h4{
        margin:.25rem 0;
    }
    p{
        margin:0 0 0 2rem;
    }
    pre{
        font-size:10pt;
    }
`

export const AC=styled.section`
    position:relative;
    align-self:center;
    span{
        position:absolute;
        left:20px;
        top:15px;
        font-family:sans-serif;
        font-size:20pt;
    }
    svg{
        opacity:.25;
    }
    margin:1rem;
    border-color:transparent;
`

export const Special=styled.dl`
    padding-left:1rem;
    font-size:10pt;
    dt{
        font-weight:bold;
    }
    dl{
        margin-left:2rem;
    }
`
export const Bottom=styled.section`
    display:flex;
    height:60vh;
    border-top:1px solid black;
    &>section{
        width:50%;
    }
    fieldset{
        border-color:transparent;
    }
`

export const MonsterView=styled.section`
    padding-left:.5rem;
    overflow:hidden;
    width:30%;
    height:100vh;
    background-color:white;
    font-family: "Roboto", sans-serif;
`