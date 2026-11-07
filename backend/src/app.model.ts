export interface ResponseData<T = null> {
  status: 'success' | 'fail';
  msg: string;
  data: T;
}
