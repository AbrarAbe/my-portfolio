import * as contentful from "contentful";
import type { EntryFieldTypes } from "contentful";


export interface Project {
  contentTypeId: "project",
  fields: {
    title: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    description: EntryFieldTypes.Text,
    featuredImage: EntryFieldTypes.AssetLink,
    technologies: EntryFieldTypes.Array<EntryFieldTypes.Symbol>,
    liveLink: EntryFieldTypes.Text,
    githubLink: EntryFieldTypes.Text,
    shortDescription: EntryFieldTypes.Text,
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  // host: import.meta.env.PROD ? "delivery.contentful.com" : "cdn.contentful.com",
});
