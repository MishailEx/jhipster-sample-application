import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 7813,
};

export const sampleWithPartialData: IEmployee = {
  id: 94038,
  lastName: 'Жданова',
  email: 'Zoie14@mail.ru',
  hireDate: dayjs('2023-03-23T23:16'),
  commissionPct: 99523,
};

export const sampleWithFullData: IEmployee = {
  id: 40560,
  firstName: 'Eddie',
  lastName: 'Тихонова',
  email: 'Waylon.@ya.ru',
  phoneNumber: 'серый СУБД интерфейс',
  hireDate: dayjs('2023-03-23T12:56'),
  salary: 89015,
  commissionPct: 35265,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
