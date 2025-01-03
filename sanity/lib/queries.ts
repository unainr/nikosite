import { defineQuery } from "next-sanity";

export const PORTFOLIO_FETCH_QUERY = defineQuery(`*[_type == "portfolio"] | order(_createdAt desc) {
  _id,
  name,
  description,
  "portfolioimage": portfolioimage[]{
    "url": asset->url
  },
  slug,
  portofoliolink
}`);