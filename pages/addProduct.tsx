import styled from "styled-components"
import { Navbar } from "../components/admin_nav/adminNav"
import { Searchbar } from "../components/upsearch/upsearch"
import React, { useState } from "react"

interface labcheck {
    stat : boolean
}

const Productlayer = styled.div`
    margin-top: 10vh;
    margin-left: 20vh;
    display: flex;
`
const ImageSection = styled.div`
    width : 40%;
    border-right: 1px solid black;
    margin-top: 20px;
    height : 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Details = styled.div`
    width : 45%;
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
    flex-wrap: wrap;
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
    div.wide{
        width: 100%;
        margin-top: 10px;
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
    button.cancle{
        background: #CD5334;
        border : none;
        color : white;
        padding : 5px 30px;
        box-shadow: 0px 9.88235px 26.3529px rgba(52, 173, 220, 0.25);
        border-radius: 5px;
        margin-right: 20px;
    }
    .price{
        input{
            width : 80px;
        }
    }
    button:hover{
        cursor : pointer;
    }

`
const Color = styled.span`
    color : white;
    background: rgba(52, 173, 220, 0.89);
    padding : 5px;
    border-radius: 3px;
`
const ImageSecCover = styled.div`
    margin : 10px auto;
    /* border : 1px solid blue; */
    display : flex;
    justify-content: center;
    align-items: center;
    input[type="file"]{
        display: none;
    }
`
const Lab = styled.label<labcheck>`
        height: 100px;
        width : 300px;
        display : flex;
        align-items: center;
        justify-content: center;
        color:${props => props.stat ? "white" : " #34ADDC"};
        background-color: ${props => props.stat ? "#34ADDC" : " #fff"};
        border : 1px solid #34ADDC;
        /* box-shadow: 0px 9.88235px 26.3529px rgba(52, 173, 220, 0.25); */
        border-radius: 5px;
`
const addProduct = ()=>{
    const [colors, setCoolors ]= useState<string[]>([])
    const [sizes, setSizes ] = useState<string[]>([])
    const [name, setName ] = useState("")
    const [description, setDescription ] = useState("")
    const [price, setPrice ] = useState("")
    const [products, setProducts ] = useState({})
    const [Pcount, setPCount ] = useState("")
    const [category, setCategory] = useState("")
    const [ subCategory, setSubCategory ] = useState("")
    const [ firstfile, setfirstfile ] = useState(false)
    const [secfile, setSecfile ] = useState(false);
    const [ thirdfile, setThirdfile] = useState(false)
    const [fourtfile, setFourtfile ] = useState(false)
    
    const seName = (event : React.ChangeEvent<HTMLInputElement>) =>{
        const datatype = event.target.name
        const mainData = event.target.value;
       if(datatype === "product name"){
           setName(mainData)
       }else if(datatype === "price"){
           setPrice(mainData)
       }else if(datatype === "count"){
           setPCount(mainData)
       }else if(datatype ===  "color"){
        const coolors = event.target.value.split(" ")
        setCoolors(coolors)
       }
    }
    const setSz = (event : React.ChangeEvent<HTMLSelectElement>)=>{
        const value = event.target.value;
        const data = event.target.name;
       if(data === "size"){
        setSizes([...sizes, value])
       }else if(data === "category"){
            setCategory(value)
       }else if(data === "subCategory"){
            setSubCategory(value)
       }  
    }
    const seT = (event : React.ChangeEvent<HTMLTextAreaElement>)=>{
        setDescription(event.target.value)
    }
    const sendData = ()=>{
        setProducts({...products, name : name, description : description, size : sizes, colors : colors, category : category, subCategory : subCategory, price : price, count : Pcount })
       if(name && description){
        console.log("cool" , products)
       }else{
            console.log("naa ", products)
       }
    }
    const imageChec = (event : React.ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files;
        const name = event.target.name
        console.log("the file is", file)
        setfirstfile(true)
    }
    const imageChe = (event : React.ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files;
        const name = event.target.name
        console.log("the name is ", name)
        setSecfile(true)
    }
    const imageCh = (event : React.ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files;
        const name = event.target.name
        console.log("the name is", name)
        setThirdfile(true)
    }
    const imageC = (event : React.ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files;
        const name = event.target.name
        setFourtfile(true)
    }
    return(
        <>
        <Navbar />
        <Searchbar />
        <Productlayer>
        <ImageSection>
         <ImageSecCover>
                <input type="file" name="first" id="file1" onChange={imageChec} />
                <Lab htmlFor="file1" stat={firstfile} >Upload an Image</Lab>
            </ImageSecCover>
            <ImageSecCover>
                <input type="file" name="secfile" id="file2" onChange={imageChe} />
                <Lab htmlFor="file2" stat={secfile} >Upload an Image</Lab>
            </ImageSecCover> 
            <ImageSecCover>
                <input type="file" name="thirdfile" id="file3" onChange={imageCh} />
                <Lab htmlFor="file3" stat={thirdfile} >Upload an Image</Lab>
            </ImageSecCover>
            <ImageSecCover>
                <input type="file" name="fourtfile" id="file4" onChange={imageC} />
                <Lab htmlFor="file4" stat={fourtfile}> Upload an Image</Lab>
            </ImageSecCover>
        </ImageSection>
        <Details>
           <DataInput>
           <label htmlFor="product name"> Product name*</label>
           <input type="text" name="product name" onChange={seName} />
           </DataInput>
           <DataInput>
           <label htmlFor="product details"> Description * </label>
           <textarea onChange={seT} />
           </DataInput>
          <Select>
              <div className="wide">
          <select name="size" onChange={setSz}>
               <option value="nothing">select size</option>
               <option value="x-small">x-small</option>
               <option value="small">small</option>
               <option value="">large</option>
               <option value="">x-larger</option>
           </select>
           {sizes.map(col=> <Color>{col}</Color>)}
          </div>
          <div className="wide">
          <div> <label htmlFor="color">Colors <small>(seperated with space)</small></label> <br/>
          <input type="text" name="color" id="" onChange={seName}/></div>
          {colors.map(col=> <Color>{col}</Color>)}
          
          </div>
          </Select>
           <Select>
          <div>
          <select name="category">
               <option value="">Category</option>
               <option value="">Clothes</option>
               <option value="">Accesories</option>
           </select>
          </div>
         <div>
         <select name="subCategory">
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
             <label htmlFor="price">Price ($)</label>
             <input type="text" name="price" onChange={seName}/>
         </div>
           </Select>
           <Select>
           <div className="price">
             <label htmlFor="price">Proudct numbers </label>
             <input type="text" name="count" onChange={seName}/>
         </div>
         <button className="upload" onClick={sendData}>Upload</button>
         <button className="cancle">Cancel</button>
           </Select>
           
        </Details>
        </Productlayer>
        </>
    )
}

export default addProduct