import { IAPIHealthInformation } from './api-health-information.interface';
import { IDatabaseHealthInformation } from './database-health-information.interface';

export interface IHealthInformation extends IAPIHealthInformation, IDatabaseHealthInformation {}
