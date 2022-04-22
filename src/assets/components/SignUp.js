import React from "react";

const SignUp = () => {
  return (
    <div className="signup">
      <h4>Connectez-vous maintenant pour voir le résultat !</h4>
      <p>
        Vous avez déjà un compte ? <em>Connectez-vous</em>
      </p>
      <button className="button button--hover button--facebook">
        Inscription avec Facebook
      </button>
      <button className="button button--hover button--google">
        Inscription avec Google
      </button>
      <p className="signup__ou">Ou</p>
      <h5>Adresse e-mail</h5>
      <input type="text" placeholder="Entrez votre Adresse e-mail" />
    </div>
  );
};

export default SignUp;
