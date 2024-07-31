import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import useDebounce from "../../hooks/useDebounce";

const DEFAULT_IMAGE =
  "https://placehold.co/640x960/000000/FFF?text=Image+Missing";

function StorePage() {
  const [games, setGames] = useState([]);
  const [searched, setSearched] = useState("");
  const [selectedAttribute, setSelectedAttribute] = useState("title");
  const debounceSearch = useDebounce(searched, 1000);
  console.log(games);
  useEffect(() => {
    fetch("http://localhost:8080/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/games/search?${selectedAttribute}=${searched}`)
      .then((response) => response.json())
      .then((data) => setGames(data));
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
          className="bg-neutral-300 px-2 py-1 text-blue-600 placeholder:text-neutral-300 outline-none"
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
      <div className="flex flex-wrap justify-center gap-12 mt-8">
        {games.map((game) => (
          <div
            className="flex flex-col justify-center items-center bg-cover bg-center rounded-2xl w-64 h-80 transform duration-150 hover:scale-105 cursor-pointer group"
            key={`game-${game.id}`}
            onClick={() => console.log("clicked")}
            style={{
              backgroundImage: `url(${game.imageUrl || DEFAULT_IMAGE})`,
            }}
          >
            <div className="absolute bg-black opacity-0 group-hover:opacity-80 rounded-2xl duration-150 size-full"></div>
            <div className="group-hover:visible relative group-hover:opacity-100 pt-1 font-semibold text-3xl text-center first-line:text-cyan-400 invisible">
              {game.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StorePage;
