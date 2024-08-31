import { readFile } from "fs/promises";
import parseGitHubUrl from "parse-github-url";
import { RegistryEntry } from "./schema";

export async function getGitHubBaseUrl() {
  const packageJson = JSON.parse(await readFile("./package.json", "utf-8"));

  if (!packageJson.repository) {
    return "https://example.com/registry";
  }

  const url = parseGitHubUrl(packageJson.repository.url);
  if (!url) {
    return "https://example.com/registry";
  }

  return `https://raw.githubusercontent.com/${url.repo}/main/registry`;
}

export function getComponentBasePath(type: RegistryEntry["type"]) {
  if (type === "registry:component") {
    return "./src/components";
  }

  return "./src/components/ui";
}
