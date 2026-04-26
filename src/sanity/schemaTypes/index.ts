import type { SchemaTypeDefinition } from "sanity";
import { actualiteType } from "./actualite";
import { serviceType } from "./service";

export const schemaTypes: SchemaTypeDefinition[] = [actualiteType, serviceType];
