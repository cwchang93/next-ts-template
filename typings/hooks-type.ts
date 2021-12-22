export interface I_HTTP_REQCONFIG {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: {
    "Content-Type": string;
    Accept: string;
    "Access-Control-Allow-Headers": string;
  };
  body?: string;
}
