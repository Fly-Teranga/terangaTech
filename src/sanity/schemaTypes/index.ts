import type { SchemaTypeDefinition } from "sanity";
import { actualiteType } from "./actualite";
import { contactSettingsType } from "./contactSettings";
import { serviceType } from "./service";

export const schemaTypes: SchemaTypeDefinition[] = [actualiteType, serviceType, contactSettingsType];
