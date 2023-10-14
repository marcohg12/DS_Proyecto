import React, { useEffect, useState } from "react";
import AdminWindow from "../components/AdminWindow";
import ClientWindow from "../components/ClientWindow";
import PublicationCard from "../components/PublicationCard";
import CategoryDropdown from "../components/CategoryDropdown";
import Axios from "axios";
import { BACKEND_ROUTE } from "../scripts/constants";

function PublicationViewer({ forUser }) {
  const [categoryId, setCategoryId] = useState(null);
  const [keyWords, setKeyWords] = useState("");
  const [categories, setCategories] = useState([]);
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    // Obtiene las categorías
    Axios.get(BACKEND_ROUTE + "/general/get_categories", {
      withCredentials: true,
    }).then((res) => {
      if (!res.data.error) {
        setCategories(res.data.result);
      }
    });

    // Obtiene las publicaciones
    setPublications([
      {
        id: 1,
        description: "Maquillaje para bodas",
        date: "2 de septiembre",
        category: "Bodas",
      },
      {
        id: 2,
        description: "Caracterización de la bruja escarlata",
        date: "25 de agosto",
        category: "Personajes",
      },
      {
        id: 3,
        description: "Maquillaje para cena de noche",
        date: "01 de febrero",
        category: "Formal",
      },
    ]);
  }, []);

  useEffect(() => {}, [categoryId]);

  if (forUser === "admin") {
    return (
      <AdminWindow>
        <div className="d-flex mt-4 mb-4">
          <div className="col d-flex md-6">
            <p className="me-4">Filtrar por categoría</p>
            <CategoryDropdown
              categories={categories}
              setCategoryId={setCategoryId}
            ></CategoryDropdown>
          </div>
          <div className="col d-flex md-6 justify-content-center">
            <p className="mx-4">Filtrar por palabras clave</p>
            <input
              type="search"
              className="flex-fill rounded form-control-sm"
              placeholder="Palabras clave"
              onChange={(e) => setKeyWords(e.target.value)}
            />
            <button type="button" className="btn btn-outline-secondary">
              Filtrar
            </button>
          </div>
        </div>
        <div className="row mt-4 mb-4"></div>
        <div className="row mt-4">
          {publications.map((publication) => {
            return (
              <PublicationCard
                toLink={
                  forUser === "admin"
                    ? "/edit_publication"
                    : "/view_publication"
                }
                id={publication.id}
                description={publication.description}
                date={publication.date}
                category={publication.category}
                key={publication.id}
              ></PublicationCard>
            );
          })}
        </div>
      </AdminWindow>
    );
  } else {
    return (
      <ClientWindow>
        <div className="d-flex mt-4 mb-4">
          <div className="col d-flex md-6">
            <p className="me-4">Filtrar por categoría</p>
            <CategoryDropdown
              categories={categories}
              setCategoryId={setCategoryId}
            ></CategoryDropdown>
          </div>
          <div className="col d-flex md-6 justify-content-center">
            <p className="mx-4">Filtrar por palabras clave</p>
            <input
              type="search"
              className="flex-fill rounded form-control-sm"
              placeholder="Palabras clave"
              onChange={(e) => setKeyWords(e.target.value)}
            />
            <button type="button" className="btn btn-outline-secondary">
              Filtrar
            </button>
          </div>
        </div>
        <div className="row mt-4 mb-4"></div>
        <div className="row mt-4">
          {publications.map((publication) => {
            return (
              <PublicationCard
                toLink={
                  forUser === "admin"
                    ? "/edit_publication"
                    : "/view_publication"
                }
                id={publication.id}
                description={publication.description}
                date={publication.date}
                category={publication.category}
                key={publication.id}
              ></PublicationCard>
            );
          })}
        </div>
      </ClientWindow>
    );
  }
}

export default PublicationViewer;
