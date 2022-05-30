import styled from "styled-components";



export const Overall = styled.div`
   
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding : 10px 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-family: 'Open Sans';
    justify-content: center;
    align-items: center;
    display: flex;
    gap : 1rem;
    margin : 30px auto;
    width: 80vw;
    
    span{
        font-weight: bold;
        font-family: 'Open Sans';
    }

    .count{
        display: flex;
        justify-content: center;
        align-items:flex-end;
        label{
                color :  #5A5A5B;
                font-size: small;
            }
        .point{
        margin-right: 20px;
            strong{
                font-size: 45px;
                letter-spacing: 2px;
            }
        }
        .star{
            display: flex;
            flex-direction: column;
            label{
                margin-top: 10px;
            }
        }
    }

`
export const User_rate = styled.div`
        width: 60%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-left: 30px;
    div{
        display: flex;
        align-items: center;
        width: 250px;
        margin-top: 10px;
        justify-content: space-between;
        progress{
            background: #C9C9C9;
            color : #09668A;
            border-radius : 5px;
            height:6px;
        }
        label{
            font-size: small;
            font-weight: bold;
        }
        label.star{
            color: #E2B93B;
        }
        label.coun{
            color: #09668A;
        }
    }
`