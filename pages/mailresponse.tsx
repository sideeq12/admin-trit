import styled from "styled-components";
import { Email_section } from "../components/email_message/email";
import { Navbar } from "../components/admin_nav/adminNav";
import { Searchbar } from "../components/upsearch/upsearch";

const Mess = styled.div`
    padding-top: 15vh;
    padding-left: 10vw;
    background-color: #F9F9F9;
    padding-bottom: 100px;
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
       <>
        <Navbar />
        <Searchbar />
        <Mess>
            <span>Your Messages</span>
            <div className="covert">
                <Email_section />
            </div>
        </Mess>
       </>
    )
}


export default MessageList;