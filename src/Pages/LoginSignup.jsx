import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='digite o seu nome' />
          <input type="email" placeholder='digite o seu email' />
          <input type="password" placeholder='digite a sua senha' />
        </div>
        <button>Continuar</button>
        <p className="loginsignup-login">Já tem uma conta?<span> entre aqui</span></p>
        <div className="div loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Ao continuar, eu concordo com os termos de uso e política de privacidade</p>
        </div>
      </div>      
    </div>
  )
}

export default LoginSignup
