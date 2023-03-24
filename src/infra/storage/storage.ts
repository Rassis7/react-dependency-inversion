import { Storage } from "./types";

const getItem = <TResponse>(key: string) => {
  const lsResponse = window.localStorage.getItem(key);

  if (typeof lsResponse === "string") {
    return JSON.parse(lsResponse) satisfies TResponse;
  }

  return undefined;
};

const setItem = (key: string, value: unknown) => {
  const lsParam = JSON.stringify(value);
  window.localStorage.setItem(key, lsParam);
};

export const storage: Storage = { getItem, setItem };
