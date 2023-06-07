export interface ApiError {
  code: number;
  message: string;
  path: string;
  method: string;
  timestamp: string;
  statusCode: number;
}
