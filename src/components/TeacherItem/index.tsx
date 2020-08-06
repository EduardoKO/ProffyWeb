import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/59851876?s=460&u=f101c0ceecaa0a0f2c95bcdcf5a8ec2ccf7264ff&v=4" alt="Eduardo Oliva"/>
        <div>
          <strong>Eduardo Oliva</strong>
          <span>Matemática</span>
        </div>
      </header>
    
      <p>
        Apaixonado por contas que sejam muito fáceis.
        <br /> <br />
      Gosto principalmente de ensinar contas de +.
      </p>
    
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 90,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
    )
  }
  
  export default TeacherItem;
  