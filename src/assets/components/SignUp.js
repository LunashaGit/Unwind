
import React from "react";

const SignUp = () => {

    return (
        <div>
            <input type="button" value="Close" onClick={toggle} />
            <h1>Inscrivez-vous pour réserver cette expérience</h1>
            <h2>Vous avez déjà un compte ?<a href="#">Connectez-vous</a></h2>
            <button>Inscription avec Facebook</button>
            <button>Inscription avec Google</button>
            <hr />
            <h2>Adresse e-mail</h2>
            <input type="text" placeholder="Entrez votre Adresse e-mail" />
            <button>S'inscrire</button>
        </div>
    );
};

export default SignUp;
