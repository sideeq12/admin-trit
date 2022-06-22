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
    padding-top: 50px;
    height: 90vh;
    margin-left: 20px;
    /* border-left:  1px solid black; */
`
const DataInput = styled.div`
    width : 200px;
    width : 100%;
    font-family: 'Open Sans';
    font-size: small;
    display: flex;
    flex-direction: column;
    gap : 0.5rem;
    margin-top: 10px;
    input[type=text]{
        width : 100%;
        border: 1px solid #E6E6E6;
        height: 30px;
        border-radius: 5px;
    }
    textarea{
        height: 100px;
        border-radius: 5px;
        border: 1px solid #E6E6E6;
    }
`
const Select = styled.div`
    margin-top: 20px;
    display: flex;
    font-size: small;
    div{
        margin-right: 20px;
        align-items: center;
        display: flex;
        gap : 0.3rem;
        input{
            border: 1px solid #E6E6E6;
            width : 100px;
            height : 35px;
            border-radius: 5px;
        }
    }
    select{
        border: 1px solid #E6E6E6;
        background-color: white;
        padding : 10px 15px;
    }
    button.upload{
        background: #34ADDC;
        border : none;
        color : white;
        padding : 5px 30px;
        box-shadow: 0px 9.88235px 26.3529px rgba(52, 173, 220, 0.25);
        border-radius: 5px;
        margin-right: 20px;
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
           <label htmlFor="product details"> Description * </label>
           <textarea />
           </DataInput>
           <DataInput>
           <label htmlFor="product name"> Available sizes</label>
           <input type="text" name="product name" />
           </DataInput>
           <DataInput>
           <label htmlFor="product name"> Available colors</label>
           <input type="text" name="product name" />
           </DataInput>
           <Select>
          <div>
          <select>
               <option value="">Category</option>
               <option value="">Clothes</option>
               <option value="">Accesories</option>
           </select>
          </div>
         <div>
         <select>
               <option value="">Sub Category</option>
               <option value="">T-shirt</option>
               <option value="">Blouses</option>
               <option value="">Corporate wears</option>
               <option value="">Cultural wears</option>
               <option value="">Hair</option>
               <option value="">Jewels</option>
           </select>
         </div>
         <div>
             <label htmlFor="price">Price</label>
             <input type="text" name="price"/>
         </div>
           </Select>
           <Select>
           <div>
             <label htmlFor="price">Proudct numbers</label>
             <input type="text" name="price"/>
         </div>
         <button className="upload">Upload</button>
         <button>Cancel</button>
           </Select>
           
        </Details>
        </Productlayer>
        </>
    )
}

export default addProduct