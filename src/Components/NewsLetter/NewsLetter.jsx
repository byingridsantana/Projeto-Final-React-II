import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Receba ofertas exclusivas no seu e-mail</h1>
      <p>Assine nossa newsletter e mantenha-se atualizado</p>
      <div>
        <input type="email" placeholder="Digite seu email" />
        <button>Cadastrar</button>
      </div>
    </div>
  )
}

export default NewsLetter
