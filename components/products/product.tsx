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
                <label className="idcode" htmlFor="idcode"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#111111" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F43F3F" className="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></label>
            </div>)}
        </Product_section>
    )
}