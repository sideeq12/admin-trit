import styled from "styled-components";

interface check{
    active : boolean
}
export const Email_layout = styled.div`
    width : 80vw;
    margin : 20px auto;
    justify-content: space-between;
    display: flex;
    .email_list{
        width : 35%;
    }
`
export const Email = styled.div<check>`
       height: 120px;
            border-bottom: 1px solid #E3E3E3;
            padding : 15px 15px 20px;
            display: flex;
            justify-content: space-around;
            background-color: ${props => props.active ? "#34ADDC" : "#FFF"};
            &:hover{
                cursor: pointer;
            }
            .image{
                height: 51px;
                width : 51px;
                background-image: url("/lucas.jpg");
                background-size: cover;
                background-position: center;
                border-radius: 100%;
            }
            .details{
                width : 70%;
                .name{
                    display: flex;
                    justify-content: space-between;
                    font-family: 'Open Sans';
                    font-weight: bold;
                    color: ${props => props.active ? "#FFF" : "black"};;
                    label{
                        font-size: 12px;
                        color: ${props => props.active ? "#FFF" : "#979797"};
                    }
                }
                .message{
                    margin-top: 10px;
                    font-size: 12px;
                    color: ${props => props.active ? "#FFF" : "#979797"};
                    font-family: 'Open Sans';
                }

            }
`
export const MainEmail = styled.div`
    padding : 20px;
    width: 60%;
    /* border : 1px solid red; */
    height: fit-content;
    padding-top: 30px;
    .sender{
        display: flex;
        /* border: 1px solid red; */
        .image{
            height: 83px;
            width : 83px;
            border-radius: 100%;
            margin-right: 10px;
            background-color: black;
            background-image: url("/naija.jpg");
            background-size: cover;
            background-position: center;
            align-items: center;
        }
        .userdetails{
            font-family: "Open sans";
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            label{
                color: #34ADDC;
                font-size: small;
            }
        }
        .cion{
            margin-left: 150px;
            display: flex;
            gap: 1rem;
        }
    }
    .messagecontent{
        font-family: 'Open Sans';
        h5{
            font-size: 22px;
            font-weight: bolder;
        }
        p{
            font-size: small;
            color: #5A5A5B;
            letter-spacing: 0.5px;
            word-spacing: 2px;
        }
    }

    a{
        /* background: ; */
box-shadow: 0px 9.88235px 26.3529px rgba(52, 173, 220, 0.25);
border-radius: 5px;


    }
`