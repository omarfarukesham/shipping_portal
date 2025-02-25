import { CONTENT_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: CONTENT_SERVICE_BASE_URL,
};

const contentService = {
  directUploadContent: (data) => {
    return httpService.post(ENDPOINTS.directUploadContent, data, {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default contentService;
