import { SHIPPING_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: SHIPPING_SERVICE_BASE_URL,
};

const packageService = {
  getPackages: (filters) => {
    return httpService.get(ENDPOINTS.packages, {
      ...config,
      params: {
        ...filters,
        // userType: 'ADMIN',
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },
  getPackage: (id) => {
    return httpService.get(ENDPOINTS.package(id), {
      ...config,
    });
  },
  addOrderPackage: (data) => {
    return httpService.post(ENDPOINTS.packages, data, { ...config });
  },
  updateOrderPackage: (data) => {
    return httpService.patch(ENDPOINTS.package(data.orderPackageId), data, {
      ...config,
    });
  },
  approveOrderPackage: (data) => {
    return httpService.post(ENDPOINTS.approveOrderPackage(data.id), data, {
      ...config,
    });
  },
  getOrderDeliveryStatus: (trackingId) => {
    return httpService.get(ENDPOINTS.orderPackageDeliveryStatus(trackingId), {
      ...config,
    });
  },
  callOrderPackageWebhook: (data) => {
    return httpService.post(ENDPOINTS.orderPackageWebhook, data, {
      ...config,
    });
  },
};

export default packageService;
