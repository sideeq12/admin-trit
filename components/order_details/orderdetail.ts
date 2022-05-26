import styled from "styled-components";

interface spandata{
    status : string
}


export const Order_section = styled.div`
        width : 80vw;
        margin : 20px auto;
        .titlesection{
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            font-family: 'Open Sans';
            select{
                background: #34ADDC;
                color : white;
                border-radius: 4px;
                padding : 5px;
            }
        }
        .headlist{
            display: flex;
            justify-content: space-between;
            padding : 15px 0px;
            background: #D3EDF8;
            border-radius: 10px 10px 0px 0px;
            margin : 15px 0px;
            label{
                width : 10%;
                color : #09668A;
                text-align: center;
            }

        }
        .list{
            margin : 0px;
            background-color: white;
            border-bottom: 1px solid #E3E3E3;
            padding : 20px 0px;
            label{
                color: #5A5A5B;
            }
        }

`

export const SPAN = styled.label<spandata>`
`