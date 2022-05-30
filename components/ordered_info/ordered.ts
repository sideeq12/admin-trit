import styled from "styled-components";


export const The_order = styled.div`
        width : 80vw;
        border : 1px solid blue;
        display: flex;
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
            margin-top: 10px;
            width: var();
            font-size: 16px;
            padding : 20px 0px;
            font-weight: bold;
            background: #F9F9F9;
border-radius: 5px;
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

export const Order_id = styled.div`
width : 50%;
margin-right : 20px;
      .data{

background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding : 15px 10px;
    margin-top: 30px;
    .cont{
        font-size: 14px;
        /* margin-top: 15px; */
        /* border-top: 1px solid #E3E3E3; */
        padding-top: 10px;
        .line{
            margin-top: 10px;
            padding : 10px 0px;
            display: flex;
            justify-content: space-between;
            border-top:  1px solid #E3E3E3;
            color : #343434
            label {
                margin-right: 10px;
            }
            span{
                color : #34ADDC;
            }
        }
    }
}
`