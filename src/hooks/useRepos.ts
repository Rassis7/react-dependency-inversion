import { useEffect, useState } from "react";
import { Http } from "../infra/http/types";

type GitHubApi = {
  name: string;
  description: string;
  html_url: string;
  visibility: boolean;
};

type UseReposProps = {
  http: Http;
};

export const useRepos = ({ http }: UseReposProps) => {
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
