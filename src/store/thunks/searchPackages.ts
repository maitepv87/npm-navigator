import axios from "axios";
import type { PackageSummary } from "../../types";

interface SearchResponse {
  objects: {
    package: {
      name: string;
      version: string;
      description: string;
      keywords?: string[];
    };
  }[];
}

export const searchPackages = async (
  term: string
): Promise<PackageSummary[]> => {
  try {
    const response = await axios.get(
      `https://registry.npmjs.org/-/v1/search?text=${term}`
    );

    const data: SearchResponse = response.data;

    return data.objects.map((searchResult) => {
      return {
        name: searchResult.package.name,
        version: searchResult.package.version,
        description: searchResult.package.description,
        keywords: searchResult.package.keywords ?? [],
      };
    });
  } catch (error) {
    console.error("Error fetching packages:", error);
    throw new Error("Failed to fetch package data.");
  }
};
