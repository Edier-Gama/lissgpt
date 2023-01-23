import React from "react";
import { Link } from "react-router-dom";
import './Homepage.css'

function Homepage() {
    return (
        <React.Fragment>
            <header className="header-container">
             <nav>
                <ul className="links">
                 <a href="https://github.com/Edier-Gama/code-explainer">Repository</a>
                 <a href="https://openai.com/blog/openai-api/">API</a>
                </ul>
             </nav>
            </header>
        </React.Fragment>
    )
}

export {Homepage}