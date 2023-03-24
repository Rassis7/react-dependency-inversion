import { Http } from "./types/http";

const get = <TResponse>(url: string) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => data as TResponse);

const post = <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
  fetch(url, { method: "POST", body })
    .then((response) => response.json())
    .then((data) => data as TResponse);

export const http: Http = { get, post };
