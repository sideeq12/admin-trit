import styled from "styled-components";

interface spandata{
    status : any
}


export const Order_section = styled.div`
        width : 80vw;
        margin : 0px 20px ;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding : 20px 30px;
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
            .lab{
                width : 10%;
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
                font-size: small;
            }
        }

@media (max-width: 720px) {
    width : 95vw;
    padding : 10px 5px;
    margin : 10px auto;
    label, strong{
    font-size: x-small;
    text-align: left;
    }
    label{
        width : 12%;
    }
    label.id{
        width : 3%;
    }
    label.cut{
        width : 18%;
    }
}
`

export const SPAN = styled.div<spandata>`

            strong{
                font-weight: normal;
                color : ${props => props.status == true ? "#1EAD91" : ( props.status === null ? "#E2B93B" : "#F43F3F")}
            }
        
`