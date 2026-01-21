import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/img/bg-img.jpeg';
import { registerUser } from '../service/api';
const backgroundImg = img;

export default function Inscriptions() {
  const navigate = useNavigate();

  // États
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [motdepasse, setMotdepasse] = useState("");
  const [motdepasseConfirm, setMotdepasseConfirm] = useState("");
  const [terme, setTerme] = useState(false);
  const [erreur, setErreur] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErreur("");

    // Validation simple côté frontend
    if (!terme) {
      setErreur("Vous devez accepter les termes et conditions");
      return;
    }
    if (motdepasse !== motdepasseConfirm) {
      setErreur("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const data = {
        name: nom,
        email: email,
        password: motdepasse,
        password_confirmation: motdepasseConfirm
      };

      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Stocker le token immédiatement si backend renvoie un token
      if (res.token) {
        localStorage.setItem("token", res.token);
      }

      alert("Inscription réussie ! Connectez‑vous maintenant.");
      navigate("/Connexion");

    } catch (err) {
      console.error(err);
      // Afficher le message d'erreur du backend si disponible
      setErreur(err.message || err.error || "Erreur lors de l'inscription");
    }
  };

  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <form onSubmit={handleSubmit} className="form-group bg-white shadow p-5 px-5 w-100" style={{ maxWidth: "400px" }}>
        <p className="mb-4">Inscrivez‑vous en tant qu'Admin</p>

        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input
            type="text"
            className="form-control border-bottom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control border-bottom"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mot de passe</label>
          <input
            type="password"
            className="form-control border-bottom"
            value={motdepasse}
            onChange={(e) => setMotdepasse(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirmer le mot de passe</label>
          <input
            type="password"
            className="form-control border-bottom"
            value={motdepasseConfirm}
            onChange={(e) => setMotdepasseConfirm(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="terme"
            checked={terme}
            onChange={(e) => setTerme(e.target.checked)}
          />
          <label htmlFor="terme" className="form-check-label">
            J'ai lu et j'accepte les termes et conditions
          </label>
        </div>

        {erreur && (
          <div className="alert alert-danger">
            {erreur}
          </div>
        )}

        <button type="submit" className="btn btn-dark w-100 mt-3">
          S'inscrire
        </button>
      </form>

      <p className="mt-3">
        Vous avez déjà un compte ? <a href="/Connexion">Se connecter</a>
      </p>
    </div>
  );
}
