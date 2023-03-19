import AxiosInstance from '@api/axiosInstance';
import { EventScheduleType } from '@hooks/useEventSchedule';

const { httpRequest } = AxiosInstance();

export interface UpdateScheduleParamsType {
  _id: string;
  params: EventScheduleType;
}

export const ScheduleApi = {
  getScheduleList: async (params: string) => {
    const response = await httpRequest.get<EventScheduleType[]>(`/api/schedule?${params}`);
    return response.data;
  },

  createSchedule: async (params: EventScheduleType) => {
    const response = await httpRequest.post<EventScheduleType>(`api/schedule`, params);
    return response.data;
  },

  updateSchedule: async (id: string, params: EventScheduleType) => {
    const response = await httpRequest.put<UpdateScheduleParamsType>(`api/schedule/${id}`, params);
    return response.data;
  },
};
