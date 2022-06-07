import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { My_test } from '../components/test/test'

const Login = styled.div`

  width : 100vw;
  height: 100vh;
  display: flex;
  span{
    margin-left: 50px;
    color : white;
    font-size: small;
    label{
      font-weight: bold;
      margin-left: 10px;
      &:hover{
        cursor: pointer;
      }
    }
  }
  button{
    margin-bottom: 20px;
    background: #FFFFFF;
    box-shadow: 0px 5px 26.3529px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    color : #34ADDC;
    padding : 10px 170px;
    border : none;
    margin-top: 30px;
    margin-left: 50px;
    &:hover{
      cursor: pointer;
    }
  }
  .imageleft, form{
    height: 100vh;
    width : 50vw;
  }
  .imageleft {
    background-image: url("/admin_pic.jpg");
    background-position: center;
    background-size: cover;
    z-index: -1;
    .imageleft_inner{
    background: rgba(211, 235, 245, 0.46);
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-left: 50px;
    img{
      position: absolute;
      left : 80px;
      bottom : 100px;
      z-index: 3;
    }
    .circle{
      z-index: 2;
      width : 300px;
      height : 300px;
      border-radius: 100%;
      background-color:#D3EDF8;
      opacity: 0.5;
      position: absolute;
    }
    .cir1{
      left: -100px;
      bottom: 0px;
    }
    .cir2{
      left: 50px;
      bottom: -50px;
    }
    .cir3{
      left: 200px;
      bottom: -100px;
    }
    span{
      color : black;
      font-size: 30px;
      font-weight: bold;
      margin-left: 0px;
      font-family: "Tinos";

    }
  }
  }
  form{
    background-color: #34ADDC;
    padding-top: 20vh;
    padding-left: 3vw;
  }

`
const DataInput = styled.div`
  width : 90%;
  margin-left: 50px;
  margin-top: 30px;
  color : #FFF;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  font-size: small;
  input {
    margin-top: 10px;
    background: #F9F9F9;
    border: 1px solid #E6E6E6;
    border-radius: 5px;
    height: 30px;
    width : 400px;
  }
`
const Info  = styled.div`
  margin-left: 50px;
  margin-top: 30px;
  color : white;
  margin-right: 30px;
  font-size: small;
  input{
    height: 20px;
    width  : 20px;
    border :  1px solid #E6E6E6;
    margin-right: 10px;
  }
`

const Home: NextPage = () => {
  const [sign, setSign ] = useState(true)
  
  return (
    <Login>
      <div className="imageleft">
        <div className="imageleft_inner">
          <span>{ sign ? "Register" : "Sign in"}</span>
          <p>{sign ? "Create an account to get started" : "Enter your details to sign in your account."}</p>
        <img src="/tritezlogo.png" alt="tritez market place logo" />
        <div className="circle cir1"></div>
        <div className="circle cir2"></div>
        <div className="circle cir3"></div>
        </div>
      </div>
      <form action="">
      {sign ?   <DataInput>
          <label htmlFor="">Username</label>
          <input type="text" />
        </DataInput> : null}
        <DataInput>
          <label htmlFor="">Email :</label>
          <input type="email" />
        </DataInput>
        <DataInput>
          <label htmlFor="">Password :</label>
          <input type="password" />
        </DataInput>
        {sign ? <DataInput>
          <label htmlFor="">Confirm Password :</label>
          <input type="password" />
        </DataInput> : null}
        <Info>
        <input type="checkbox" /> By clicking on this box, you agree to accept out terms and agreements.
        </Info>
        <button type='submit'>{ !sign ? "Login" : "Register"}</button>
          <br />
        <span>Already a menber ? <label htmlFor="Login" onClick={()=> setSign(!sign)} >{ sign ? "Login" : "Register"}</label></span>
      </form>
    </Login>
  )
}

export default Home
