import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 37978,
};

export const sampleWithPartialData: ITask = {
  id: 20108,
  title: 'Account Up-sized',
  description: 'software',
};

export const sampleWithFullData: ITask = {
  id: 69422,
  title: 'логистический structure внутренний',
  description: 'планировщик передача виртуальный',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
