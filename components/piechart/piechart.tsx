import { PIE, Pie_ch } from "./piestyle"


export const Pie_chart = ()=>{
    const delivered : number  = 83
    return(
        <Pie_ch> 
        Order Status
        <PIE>
        <div className="x-box">
        </div>
        <div className="x-box-count">
            <div className="cover"><div className="tick" style={{"backgroundColor"  : "#34ADDC"}}></div>66% Delivered</div>
            <div className="cover"><div className="tick" style={{"backgroundColor"  : "#09668A"}}></div>11% Pending</div>
            <div className="cover"> <div className="tick" style={{"backgroundColor"  : "#66C8EE"}}></div>23% In transit</div>
        </div>
        </PIE>
        </Pie_ch>
    )
}