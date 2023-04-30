import React, { useState } from "react";

const data = {
  personnes: [
    {
      nom: "Defline",
      prenom: "Romain",
      filmDisneyPrefere: "Les aristochats",
    },
    {
      nom: "Defline",
      prenom: "Angélique",
      filmDisneyPrefere: "Tous",
    },
    {
      nom: "Defline",
      prenom: "Léopold",
      filmDisneyPrefere: "Volt, star malgré lui",
    },
    {
      nom: "Defline",
      prenom: "Oscar",
      filmDisneyPrefere: "Pirate des caraïbes",
    },
    {
      nom: "Defline",
      prenom: "Zoé",
      filmDisneyPrefere: "Tous",
    },
    {
      nom: "Benzakour",
      prenom: "Amal",
      filmDisneyPrefere: "Les aristochats",
    },
    {
      nom: "Thomas",
      prenom: "Mary",
      filmDisneyPrefere: "Raiponce",
    },
  ],
};

function App() {
  const [texteAffiche, setTexteAffiche] = useState("");

  const handleClick = (film) => {
    setTexteAffiche(film);
  };

  return (
    <div>
      {data.personnes.map((personne) => (
        <button key={`${personne.prenom}-${personne.nom}`} onClick={() => handleClick(personne.filmDisneyPrefere)}>
          {`${personne.prenom} ${personne.nom}`}
        </button>
      ))}
      <p>{texteAffiche}</p>
    </div>
  );
}

export default App;
