import styled from "styled-components";


export const The_order = styled.div`
        width : 80vw;
        /* border : 1px solid blue; */
        margin : 20px auto;
        padding : 10px;
`

export const Order_Summary = styled.div`
        width : 30%;
        padding-top: 20px;
        font-family: 'Open Sans';
       .first{
           background: #FFFFFF;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            padding : 15px 10px;
           .price{
               margin-top: 20px;
               font-size: 14px;
               padding-top: 20px;
           border-top : 1px solid #E3E3E3;
           color : #343434;
           display: flex;
           flex-direction: column;
           gap : 1rem;
        .priceline{
            display: flex;
            justify-content: space-between;
        }
        .tot{
            margin-top: 30px;
            font-size: 16px;
            font-weight: bold;
        }
       }
       }
       .second{

        background: #FFFFFF;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            padding : 15px 10px;
            margin-top: 30px;
            .cont{
                font-size: small;
                margin-top: 15px;
                border-top: 1px solid #E3E3E3;
                padding-top: 20px;
                .line{
                    margin-top: 10px;
                    label {
                        font-weight: bold;
                        margin-right: 10px;
                    }
                }
            }
       }

`