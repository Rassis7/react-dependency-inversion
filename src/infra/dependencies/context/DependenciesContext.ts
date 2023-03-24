import { createContext } from "react";
import { Http } from "../../http/types";
import { Storage } from "../../storage/types";

export type DependenciesContextType = {
  http: Http;
  storage: Storage;
};

export const DependenceContext = createContext({} as DependenciesContextType);
