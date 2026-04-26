import "server-only";
import { createClient } from "next-sanity";
import { apiVersion, assertSanityConfig, dataset, projectId } from "../env";

export function getSanityClient() {
  assertSanityConfig();

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });
}
