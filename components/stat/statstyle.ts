import styled from "styled-components";

interface mycolor{
    shadow : string,
    back : string
}

export const Sta = styled.div<mycolor>`

        background: ${props => props.back};
        box-shadow: ${props => props.shadow};
        padding : 30px 30px;
        margin : 20px;
        border-radius: 5px;
        width : fit-content;
        .content{
            display: flex;
            flex-direction: column;
            width: fit-content;
            border-right: 1px solid #5A5A5B;
            padding-right: 30px;
            label{
                font-size: small;
                color: #5A5A5B;
            }
        }

`

export const Statistic = styled.div`
    margin : 30px auto;
`

export const Circle = styled.div`
 /* body {
  font-family: 'Montserrat', sans-sherif;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  background-repeat: no-repeat;
  height: 100vh;
  color: #555555;
  overflow: hidden;
  
  display: flex;
  align-items: center;
  justify-content: center;
} */

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  margin: 0 20px;
  width: 280px;
  height: 350px;
  border-radius: 5px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
}

.card .percent {
  position: relative;
}

.card svg {
  position: relative;
  width: 210px;
  height: 210px;
  transform: rotate(-90deg);
}

.card svg circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #f0f0f0;
  stroke-width: 10;
  stroke-linecap: round;
}

.card svg circle:last-of-type {
  stroke-dasharray: 625px;
  stroke-dashoffset: calc(625px - (625px * var(--percent)) / 100);
  stroke: #3498db; 
}

.card .number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card .number h3 {
  font-weight: 200;
  font-size: 3.5rem;
}

.card .number h3 span {
  font-size: 2rem;
}

.card .title h2 {
  margin: 25px 0 0;
}

.card:nth-child(1) svg circle:last-of-type {
  stroke: #f39c12;
}

.card:nth-child(2) svg circle:last-of-type {
  stroke: #2ecc71;
}

`