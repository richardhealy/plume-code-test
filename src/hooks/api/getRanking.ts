import useSWR from 'swr';
import { RankingResponse } from '../../types/Ranking';
import { axiosFetcher } from '@/utils/fetcher';

export const useRanking = (teams: boolean, season: string) => {
  const endpoint = teams ? `/rankings/teams` : `rankings/drivers`;

  const { data, isLoading, error, mutate } = useSWR<RankingResponse>(
    `${endpoint}?season=${season}`,
    axiosFetcher,
  );

  return {
    rankings: data,
    isLoading,
    error,
    mutate,
  };
};
