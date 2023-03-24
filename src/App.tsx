import { useRepos } from "./hooks/useRepos";

export const App = () => {
  const { repos } = useRepos();

  if (!repos.length) {
    return <h1>loading...</h1>;
  }

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
