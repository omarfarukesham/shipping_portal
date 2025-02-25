import { ORDER_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: ORDER_SERVICE_BASE_URL,
};

const orderService = {
  getOrderItems: (orderId) => {
    return httpService.get(ENDPOINTS.orderItems(orderId), {
      ...config,
    });
  },
};

export default orderService;
