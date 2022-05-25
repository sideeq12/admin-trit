import styled from "styled-components";

interface percent{
    delivered : number,
    pending : number,
    intransit : number
}

export const PIE = styled.div`
    display: flex;
    width : fit-content;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    border-top :1px solid #E3E3E3;
    padding-top: 30px;
    font-family: 'Open Sans';
    .x-box{
        border-radius: 50%;
        height: 200px;
        width: 200px;
        background-color: brown;
        margin-right: 20px;

        background: repeating-conic-gradient(
            from 0deg,
            ${props => `#09668A 0deg 83deg`},
            #66C8EE 83deg 120deg,
            #34ADDC 120deg 360deg
        );
    }
    .x-box-count{
        display: flex;
        flex-direction : column;
        .cover{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: small;
            margin-top: 10px;
            .tick{
                margin-right: 15px;
            height: 15px;
            width : 15px;
        }
        }
    }
    @media (max-width: 720px) {
        padding-top: 15px;
        margin-top: 15px;
        .x-box{
            width : 150px;
            height: 150px;
        }
    }
`
export const Pie_ch = styled.div`
    margin : 20px auto;
    width: fit-content;
    padding : 30px;
    background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 5px;
`