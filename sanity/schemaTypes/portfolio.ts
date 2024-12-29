import { defineField, defineType } from "sanity";

export const portfolio = defineType({
    name: "portfolio",
    title: "Portfolio",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Name ",
        }),
        defineField({
            name: "description",
            type: "text",
            title: " Description",
        }),
        defineField({
            name: "portfolioimage",
            type: "array",
            title: "Portfolio Image",
            of: [{ type: "image" }],
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Portfolio Slug",
            options: {
                source: "name",
            },
        }),

        defineField({
            name:"portofoliolink",
            type:"url",
            title:"Portfolio Link"

        }),
       
    ]
});
