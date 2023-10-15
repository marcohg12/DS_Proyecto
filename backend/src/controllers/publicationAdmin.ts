import * as publicationDAO from "../dao_controllers/publicationDAO";
const fs = require("fs");

// Obtiene una publicación por su Id
export async function getPublication(publicationId: String) {
  return await publicationDAO.getPublication(publicationId);
}

// Obtiene todas las publicaciones registradas
export async function getPublications() {
  return await publicationDAO.getPublications();
}

// Obtiene todas las publicaciones de una categoría
export async function getPublicationsByCategory(categoryId: String) {
  return await publicationDAO.getPublicationsByCategory(categoryId);
}

// Obtiene todas las publicaciones de un conjunto de palabras clave
export async function getPublicationsByTags(tags: String[]) {
  return await publicationDAO.getPublicationsByTags(tags);
}

// Registra una publicación
export async function registerPublication(
  description: String,
  tags: String,
  categoryId: String,
  photoPath: String
) {
  // Tomamos el string de palabras clave y generamos una lista con las palabras
  // Nota: las palabras se separan por coma
  const keywords = tags.split(",");
  // Quitamos los espacios en blanco al inicio y al final de cada palabra
  const trimmedKeywords = keywords.map((keyword) => keyword.trim());
  const publicationId = await publicationDAO.registerPublication(
    description,
    trimmedKeywords,
    categoryId
  );
  // Guardamos la foto en el sistema de archivos
  await fs.renameSync(
    photoPath,
    "photos/publications/" + publicationId + ".png"
  );
}

// Actualiza una publicación
export async function updatePublication(
  publicationId: String,
  description: String,
  tags: String,
  categoryId: String,
  photoPath: String
) {
  // Si hay una foto nueva
  if (photoPath !== "") {
    // Eliminamos la foto anterior
    await fs.unlink("photos/publications/" + publicationId + ".png", () => {});
    // Guardamos la nueva foto
    await fs.renameSync(
      photoPath,
      "photos/publications/" + publicationId + ".png"
    );
  }
  // Tomamos el string de palabras clave y generamos una lista con las palabras
  // Nota: las palabras se separan por coma
  const keywords = tags.split(",");
  // Quitamos los espacios en blanco al inicio y al final de cada palabra
  const trimmedKeywords = keywords.map((keyword) => keyword.trim());
  await publicationDAO.updatePublication(
    publicationId,
    categoryId,
    description,
    trimmedKeywords
  );
}

// Elimina una publicación por su Id
export async function deletePublication(publicationId: String) {
  await fs.unlink("photos/publications/" + publicationId + ".png", () => {});
  return await publicationDAO.deletePublication(publicationId);
}
