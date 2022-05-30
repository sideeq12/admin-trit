import styled from "styled-components";


export const Comment_layout = styled.div`
    width : 90vw;
    margin : 30px auto;
    .heading{
        width : 90vw;
        padding : 10px 30px;
        border-bottom: 1px solid #E3E3E3;
        display: flex;
        .product{
            min-width: 35%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .img{
                height: 44px;
                width: 40px;
                border-radius: 5px;
                background-image : url("/blouse.jpg");
                background-size: cover;
                background-position: center;
                margin-right : 10px;
            }
            .details{
                font-family: "Open sans";
                color: #343434;
                label{
                color: #979797;
                font-size: small;
                }
            }
        }
        .pro{
            padding : 20px 0px;
        }
        .reviewer{
            min-width: 15%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            font-family: "Open sans";
                color: #343434;
                font-size: 15px;
                label{
                color: #979797;
                font-size: small;
                }
            }
        }
        .reviewer{
            width: 50%;
        }
        .review{
            padding: 10px 0px;
            p{
            color: #5A5A5B;
            font-size: small;
            }
        }
    }
`