import { FC, FormEventHandler, useState } from "react";
interface SearcherProps {}

const Searcher: FC<SearcherProps> = () => {
  const [query, setQuery] = useState<string>("");
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    //TODO : handle filter query
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="buscador..."
        value={query}
      />
    </form>
  );
};

export default Searcher;
