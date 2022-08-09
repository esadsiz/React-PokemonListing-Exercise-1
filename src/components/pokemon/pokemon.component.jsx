import { useState } from "react";
import "./pokemon.styles.scss";

const PokemonCard = () => {
  const [pokeList, setPokeList] = useState([]);

  let pokedexes = [];
  const oncInput = () => {
    pokedexes = [];
    const requesttime =
      Number(document.getElementById("pokedexInput").value) > 905
        ? 905
        : Number(document.getElementById("pokedexInput").value);
    let i = 0;
    while (i < requesttime) {
      let sayi = Math.ceil(Math.random() * 905);
      if (!pokedexes.includes(sayi)) {
        pokedexes.push(sayi);
        i += 1;
      }
    }
    setPokeList(pokedexes);
  };

  return (
    <div className="pokedex">
      <h1>PokemonListing</h1>

      <h4>
        github.com/esadsiz
        <br /> <br /> Geben Sie die Anzahl der Pokémon ein, die Sie auflisten
        möchten:
      </h4>
      <input
        onChange={oncInput}
        className="pokedex-input"
        id="pokedexInput"
        type="number"
        max="905"
        maxlength="3"
      />
      <div className="pokedex-card">
        {pokeList.map((pokedexnumber, index) => {
          console.log(index);
          return (
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
                pokedexnumber <= 999
                  ? `00${pokedexnumber}`.slice(-3)
                  : pokedexnumber
              }.png`}
              key={index}
              alt="pokeimg"
              className="pokedex-card-img"
            />
          );
        })}
      </div>
    </div>
  );
};

export default PokemonCard;
