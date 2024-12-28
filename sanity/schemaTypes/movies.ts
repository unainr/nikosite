import { defineField, defineType } from "sanity";

export const movies = defineType({
    name: "movies",
    title: "Movies",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Movie Title",
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Movie Description",
        }),
        defineField({
            name: "poster",
            type: "array",
            title: "Movie Posters",
            of: [{ type: "image" }],
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Movie Slug",
            options: {
                source: "title",
            },
        }),
        defineField({
            name: "releaseDate",
            type: "date",
            title: "Release Date"
        }),
        defineField({
            name: "trailerLink",
            type: "url",
            title: "Trailer Link"
        }),
    ]
});
