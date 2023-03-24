import { useEffect, useState } from "react";
import { http } from "../infra/http";

type GitHubApi = {
  name: string;
  description: string;
  html_url: string;
  visibility: boolean;
};

export const useRepos = () => {
  const [repos, setRepos] = useState<GitHubApi[]>([]);

  useEffect(() => {
    const getApiData = async () => {
      const response = await http.get<GitHubApi[]>(
        "https://api.github.com/users/RAssis7/repos"
      );

      setRepos(response);
    };
    getApiData();
  }, []);

  return {
    repos,
  };
};
