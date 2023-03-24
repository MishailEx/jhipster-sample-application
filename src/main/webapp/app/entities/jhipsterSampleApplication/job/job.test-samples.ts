import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 43395,
};

export const sampleWithPartialData: IJob = {
  id: 63110,
  jobTitle: 'Национальный операционный администратор',
};

export const sampleWithFullData: IJob = {
  id: 18405,
  jobTitle: 'Глобальный интеграционный администратор',
  minSalary: 4480,
  maxSalary: 26191,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
