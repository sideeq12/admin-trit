import styled from "styled-components";
import { Email_section } from "../components/email_message/email";

const Mess = styled.div`
    padding-top: 15vh;
    padding-left: 10vw;
    background-color: #F9F9F9;
    span{
        font-family: 'Tinos';
        font-size: 18px;
        font-weight: bold;
        margin-left: 30px;
        margin-top: 30px;
    }
    .covert{
        /* border : 1px solid blue; */
    }
`


const MessageList = ()=>{
    return(
        <Mess>
            <span>Your Messages</span>
            <div className="covert">
                <Email_section />
            </div>
        </Mess>
    )
}


export default MessageList;