import styled from "styled-components";
import { ReviewList } from "../components/customer_reviews/cust_rev";
import { Grap } from "../components/graph/graph";
import { Pie_chart } from "../components/piechart/piechart";
import { Revenue } from "../components/revenue/revenue";
import { Navbar } from "../components/admin_nav/adminNav";
import { Searchbar } from "../components/upsearch/upsearch";

const MyHome = styled.div`
        background-color: #F9F9F9;
        padding-left: 10vw;
        padding-top: 10vh;
        .seccover{
            display: flex;
            padding-top: 10px;
            padding-left: 50px;
        }
`
const HomeLayout = styled.div`
    width: 90vw;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding : 10px 130px 10px 60px;
    span{
        font-family: 'Tinos';
    font-size: 25px;
    font-weight: bold;
    }
    label{
        border : 2px solid  rgba(211, 237, 248, 0.41);
        padding : 5px 10px;
        border-radius: 5px;
    }
    label:hover{
        cursor: pointer;
    }

`
const Sec = styled.div`
    width : 60%;
`
const Sec2 = styled.div`
    width: 40%;
    height: fit-content;

`

const Home = () =>{
    return(
        <>
        <Navbar />
        <Searchbar />
        <MyHome>
            <HomeLayout>
                <span>Dashboard</span>
                <label htmlFor="calender"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-range" viewBox="0 0 16 16">
  <path d="M9 7a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1zM1 9h4a1 1 0 0 1 0 2H1V9z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 15 April, 2022</label>
            </HomeLayout>
            <div className="seccover">
            <Sec>
            <Revenue />
            <Grap />
            </Sec>
            <Sec2>
                <Pie_chart />
                <ReviewList />
            </Sec2>
            </div>
        </MyHome>
        </>
    )
}

export default Home;