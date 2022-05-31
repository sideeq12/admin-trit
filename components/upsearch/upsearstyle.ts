import styled from "styled-components";




export const SearchNav = styled.div`
    width : 90vw;
    height: 10vh;
    /* border : 1px solid red; */
    display: flex;
    align-items: center;
    margin-left: auto;
    padding : 10px 0px;
    .left{
        border : 1px solid blue;
        margin-left: 20px;
        background-color: #F9F9F9;
        border: 5px;
        padding : 5px 10px;
        input{
            background-color: #F9F9F9;
            border: none;
            margin-left: 10px;
            padding-left: 30px;
            width: 400px;
        }
        svg:hover{
            color : #34ADDC;
            cursor: pointer;
        }
    }
    .right{
        margin-left: auto;
        display: flex;
        align-items: center;
        margin-right: 60px;
         /* border : 1px solid blue; */
        .ico{
        }
        .name{
            color : #34ADDC;
            margin-left: 20px;
            label{
                font-size: small;
                color : #5A5A5B;
            }
        }
        .userimage{
            height: 40px;
            width : 40px;
            background-image: url("/blouse.jpg");
            background-size: cover;
            background-position: top;
            margin-left: 20px;
            border-radius: 100%;
        }
    }
`