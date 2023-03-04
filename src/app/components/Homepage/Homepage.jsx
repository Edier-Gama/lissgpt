import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Homepage.css'
import ai_two from '../../assets/ai_two.svg'

function Homepage() {
    return (
        <React.Fragment>
            <header className="header-container">
             <nav className="links-container">
                <ul className="links">
                 <Link to='/'>Home</Link>
                 <a href="https://github.com/Edier-Gama/code-explainer">Repositorio</a>
                 <a href="https://openai.com/blog/openai-api/">API</a>
                 <ul className="links login-links">
                 <Link to='/login' className="login">Entrar</Link>
                 <Link to='/signup' className="login">Registrarte</Link>
                </ul>
                </ul>
             </nav>

             <section className="home">
                <h1>LISS GPT</h1>
                <p>Liss GPT es un asistente virtual personalizable que usa inteligencia
                    artificial <br/> para ayudarte en cualquier tipo de problema que tengas.
                    <br/><br/>
                    Para usar Liss GPT debes tener un token de acceso gratuito de OpenAI 
                    <br/><br/><br/>
                    1 - Da click a sacar token y crea o inicia sesión en la página de OpenAI <br/><br/>
                    2 - después dale click a "create new secret key" y copia esos caracteres <br/><br/>
                    3 - Vuelve a esta página y registrate o inicia sesión con tu token 
                </p>
                <div className="about_links">
                <a href="https://platform.openai.com/account/api-keys" className="token_link">SACAR TOKEN</a>
                <Link to='/login' className="token_link">INICIAR SESIÓN</Link>
                </div>
                <div className="home-img">
                <img src={ai_two} alt="" />
                </div>
             </section>
              
            </header>
        </React.Fragment>
    )
}

export {Homepage}