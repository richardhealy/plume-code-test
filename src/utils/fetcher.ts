import axios from 'axios';

export const baseHeaders = {
  'x-apisports-key': import.meta.env.VITE_API_SPORTS_KEY ?? '',
};

export const axiosFetcher = (url: string) =>
  axios
    .get(url, {
      baseURL:
        import.meta.env.VITE_API_URL ?? `https://v1.formula-1.api-sports.io/`,
      headers: {
        ...baseHeaders,
      },
    })
    .then((res) => res.data);
