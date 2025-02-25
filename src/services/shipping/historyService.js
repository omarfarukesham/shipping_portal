import { SHIPPING_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: SHIPPING_SERVICE_BASE_URL,
};

const historyService = {
  getHistories: (filters) => {
    return httpService.get(ENDPOINTS.histories, {
      ...config,
      params: {
        ...filters,
        // userType: 'ADMIN',
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },

  getHistory: (id) => {
    return httpService.get(ENDPOINTS.history(id), {
      ...config,
    });
  },
};

export default historyService;
