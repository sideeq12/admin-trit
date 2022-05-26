import { Order_section, SPAN } from "./orderdetail"
import { orderdata } from "./orderdata"


export const Order_details = () =>{
    return(
        <Order_section>
            <div className="titlesection">
                <strong>Order details</strong>
                <select>
                    <option>Category</option>
                    <option>Delivered</option>
                    <option>Pending</option>
                    <option>In transit</option>
                </select>
            </div>
            <div className="headlist">
                <label htmlFor="id">ID</label>
                <label htmlFor="order details">Order details</label>
                <label htmlFor="customer">Customer</label>
                <label htmlFor="Price">Price</label>
                <label htmlFor="Delay date">Delay date</label>
                <label htmlFor="stat">Status</label>
            </div>
            {orderdata.map((odata)=> <div className="headlist list">
                <label className="id" htmlFor="id">{odata.id}</label>
                <label htmlFor="order details">{odata.order_date}</label>
                <label className="cut" htmlFor="customer">{odata.customer}</label>
                <label htmlFor="Price">{odata.price}</label>
                <label htmlFor="Delay date">{odata.delivery_date}</label>
                <SPAN className="lab" status={odata.status}><strong>{odata.status_details}</strong></SPAN>
            </div>)}
        </Order_section>
    )
}