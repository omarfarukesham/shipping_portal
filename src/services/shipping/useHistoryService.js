import { ENDPOINTS } from '@/configuration/endpoints';
import Histories from '@/model/Histories';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useQuery } from '@tanstack/react-query';
import historyService from './historyService';

export const useGetHistories = (filters, queryConfig) => {
  return useQuery({
    queryKey: [ENDPOINTS.histories, JSON.stringify(filters)],
    queryFn: () => historyService.getHistories(filters),
    select: (response) =>
      new PaginatedResponse(response?.data?.data, Histories),
    ...queryConfig,
  });
};

export const useGetHistory = (id) => {
  return useQuery({
    queryKey: [ENDPOINTS.history(id)],
    queryFn: () => historyService.getHistory(id),
    select: (response) => new Histories(response.data?.data?.content[0]),
  });
};
