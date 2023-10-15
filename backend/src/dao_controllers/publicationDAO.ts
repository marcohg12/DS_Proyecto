import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import Publication from "../schemas/publicationS";

// Retorna una publicacion por su Id
export async function getPublication(publicationId: String) {
  const publication = await Publication.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(publicationId.toString()),
      },
    },
    {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $unwind: "$category",
    },
  ]);
  return publication[0];
}

// Retorna todas las publicaciones registradas
export async function getPublications() {
  return await Publication.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $unwind: "$category",
    },
  ]);
}

// Retorna todas las publicaciones que pertenecen a una categoría
export async function getPublicationsByCategory(categoryId: String) {
  return await Publication.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $unwind: "$category",
    },
    {
      $match: {
        $or: [
          { categoryId: new ObjectId(categoryId.toString()) },
          { "category.fatherCategory": categoryId.toString() },
        ],
      },
    },
  ]);
}

// Retorna todas las publicaciones que tengan al menos una palabra clave en los tags enviados
export async function getPublicationsByTags(tags: String[]) {
  return await Publication.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $unwind: "$category",
    },
    {
      $match: {
        tags: {
          $in: tags,
        },
      },
    },
  ]).collation({ locale: "en", strength: 1 });
}

// Registra una publicación
export async function registerPublication(
  description: String,
  tags: String[],
  categoryId: String
) {
  const publication = new Publication({
    categoryId: categoryId,
    date: new Date(),
    description: description,
    photo: "TEMPORAL",
    tags: tags,
  });

  const result = await publication.save();

  // Actualizamos la ruta de la foto a la del sistema de archivos
  await Publication.updateOne(
    { _id: result._id },
    { photo: "/photos/publications/" + result._id + ".png" }
  );
  return result._id;
}

// Actualiza una publicación
export async function updatePublication(
  publicationId: String,
  categoryId: String,
  description: String,
  tags: String[]
) {
  return await Publication.updateOne(
    { _id: publicationId },
    {
      categoryId: categoryId,
      description: description,
      tags: tags,
    }
  );
}

// Elimina una publicacion por su id
export async function deletePublication(publicationId: String) {
  return await Publication.deleteOne({ _id: publicationId });
}
