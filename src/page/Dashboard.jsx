import React from "react";

const stats = [
  {
    value: 125,
    title: "Formulaires",
    description: "Total des formulaires soumis",
  },
  {
    value: 40,
    title: "Messages",
    description: "Messages reçus",
  },
  {
    value: 600,
    title: "Utilisateurs",
    description: "Utilisateurs inscrits",
  },
  {
    value: 25,
    title: "E-mails",
    description: "Total des e-mails envoyés",
  },
  {
    value: 40,
    title: "Hôtels",
    description: "Hôtels enregistrés",
  },
  {
    value: 2,
    title: "Entités",
    description: "Entités disponibles",
  },
];

export default function Dashboard() {
  return (
    <div className="p-3">
      <h1 className="fs-3 fw-bold mb-3">Dashboard</h1>
      <h2 className="fs-4 mb-4">Bienvenue sur RED Product</h2>
      <p className="text-muted">
        Vue d’ensemble des statistiques de la plateforme
      </p>

      <div className="row g-3 mt-3">
        {stats.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h3 className="fw-bold">{item.value}</h3>
                <span className="text-muted">{item.title}</span>
                <p className="mt-2 mb-0">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
