import styled from "styled-components";
import { My_Products } from "../components/products/product";
import { Navbar } from "../components/admin_nav/adminNav";
import { Searchbar } from "../components/upsearch/upsearch";

const Allcover = styled.div`
    /* border : 1px solid blue; */
    background-color: rgb(249, 249, 249);
    padding-top: 10vh;
    padding-left: 10vw;
    padding-bottom: 100px;
`

const Alldet = styled.div`
    width : 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding : 20px 30px;
    span{
        font-family: 'Tinos';
        font-size: 20px;
    }
    div{
        /* border : 1px solid red; */
        display: flex;
        select{
            color : #34ADDC;
            font-family: "Open sans";
            padding : 10px 15px;
            background: #FFFFFF;
            border-radius: 4px;
            margin-right: 20px;
            font-size: small;
            border : none;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
        button{
            color : #FFF;
            font-family: "Open sans";
            padding : 5px 12px;
            background:  #34ADDC;;
            border-radius: 10px;
            margin-right: 20px;
            font-size: small;
            border : none;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 2px 4px #D3EDF8;
        }
    }
`

const Allprod = ()=>{
    return(
        <>
        <Navbar />
        <Searchbar />
        <Allcover>
           <Alldet>
               <span>All Products</span> <div><select name="" id="">
                   <option value="">All Categories</option>
                   <option value="">Blouse</option>
                   <option value="">Shirt</option>
                   <option value="">Cultural wears</option>
                   <option value="">Corporate</option>
                   </select> 
                   <button> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg> Add Product</button></div></Alldet>
              <div className="prodside">
            <My_Products />
              </div>
        </Allcover>
        </>
    )
}

export default Allprod;