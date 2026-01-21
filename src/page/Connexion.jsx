import React, { useState } from "react";
import img from "../assets/img/bg-img.jpeg";
import api from "../service/api"; // Axios configuré avec baseURL
import { useNavigate } from "react-router-dom";

const backgroundImg = img;

export default function Connexion() {
  const navigate = useNavigate();

  // États
  const [email, setEmail] = useState("");
  const [motdepasse, setMotdepasse] = useState("");
  const [garderConnecte, setGarderConnecte] = useState(false);
  const [erreur, setErreur] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", {
        email: email,
        password: motdepasse,
      });

      // On récupère le token JWT
      const token = res.data.access_token || res.data.token;

      // On stocke le token dans localStorage
      localStorage.setItem("token", token);

      // Redirection après connexion réussie
      navigate("/profile");

    } catch (err) {
      console.error(err);
      setErreur("Email ou mot de passe incorrect");
    }
  };

  return (
    <>
      <div
        className="containe-fluid d-flex flex-column justify-content-center px-5 align-items-center vh-100"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="form-group bg-white shadow p-5 wh-50 px-5"
        >
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control border-bottom"
              id="email"
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
              id="motdepasse"
              value={motdepasse}
              onChange={(e) => setMotdepasse(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="checkbox"
              name="terme"
              id="terme"
              checked={garderConnecte}
              onChange={(e) => setGarderConnecte(e.target.checked)}
            />
            <span> Garder-moi connecté</span>
          </div>

          {erreur && (
            <div className="alert alert-danger">
              {erreur}
            </div>
          )}

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="text-center btn btn-dark w-100 mt-3"
            >
              Se connecter
            </button>
          </div>
        </form>

        <p className="mt-3">
          Vous n'avez pas de compte ? <a href="/Inscriptions">S'inscrire</a>
        </p>
      </div>
    </>
  );
}
