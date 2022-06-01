import styled from "styled-components"
import { Comments } from "../components/commentx/commentx"
import { Rate_overall } from "../components/overall_rate/overallrate"


const Allmanager = styled.div`
    width : 100vw;
    padding-left: 10vw;
    padding-top: 10vh;
    background-color: #F9F9F9;
`
const Manag = styled.div`
    /* border : 1px solid blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding : 20px 50px;
    span{
        font-family: 'Tinos';
        font-weight: bold;
        font-size: 18px;
    }
    select{
        font-family: "Open sans";
        color: #34ADDC;
        border-radius: 4px;
        border : none;
        background-color: #FFF;
        padding : 7px 15px;
    }
`
const Coverrate = styled.div`
    /* border : 1px solid blue; */
`
const ReviewsManager = ()=>{
    return(
        <Allmanager>
            <Manag>
                <span>
                    Manage Reviews
                </span>
                <select name="" id="">
                    <option value="">All Commnents</option>
                    <option value="">Latest</option>
                    <option value="">Category</option>
                </select>
                </Manag>
                <Coverrate>
                    <Rate_overall />
                    <Comments />
                </Coverrate>
        </Allmanager>
    )
}

export default ReviewsManager