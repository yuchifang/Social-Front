import React from 'react'
import styled, { css } from 'styled-components'

export default function Register() {
    return (
        <WLogin >
            <WLoginContainer>
                <WLoginLeft>
                    <WLoginLogo>
                        SomeThing
                    </WLoginLogo>
                    <WLoginDesc>
                        Connect with friends and the world around you on SomeThing
                    </WLoginDesc>
                </WLoginLeft>
                <WLoginRight>
                    <WLoginBox>
                        <WLoginInput placeholder="Username" type="text" />
                        <WLoginInput placeholder="Email" type="Email" />
                        <WLoginInput placeholder="Password Again" type="password" />
                        <WLoginInput placeholder="Password" type="password"></WLoginInput>
                        <WLoginButton>Sign up</WLoginButton>
                        <WLoginRegisterButton>Log into Account</WLoginRegisterButton>
                    </WLoginBox>
                </WLoginRight>
            </WLoginContainer>
        </WLogin>
    )
}
const mainColor = "#1775ee"

const WLogin = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    display:flex;
    align-items:center;
    justify-content:center;
`

const WLoginContainer = styled.div`
    display:flex;
    width: 70%;
    height: 70%;
`

const LogoStyled = css`
    flex: 1;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const WLoginLeft = styled.div`
    ${LogoStyled}
`

const WLoginLogo = styled.h4`
    font-size: 50px;
    font-weight: bold;
    color:${mainColor};
    margin-bottom:10px;
`

const WLoginDesc = styled.span`
    font-size: 24px;
`

const WLoginRight = styled.div`
    ${LogoStyled}
`

const WLoginBox = styled.div`
    height:400px;
    padding: 20px;
    border-radius: 10px;
    display:flex;
    background-color: white;
    flex-direction: column;
    justify-content: space-between;
`

const WLoginInput = styled.input`
    height: 50px;
    border-radius: 10px;
    border: 1px solid gray;
    font-size: 18px;
    padding-left: 20px;
    &:focus{
        outline:none;
    }

`

const WLoginButton = styled.button`
    height: 50px;
    border:none;
    border-radius: 10px;
    background-color:${mainColor};
    color:white;
    font-size:20px;
    font-weight: bold;
    cursor:pointer;
`

const WLoginForgot = styled.span`
    text-align: center;
    color: ${mainColor}
`

const WLoginRegisterButton = styled.button`
    width: 60%;
    align-self: center;
    height: 60px;
    border:none;
    border-radius: 10px;
    background-color: #42b72a;
    color:white;
    font-size:20px;
    font-weight: bold;
    cursor:pointer;
`