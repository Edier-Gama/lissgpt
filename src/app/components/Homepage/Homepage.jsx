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
                 <Link to='/login' className="token_link">INICIAR SESION</Link>
                 <Link to='/signup' className="token_link">CREAR CUENTA</Link>
                 <Link to='/signup' className="token_link">CREAR TOKEN</Link>
                </ul>
                </ul>
             </nav>

             <section className="home">
                <h1>LISS GPT</h1>
                <p>Liss GPT es un <b>asistente virtual personalizable que usa inteligencia
                    artificial</b><br/> para ayudarte en cualquier tipo de problema que tengas.
                    <br/><br/>
                    Para usar Liss GPT <b>debes tener un token de acceso gratuito de OpenAI,
                    </b><br/><br/>
                    Dale click a <b>CREAR TOKEN</b> para obtener uno
                </p>
                <div className="about_links">
                <a href="https://platform.openai.com/account/api-keys" className="token_link">CREAR TOKEN</a>
                <Link to='/login' className="token_link">INICIAR SESIÓN</Link>
                <Link to='/signup' className="token_link">REGISTRARTE</Link>
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