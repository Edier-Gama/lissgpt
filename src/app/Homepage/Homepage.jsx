import React from "react";
import { Link } from "react-router-dom";
import '../styles/Homepage.css'

function Homepage() {
    return (
        <React.Fragment>
            <header className="header-container">
             <nav className="links-container">
                <ul className="links">
                 <Link to='/'>Home</Link>
                 <a href="https://github.com/Edier-Gama/code-explainer">Repositorio</a>
                 <a href="https://openai.com/blog/openai-api/">API</a>
                 <Link to='/login' className="login">Entrar</Link>
                 <Link to='/signup' className="login">Registrarte</Link>
                </ul>
             </nav>

             <section className="home">
                <h1>GPT ASSISTANT</h1>
                <p>All in one, your personal and customizable assistant using GPT-3 
                    tecnology
                </p>
             </section>
            </header>
        </React.Fragment>
    )
}

export {Homepage}