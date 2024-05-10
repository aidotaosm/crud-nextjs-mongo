export type RequestType = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "GET_ALL" | "PUT_WITH_SLUG" | undefined;

export interface Request {
  method: string;
  query: { slug: string[],  optionalParam: {[key: string]: string}};
  body?: any;
}

export interface Response {
  status?: number,
  payload?: unknown;
  message?: string;
}