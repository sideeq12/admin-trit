import { Order_Summary, The_order } from "./ordered"



export const Use_order = () =>{
    return(
        <The_order>
            <Order_Summary>
            <div className="first">
            <span>Order Summary</span>
                <div className="price">
                    <div className="priceline">
                        <label>Order date </label>
                        <label> 3rd April, 2022. </label>
                    </div>
                    <div className="priceline">
                        <label>Order time</label>
                        <label> 5:27PM </label>
                    </div>
                    <div className="priceline">
                        <label>Sub Total </label>
                        <label> $480.00 </label>
                    </div>
                    <div className="priceline">
                        <label>Delivery </label>
                        <label>$5.00 </label>
                    </div>
                    <div className="priceline">
                        <label>Tax </label>
                        <label>$0.00 </label>
                    </div>
                    <div className="priceline tot" >
                        <label>Total </label>
                        <label>$485.00 </label>
                    </div>
                </div>
            </div>
            <div className="second">
                <span>Delivery Address</span>
                <div className="cont">
                    <div className="line">
                        <label htmlFor="ADDRES">Residential Address : </label>
                        Lorem ipsum dolor sit amet consectetur, adipisicing 
                    </div>
                    <div className="line">
                        <label htmlFor="ADDRES">Apatment No: </label>241
                    </div>
                    <div className="line">
                        <label htmlFor="ADDRES">City </label> : Paris
                    </div>
                    <div className="line">
                        <label htmlFor="ADDRES">Country :</label>France
                    </div>
                    <div className="line">
                        <label htmlFor="ADDRES">Postal Code :</label>000000
                    </div>

                </div>
            </div>
            </Order_Summary>
        </The_order>
    )
}