interface BaseListResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export const endpoints = {
  searchCompany: "/search/company",
  discoverMovie: "/discover/movie",
  getMovieDetails: "/movie/:movie_id",
} as const;
export type SupportedEndpoints = keyof typeof endpoints;

export interface RequestParams {
  searchCompany: { query: string };
  discoverMovie: { sort_by?: string; with_companies: string; page?: number };
  getMovieDetails: { movie_id: string };
}

export interface ResponseTypes {
  searchCompany: SearchCompanyResponse;
  discoverMovie: DiscoverMovieResponse;
  getMovieDetails: GetMovieDetailsResponse;
}

// function that exists just to assert that the types are compatible
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function neverGetsCalled(x: never) {
  const endpoints = {} as SupportedEndpoints;
  let requestParams = {} as keyof RequestParams;
  let responseTypes = {} as keyof ResponseTypes;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  requestParams = endpoints;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  responseTypes = endpoints;
}

/////// RESPONSES  //////
export type SearchCompanyResponse = BaseListResponse<{
  id: string;
  logo_path: string;
  name: string;
  origin_country: string;
}>;

export type DiscoverMovieResponse = BaseListResponse<{
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}>;

export interface GetMovieDetailsResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie {
  id: number;
  release_date: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}
