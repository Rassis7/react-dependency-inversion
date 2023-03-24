import { useEffect, useState } from "react";

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
      const response = await fetch(
        "https://api.github.com/users/RAssis7/repos"
      ).then((response) => response.json());

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
