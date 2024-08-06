function GamePage({game}){
    const DEFAULT_IMAGE =
    "https://placehold.co/640x960/000000/FFF?text=Image+Missing";

    return(
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
    )
}



export default GamePage