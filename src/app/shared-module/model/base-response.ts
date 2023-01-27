import {ResponseStatus} from './response-status';

export interface BaseResponse<T> {
  status: ResponseStatus;
  body: T;
  message: string;
}
