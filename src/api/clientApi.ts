import Axios, {AxiosPromise} from 'axios';
import { Launch, Rocket } from './types';

const client = Axios.create({
  baseURL: 'https://api.spacexdata.com',
});

export const getPastRocketLaunches = (): AxiosPromise<Launch[]> => {
  return client.get('/v5/launches/past');
};

export const getRocketLaunch = (launchId: string): AxiosPromise<Launch> => {
  return client.get(`/v5/launches/${launchId}`);
};

export const getAllRockets = (): AxiosPromise<Rocket[]> => {
  return client.get('/v4/rockets');
};
