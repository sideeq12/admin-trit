import { Order_id, Order_Summary, The_order, Info, Coolor } from "./ordered"



export const Use_order = () =>{
    return(
        <The_order>
            <Order_id>
                <div className="productinfo">
                <Info bgcolor={true} className="info">
                        <div className="pro">Product</div>
                        <div className="qty">Qty</div>
                        <div className="color">Color</div>
                        <div className="size">Sizec</div>
                        <div className="Price">Total Price</div>
                    </Info>
                    <Info bgcolor={false} className="info">
                        <div className="pro"> <div className="imahe"></div> Plain Round Neck</div>
                        <div className="qty">x01</div>
                        <div className="color"><Coolor bord="#138951"></Coolor></div>
                        <div className="size">XS</div>
                        <div className="Price">$120.00</div>
                    </Info>
                    <Info bgcolor={false} className="info">
                    <div className="pro"> <div className="imahe"></div> Plain Round Neck</div>
                        <div className="qty">x12</div>
                        <div className="color"><Coolor bord="#2A2A2A"></Coolor></div>
                        <div className="size">XXL</div>
                        <div className="Price">$120.00</div>
                    </Info>
                    <Info bgcolor={false} className="info">
                    <div className="pro"> <div className="imahe"></div> Plain Round Neck</div>
                        <div className="qty">x12</div>
                        <div className="color"><Coolor bord="#EAA046"></Coolor></div>
                        <div className="size">XXL</div>
                        <div className="Price">$120.00</div>
                    </Info>
                    <Info bgcolor={false} className="info">
                    <div className="pro"> <div className="imahe"></div> Plain Round Neck</div>
                        <div className="qty">x12</div>
                        <div className="color"><Coolor bord="#2A2A2A"></Coolor></div>
                        <div className="size">XXL</div>
                        <div className="Price">$120.00</div>
                    </Info>
                  
                  
                </div>
            <div className="data">
                <span>Delivery Address</span>
                <div className="cont">
                    <div className="line">
                        <label htmlFor="ADDRES">Customer Name  </label> Jonathan Smith
                    </div>
                    <div className="line">
                        <label htmlFor="ADDRES">Phone number  </label>+000-0000-0000
                    </div>
                    <div className="line">
                        <label htmlFor="ADDRES">Email Address   </label> <span>jonathansmith@gmail.com</span>
                    </div>
                    <div className="line">
                        <label htmlFor="ADDRES">Type</label>Delivery
                    </div>
                    <div className="line">
                        <label htmlFor="ADDRES">Payment method </label><label htmlFor="000000">
                            Paypal</label>
                    </div>

                </div>
            </div>
            </Order_id>
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