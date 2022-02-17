export interface CustomHttpResponse<T> {
  status: number;
  data?: T;
}
