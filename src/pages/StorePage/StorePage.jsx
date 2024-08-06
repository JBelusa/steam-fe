import { useEffect, useState } from "react";

import useDebounce from "../../hooks/useDebounce";
import GamePage from "../GamePage/GamePage";

function StorePage() {
  const [games, setGames] = useState([]);
  const [searched, setSearched] = useState("");
  const [selectedAttribute, setSelectedAttribute] = useState("title");
  const debounceSearch = useDebounce(searched, 1000);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8080/games/search?${selectedAttribute}=${searched}`)
      .then((response) => response.json())
      .then((data) => setGames(data))
      .finally(() =>
        setTimeout(() => {
          setIsLoading(false);
        }, 1000)
      );
  }, [debounceSearch]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex mb-4">
        {/* TWO WAY BINDING */}
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={searched}
          onChange={(e) => {
            setSearched(e.target.value);
          }}
          className="bg-neutral-700 px-2 py-1 rounded-l-md w-96 placeholder:text-neutral-300 outline-none"
        />
        <select
          className="bg-neutral-300 px-2 py-1 rounded-r-md text-blue-600 placeholder:text-neutral-300 outline-none"
          onChange={(e) => {
            setSelectedAttribute(e.target.value);
          }}
        >
          <option value="title">Title</option>
          <option value="price">Price</option>
          <option value="releaseDate">Release date</option>
          {/* <option value="developerId">developerId</option> */}
        </select>
      </div>
      <div className="h-2">{isLoading ? <p>Loading...</p> : null}</div>
      <div className="flex flex-wrap justify-center gap-12 mt-8">
        {games.map((game) => (
          <GamePage game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
}

export default StorePage;
