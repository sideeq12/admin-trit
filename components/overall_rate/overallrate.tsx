import { Overall, User_rate } from "./overall"
import Image from "next/image"


export const Rate_overall = ()=>{
    return(
        <Overall>
            <div className="count">
                <div className="point">
                    <strong>4.9</strong> <br />
                    <label htmlFor="">out of 5</label>
                </div>
                <div className="stars">
                    <div className="star">
                        <Image src="/stars.png" width={100} height={20} alt="stars images" />
                        <label htmlFor=""> From 9.7k reviews</label>
                    </div>
                </div>
            </div>
                 <User_rate>
                <div>
                <label htmlFor="5star" className="star">5 stars</label>
<progress id="5star" max="100" value="90"> 70% </progress>
<label htmlFor="5star" className="coun">2339</label>
                </div>
                <div>
                <label htmlFor="5star" className="star">4 stars</label>
<progress id="5star" max="100" value="80"> 70% </progress>
<label htmlFor="5star" className="coun">2119</label>
                </div>
                <div>
                <label htmlFor="5star" className="star">3 stars</label>
<progress id="5star" max="100" value="30"> 70% </progress>
<label htmlFor="5star" className="coun">639</label>
                </div>
                <div>
                <label htmlFor="5star" className="star">2 stars</label>
<progress id="5star" max="100" value="10"> 70% </progress>
<label htmlFor="5star" className="coun">139</label>
                </div>
                <div>
                <label htmlFor="5star" className="star">1stars</label>
<progress id="5star" max="100" value="20"> 70% </progress>
<label htmlFor="5star" className="coun">39</label>
                </div>
            </User_rate>
        </Overall>
    )
}