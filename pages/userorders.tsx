import styled from "styled-components";
import { Order_details } from "../components/order_details/order";
import { Stats } from "../components/stat/stats";
import {Navbar } from "../components/admin_nav/adminNav"
import { Searchbar } from "../components/upsearch/upsearch"

const Theorder = styled.div`
    padding-top: 10vh;
    padding-left: 10vw;
    background-color: #F9F9F9;
    padding-bottom: 100px;

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
const Sta = styled.div`
    width: 90vw;
    display: flex;
`

const TheUserOrders = ()=>{
    return(
       <>
       <Navbar />
       <Searchbar />
        <Theorder>
               <HomeLayout>
                <span>Orders</span>
                <label htmlFor="calender"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-range" viewBox="0 0 16 16">
  <path d="M9 7a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1zM1 9h4a1 1 0 0 1 0 2H1V9z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 15 April, 2022</label>
            </HomeLayout>
        <Sta>
            <Stats />
        </Sta>
        <Order_details />
        </Theorder>
       </>
    )
}

export default TheUserOrders;