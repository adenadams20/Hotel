import React from "react";
import {
  BsFileEarmarkCheck,
  BsChatDots,
  BsPeopleFill,
  BsEnvelope,
  BsBuilding,
  BsGrid3X3Gap,
} from "react-icons/bs"; // icônes Bootstrap

const stats = [
  {
    value: 125,
    title: "Formulaires",
    description: "Total des formulaires soumis",
    icon: <BsFileEarmarkCheck size={30} className="text-primary" />,
  },
  {
    value: 40,
    title: "Messages",
    description: "Messages reçus",
    icon: <BsChatDots size={30} className="text-success" />,
  },
  {
    value: 600,
    title: "Utilisateurs",
    description: "Utilisateurs inscrits",
    icon: <BsPeopleFill size={30} className="text-info" />,
  },
  {
    value: 25,
    title: "E-mails",
    description: "Total des e-mails envoyés",
    icon: <BsEnvelope size={30} className="text-warning" />,
  },
  {
    value: 40,
    title: "Hôtels",
    description: "Hôtels enregistrés",
    icon: <BsBuilding size={30} className="text-danger" />,
  },
  {
    value: 2,
    title: "Entités",
    description: "Entités disponibles",
    icon: <BsGrid3X3Gap size={30} className="text-secondary" />,
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
              <div className="card-body d-flex align-items-center">
                {/* Icône */}
                <div className="me-3">{item.icon}</div>

                {/* Texte */}
                <div>
                  <h3 className="fw-bold">{item.value}</h3>
                  <span className="text-muted">{item.title}</span>
                  <p className="mt-2 mb-0">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
