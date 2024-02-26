"use client";
import React from "react";

import { MotionDiv } from "@/lib/motion";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { useState } from "react";

type Filiere = "Informatique" | "Commerce" | "Administration";
type Entreprise = {
  nom_complet: string;
  siege: {
    adresse: string;
  };
};
const stageSearch = () => {
  const [codePostal, setCodePostal] = useState("");
  const [filiere, setFiliere] = useState<Filiere>("Informatique");
  const [entreprises, setEntreprises] = useState<Entreprise[]>([]);
  const activitePrincipaleCodes: Record<Filiere, string> = {
    Informatique: "58.29C, 62.02A, 63.11Z, 95.11Z, 26.20Z",
    Commerce: "43.11Z, 43.21A, 43.99C, 43.32A, 43.34Z",
    Administration: "66.22Z, 69.20Z, 70.22Z, 82.11Z, 82.99Z",
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const activitePrincipale = activitePrincipaleCodes[filiere];
    const url = `https://recherche-entreprises.api.gouv.fr/search?departement=${codePostal}&activite_principale=${activitePrincipale}&categorie_entreprise=PME,ETI&per_page=25`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Réponse bad request");
      if (response.status === 400) {
        return <div>test12</div>;
      }
      const data = await response.json();
      if (Array.isArray(data.results)) {
        setEntreprises(data.results);
      } else {
        console.error("TA MERE LARRAYS");
      }
    } catch (error) {
      console.error("Erreur lors de la requête à l'API", error);
    }
  };
  return (
    <div>
      <section className="relative flex flex-col justify-center gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center">
            <MotionDiv
              className="relative max-w-5xl"
              initial={{ opacity: 0, top: 20 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Text size="h2" variant="default">
                🚀 Bienvenue à bord de&nbsp;
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  G Mon Stage&nbsp;
                </span>
                ! 🚀
              </Text>
            </MotionDiv>
          </div>
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Text size="p" variant="default" className="mb-2 text-gray-400">
              Ajuster votre recherche grâce aux filtres, et trouver le stage
              masterclass !
            </Text>
          </MotionDiv>

          <div className="border-b border-gray-700 w-full mb-2"></div>
          <div className="flex items-center gap-10">
            <input
              max={95}
              maxLength={2}
              type="number"
              id="codePostalInput"
              className="py-3 px-4 block w-full border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Code postal"
              value={codePostal}
              onChange={(event) => setCodePostal(event.target.value)}
            />
            <input
              onChange={(event) => setFiliere(event.target.value as Filiere)}
              name="checkbox"
              value="Commerce"
              type="radio"
              id=""
            />
            <label className="text-white" htmlFor="">
              Commerce
            </label>
            <input
              onChange={(event) => setFiliere(event.target.value as Filiere)}
              name="checkbox"
              value="Informatique"
              type="radio"
              id=""
            />
            <label className="text-white" htmlFor="">
              Informatique
            </label>
            <input
              onChange={(event) => setFiliere(event.target.value as Filiere)}
              name="checkbox"
              value="Administration"
              type="radio"
              id=""
            />
            <label className="text-white" htmlFor="">
              Administration
            </label>
          </div>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {" "}
            <Button
              variant="secondary"
              size="lg"
              className="justify-center justify-self-end"
              onClick={handleSubmit}
            >
              Rechercher
            </Button>
          </MotionDiv>
        </div>
        <div>
          {entreprises.map((entreprise: Entreprise, index: number) => (
            <div className="flex" key={index}>
              <p className="text-white py-1"> {entreprise.nom_complet}</p>
              <p className="text-white py-1"> {entreprise.siege.adresse}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default stageSearch;
