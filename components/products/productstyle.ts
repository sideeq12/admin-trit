import styled from "styled-components";


interface mydata {
    im : string
}

export const Product_section = styled.div`
        width : 90vw;
        margin : 20px auto;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        .titlesection{
            width : 100%;
            background-color: #D3EDF8;
            color : #09668A;
            padding : 15px 0px;
            display: flex;
            border-radius: 10px 10px 0px 0px;
            justify-content: space-between;
            text-align: center;
            label{
                width : 10%;
                text-align: center;
            }
            label.name{
                width : 20%;
            }label.id{
                width : 7%;
            }
        }
        .inner{
            background-color: white;
            color : #5A5A5B;
            border-radius: 0px;
            font-size: small;
            border-bottom: 1px solid #E3E3E3;
            label{
                border-right: 1px solid #E3E3E3;
            }label.id{
                width : 7%;
            }
        }
`


export const Label = styled.div<mydata>`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #E3E3E3;
    div {
        width : 20px;
        height: 20px;
        margin-right: 5px;
        background-image: url(${props => props.im});
        background-size: contain;
        background-position: center;
    }
`
interface sell{
    show : boolean
}
export const Sold = styled.label<sell>`
    color : ${props => props.show ? "#F43F3F" : "#1EAD91"}
`