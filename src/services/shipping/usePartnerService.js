import { ENDPOINTS } from '@/configuration/endpoints';
import DeliveryPartner from '@/model/DeliveryPartner';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import partnerService from './partnerService';

export const useGetPartners = (filters, queryConfig) => {
  return useQuery({
    queryKey: [ENDPOINTS.partners, JSON.stringify(filters)],
    queryFn: () => partnerService.getPartners(filters),
    select: (response) =>
      new PaginatedResponse(response?.data?.data, DeliveryPartner),
    ...queryConfig,
  });
};

export const useGetPartner = (id) => {
  return useQuery({
    queryKey: [ENDPOINTS.partner(id)],
    queryFn: () => partnerService.getPartner(id),
    select: (response) => new DeliveryPartner(response.data?.data?.content[0]),
  });
};

export const useAddPartner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.partners],
    mutationFn: partnerService.addPartner,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.partners] });
    },
  });
};

export const useEditPartner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.partner(undefined)],
    mutationFn: partnerService.editPartner,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.editPartner(payload.id)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.partners] });
    },
  });
};
