import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import '../styles/pages/Landing.css'
import logoImg from '../images/Logo.svg'

function Landing(){
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="happy"/>

        <main>
          <h1>Leve Felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia
            de muitas crianças.
          </p>
        </main>

        <div className="location">
          <strong>Nova Andradina</strong>
          <span>Mato Grosso do Sul</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
        </Link>
      </div>
    </div>
  );
}

export default Landing;