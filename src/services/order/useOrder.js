import { ENDPOINTS } from '@/configuration/endpoints';
import OrderItem from '@/model/OrderItem';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useQuery } from '@tanstack/react-query';
import orderService from './orderService';

export const useOrderItems = (orderId) => {
  return useQuery({
    queryKey: [ENDPOINTS.orderItems(orderId)],
    queryFn: () => orderService.getOrderItems(orderId),
    select: (response) => new PaginatedResponse(response.data?.data, OrderItem),
  });
};
