import styled from 'styled-components';

export const SectionCards=styled.section`
    overflow:auto;
    word-wrap:break-word;
    height:350px;
    button{
        border-bottom-color:transparent;
    }
    .hide{
        display:none;
    }
    .show{
        display:block;
        overflow:auto;
    }
`

export const ActionSection=styled.section`
    dd,dt{
        padding-right:1rem;
    }
    dd{
        margin-left:.35rem;
    }
`