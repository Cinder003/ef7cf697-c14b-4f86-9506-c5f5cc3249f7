import api from '../lib/axios';
import { Prospect, ProspectFormData } from '../interfaces/prospect.interface';

export const getProspects = async (searchTerm: string = ''): Promise<Prospect[]> => {
  const response = await api.get('/prospects', {
    params: { search: searchTerm },
  });
  return response.data;
};

export const createProspect = async (data: ProspectFormData): Promise<Prospect> => {
  const response = await api.post('/prospects', data);
  return response.data;
};

export const updateProspect = async (id: string, data: ProspectFormData): Promise<Prospect> => {
  const response = await api.put(`/prospects/${id}`, data);
  return response.data;
};

export const deleteProspect = async (id: string): Promise<void> => {
  await api.delete(`/prospects/${id}`);
};