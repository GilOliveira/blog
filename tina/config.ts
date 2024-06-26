import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "article_en",
        label: "Articles",
        path: "content/en/articles",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
          },
          {
            label: "Categories",
            name: "categories",
            type: "string",
            list: true,
            options: [
              {
                value: "Explainer",
                label: "Explainer",
              },
              {
                value: "Opinion",
                label: "Opinion",
              },
              {
                value: "Testimony",
                label: "Testimony",
              },
              {
                value: "Tutorial",
                label: "Tutorial",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "article_pt",
        label: "Artigos",
        path: "content/pt/articles",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
          },
          {
            label: "Categories",
            name: "categories",
            type: "string",
            list: true,
            options: [
              {
                value: "Explainer",
                label: "Explainer",
              },
              {
                value: "Opinion",
                label: "Opinion",
              },
              {
                value: "Testimony",
                label: "Testimony",
              },
              {
                value: "Tutorial",
                label: "Tutorial",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
