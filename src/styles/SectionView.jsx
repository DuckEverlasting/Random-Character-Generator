import styled from 'styled-components';

export const SectionCards=styled.section`
    overflow:auto;
    word-wrap:break-word;
    section.buttons{
        display:flex;
        justify-content:space-between;
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
        margin-left:.5rem;
    }
`