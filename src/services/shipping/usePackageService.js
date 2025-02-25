import { ENDPOINTS } from '@/configuration/endpoints';
import OrderPackage from '@/model/OrderPackage';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import packageService from './packageService';

export const useGetPackages = (filters, queryConfig) => {
  return useQuery({
    queryKey: [ENDPOINTS.packages, JSON.stringify(filters)],
    queryFn: () => packageService.getPackages(filters),
    select: (response) =>
      new PaginatedResponse(response?.data?.data, OrderPackage),
    ...queryConfig,
  });
};

export const useGetPackage = (id) => {
  return useQuery({
    queryKey: [ENDPOINTS.package(id)],
    queryFn: () => packageService.getPackage(id),
    select: (response) => new OrderPackage(response.data?.data?.content[0]),
  });
};

export const useAddOrderPackage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.packages],
    mutationFn: packageService.addOrderPackage,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.orderItems(payload.orderId)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.packages] });
    },
  });
};

export const useUpdateOrderPackage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.package(undefined)],
    mutationFn: packageService.updateOrderPackage,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.orderItems(payload.orderId)],
      });
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.package(payload.orderPackageId)],
      });
    },
  });
};

export const useApproveOrderPackage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.approveOrderPackage(undefined)],
    mutationFn: packageService.approveOrderPackage,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.package(payload.id)],
      });
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.orderItems(payload.orderId)],
      });
    },
  });
};

export const usePackageDeliveryStatus = (trackingId) => {
  return useQuery({
    queryKey: [ENDPOINTS.orderPackageDeliveryStatus(trackingId)],
    queryFn: () => packageService.getOrderDeliveryStatus(trackingId),
    select: (response) => response.data?.data?.content[0],
  });
};

export const useOrderPackageWebhook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.orderPackageWebhook],
    mutationFn: packageService.callOrderPackageWebhook,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.package(payload.orderPackageId)],
      });
    },
  });
};
