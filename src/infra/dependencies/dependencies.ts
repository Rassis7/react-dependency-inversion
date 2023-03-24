import { DependenciesContextType } from "./context/DependenciesContext";
import { http } from "../http";
import { storage } from "../storage";

export const httpDependencies: DependenciesContextType = {
  http,
  storage,
};
