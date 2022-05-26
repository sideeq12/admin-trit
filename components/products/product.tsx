import { Product_section, Label, Sold } from "./productstyle"
import { productDB } from "./productlist"

export const My_Products = ()=>{
    return (
        <Product_section>
            <div className="titlesection">
                <label htmlFor="idcode" className="id">ID code</label>
                <label htmlFor="product name" className="name">Product name</label>
                <label htmlFor="category">Category</label>
                <label htmlFor="qty">Qty</label>
                <label htmlFor="Price">Price</label>
                <label htmlFor="stat">Stock</label>
                <label htmlFor="idcode">Action</label>
            </div>
            {productDB.map((db)=> <div className="titlesection inner">
                <label className="id" htmlFor="idcode">{db.id}</label>
                <Label im={db.image}><div></div>{db.name}</Label>
                <label htmlFor="category">{db.category}</label>
                <label htmlFor="qty">{db.qty}</label>
                <label htmlFor="Price">{"$"+db.price}</label>
                <Sold htmlFor="stat" show={db.status}>{db.status ? (<> In Stock</>) : (<>Sold out</>)}</Sold>
                <label htmlFor="idcode">Action</label>
            </div>)}
        </Product_section>
    )
}