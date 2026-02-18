// src/config/api.ts

export const BASE_URL = "https://nongdash.skoolbridge.host/api";

export const API = {
  transcriptFilters: `${BASE_URL}/transcript/filters`,
  transcriptBySlug:  (slug: string) => `${BASE_URL}/transcript/slug/${slug}`,
  transcriptById:    (id: string | number) => `${BASE_URL}/transcript/${id}`,
  categories:        `${BASE_URL}/categories`,
  locations:         `${BASE_URL}/location/all`,
  
  // Blog endpoints
  blogs:             `${BASE_URL}/blogs`,
  blogBySlug:        (slug: string) => `${BASE_URL}/blogs/${slug}`,
};