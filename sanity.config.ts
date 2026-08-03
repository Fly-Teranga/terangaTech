import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { dataset, projectId, studioBasePath } from "./src/sanity/env";
import { structure, studioTemplates } from "./src/sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "FakiAirline Studio",
  projectId: projectId || "missing-project-id",
  dataset: dataset || "missing-dataset",
  basePath: studioBasePath,
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
    templates: (previous) => [...previous, ...studioTemplates],
  },
});
