import { defineQuery } from "next-sanity";

export const MOVIES_FETCH_QUERY = defineQuery(`*[_type == "movies"] {
    _id,
    title,
    description,
    "posterUrl": poster[0].asset->url,
    slug,
    releaseDate,
    trailerLink
  }`);