import styled from "styled-components"
import { Navbar } from "../components/admin_nav/adminNav"
import { Searchbar } from "../components/upsearch/upsearch"

const Productlayer = styled.div`
    margin-top: 10vh;
    margin-left: 20vh;
    border : 1px solid red;
    display: flex;
`
const ImageSection = styled.div`
    width : 45%;
    background-color: blue;
    height : 90vh;
`
const Details = styled.div`
    width : 40%;
    /* background-color: red; */
    padding-top: 100px;
    height: 90vh;
    margin-left: 20px;
    /* border-left:  1px solid black; */
`
const DataInput = styled.div`
    width : 200px;
    width : 100%;
    font-family: 'Open Sans';
    input[type=text]{
        width : 100%;
        border: 1px solid #E6E6E6;
        height: 30px;
        border-radius: 5px;
        margin-top: 10px;
    }
`

const addProduct = ()=>{
    return(
        <>
        <Navbar />
        <Searchbar />
        <Productlayer>
        <ImageSection>
        hi there</ImageSection>
        <Details>
           <DataInput>
           <label htmlFor="product name"> Product name*</label>
           <input type="text" name="product name" />
           </DataInput>
           <DataInput>
           <label htmlFor="product name"> Product name*</label>
           <input type="text" name="product name" />
           </DataInput>
        </Details>
        </Productlayer>
        </>
    )
}

export default addProduct