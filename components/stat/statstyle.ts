import styled from "styled-components";

interface mycolor{
    shadow : string,
    back : string,
    delir : string,
    rate : number
}

export const Sta = styled.div<mycolor>`
        background: ${props => props.back};
        box-shadow: ${props => props.shadow};
        padding : 20px 50px 20px 20px;
        margin : 20px;
        border-radius: 5px;
        width : fit-content;
        display: flex;
        .content{
            display: flex;
            flex-direction: column;
            width: fit-content;
            border-right: 1px solid #DADADA;
            padding-right: 20px;
            font-family: 'Tinos';
            label{
                font-size: smaller;
                color: #5A5A5B;
                margin-top: 10px;
                font-family: 'Open Sans'
            }
        }
        .circle{
          margin-left: 30px;
          .x-box{
            background: repeating-conic-gradient(
            from 0deg,
            ${props => props.delir} 0deg ${props => props.rate}deg,
            #F4F3F3 ${props => props.rate}deg 360deg
        );
          }
        }

`

export const Statistic = styled.div`
    margin : 0px;
    display: flex;
    width: fit-content;
    flex-wrap: wrap;
`

export const Circle = styled.div`
 .x-box{
        border-radius: 50%;
        height: 50px;
        width: 50px;
        background-color: brown;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        .percent{
          width : 80%;
        height: 80%;
        border-radius: 100%;
        background-color: white;
        font-size: small;
        display: flex;
        justify-content: center;
        align-items: center;
        }
    }
`