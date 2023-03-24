import { useEffect, useState } from "react";
import { http } from "./infra/http";

type GitHubApi = {
  name: string;
  description: string;
  html_url: string;
  visibility: boolean;
};

export const App = () => {
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

  return (
    <main>
      {repos.map(({ name, description, html_url, visibility }) => (
        <fieldset>
          <a href={html_url} target="_blank" rel="">
            {name}
          </a>
          <p>{description}</p>
          <strong>{visibility ? "Visible" : "Invisible"}</strong>
        </fieldset>
      ))}
    </main>
  );
};

export default App;
