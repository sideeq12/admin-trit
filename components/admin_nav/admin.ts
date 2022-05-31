import styled from "styled-components";



export const Mynav = styled.div`
    height: 100vh;
    width : 10vw;
    display: flex;
    flex-direction: column;
    gap : 2rem;
    align-items: center;
    padding-top: 50px;
    .li{
        svg{
            /* color :#C9C9C9; */
        }
        svg:hover{
            cursor: pointer;
            color : #34ADDC;
        }
    }
    .first{
        margin-top: 50px;
    }
`