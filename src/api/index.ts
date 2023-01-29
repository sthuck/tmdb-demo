import { createApiClient } from "./tmdb";

export const api = createApiClient(import.meta.env.VITE_TMDB_API_KEY);
