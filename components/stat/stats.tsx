import { Circle, Sta, Statistic } from "./statstyle"

export const Stats = ()=>{
    const deliveryshadow : string = "0px 2.10101px 4.20202px rgba(0, 0, 0, 0.1)";
    const myback : string = "rgba(211, 237, 248, 0.3)";
    const delishadow : string = "0px 2.10101px 4.20202px rgba(0, 0, 0, 0.1)";
    const deliback : string = "rgba(245, 184, 94, 0.3)";
    const transback : string = "rgba(9, 102, 138, 0.1)";
    const backshadow : string ="0px 2.10101px 4.20202px rgba(0, 0, 0, 0.1)"

    return(
       <Statistic>
        <Sta shadow={deliveryshadow} back={myback}>
            <div className="content">
                <strong>Delivered</strong>
                <label htmlFor="delivered">66% orders delivered</label>
            </div>
                <Circle>
                <div class="card">
  <div class="percent">
    <svg>
      <circle cx="105" cy="105" r="100"></circle>
      <circle cx="105" cy="105" r="100" style="--percent: 60"></circle>
    </svg>
    <div class="number">
      <h3>30<span>%</span></h3>
    </div>
  </div>
  <div class="title">
    <h2>HTML</h2>
  </div>
</div>

<div className="card">
  <div className="percent">
    <svg>
      <circle cx="105" cy="105" r="100"></circle>
      <circle cx="105" cy="105" r="100" style="--percent: 70"></circle>
    </svg>
    <div className="number">
      <h3>70<span>%</span></h3>
    </div>
  </div>
  <div className="title">
    <h2>CSS</h2>
  </div>
</div>

<div className="card">
  <div className="percent">
    <svg>
      <circle cx="105" cy="105" r="100"></circle>
      <circle cx="105" cy="105" r="100" style="--percent: 90"></circle>
    </svg>
    <div className="number">
      <h3>90<span>%</span></h3>
    </div>
  </div>
  <div className="title">
    <h2>JavaScript</h2>
  </div>
</div>
                </Circle>

        </Sta>
        <Sta shadow={delishadow} back={deliback}>
            <div className="content">
                <strong>Pending</strong>
                <label htmlFor="delivered">23% orders delivered</label>
            </div>
        </Sta>
        <Sta shadow={backshadow} back={transback}>
            <div className="content">
                <strong>In transit</strong>
                <label htmlFor="delivered">11% orders delivered</label>
            </div>
        </Sta></Statistic>
    )
}