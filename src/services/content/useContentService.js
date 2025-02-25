import { ENDPOINTS } from '@/configuration/endpoints';
import { useMutation } from '@tanstack/react-query';
import contentService from './contentService';

export const useDirectUploadContent = () => {
  return useMutation({
    mutationKey: [ENDPOINTS.directUploadContent],
    mutationFn: contentService.directUploadContent,
  });
};
