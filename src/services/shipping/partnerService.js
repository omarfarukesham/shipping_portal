import { SHIPPING_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: SHIPPING_SERVICE_BASE_URL,
};

const partnerService = {
  getPartners: (filters) => {
    return httpService.get(ENDPOINTS.partners, {
      ...config,
      params: {
        ...filters,
        // userType: 'ADMIN',
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },

  getPartner: (id) => {
    return httpService.get(ENDPOINTS.partner(id), {
      ...config,
    });
  },

  addPartner: (data) => {
    return httpService.post(ENDPOINTS.partners, data, {
      ...config,
    });
  },

  editPartner: (data) => {
    return httpService.patch(ENDPOINTS.partner(data.id), data, {
      ...config,
    });
  },
};

export default partnerService;
