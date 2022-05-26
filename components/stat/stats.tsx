import { Circle, Sta, Statistic } from "./statstyle"

export const Stats = ()=>{
    const deliveryshadow : string = "0px 2.10101px 4.20202px rgba(0, 0, 0, 0.1)";
    const myback : string = "rgba(211, 237, 248, 0.3)";
    const deliround : string = "#1EAD91"
    const delishadow : string = "0px 2.10101px 4.20202px rgba(0, 0, 0, 0.1)";
    const deliback : string = "rgba(245, 184, 94, 0.3)";
    const pediround : string = "#F43F3F"
    const transback : string = "rgba(9, 102, 138, 0.1)";
    const backshadow : string ="0px 2.10101px 4.20202px rgba(0, 0, 0, 0.1)"
    const backround : string = "#E2B93B"
    
  const getDegree =(rates : number)=>{
    const res = Math.floor((rates*360)/100);
    return res
  }
    return(
       <Statistic>
        <Sta shadow={deliveryshadow} back={myback}  delir={deliround} rate={getDegree(66)}>
            <div className="content">
                <strong>Delivered</strong>
                <label htmlFor="delivered">66% orders delivered</label>
            </div>
                <Circle className="circle">
                <div className="x-box">
                  <div className="percent">66%</div>
        </div>

                </Circle>
        </Sta>
        <Sta shadow={delishadow} back={deliback} delir={pediround} rate={getDegree(23)}>
            <div className="content">
                <strong>Pending</strong>
                <label htmlFor="delivered">23% orders delivered</label>
            </div>
            <Circle className="circle">
                <div className="x-box">
                  <div className="percent">23%</div>
        </div>

                </Circle>
        </Sta>
        <Sta shadow={backshadow} back={transback} delir={backround} rate={getDegree(11)}>
            <div className="content">
                <strong>In transit</strong>
                <label htmlFor="delivered">11% orders delivered</label>
            </div>
            <Circle className="circle">
                <div className="x-box">
                  <div className="percent">11%</div>
        </div>

                </Circle>
        </Sta></Statistic>
    )
}