export type Ranking = {
  position: string;
  driver?: {
    id: number;
    name: string;
    abbr: string;
    number: number;
  };
  logo: string;
  points: string;
  team: {
    id: number;
    logo: string;
    name: string;
  };
};

export type RankingResponse = {
  response: Ranking[];
};
