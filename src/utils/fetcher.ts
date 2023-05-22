import axios from 'axios';

export const baseHeaders = {
  'x-apisports-key': 'b054b6d194f036f0498442e261b1cebc',
};

export const axiosFetcher = (url: string) =>
  axios
    .get(url, {
      baseURL: `https://v1.formula-1.api-sports.io/`,
      headers: {
        ...baseHeaders,
      },
    })
    .then((res) => res.data);
