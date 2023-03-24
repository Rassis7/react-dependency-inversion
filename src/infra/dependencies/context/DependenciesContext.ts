import { createContext } from "react";
import { Http } from "../../http/types";

export type DependenciesContextType = {
  http: Http;
};

export const DependenceContext = createContext({} as DependenciesContextType);
