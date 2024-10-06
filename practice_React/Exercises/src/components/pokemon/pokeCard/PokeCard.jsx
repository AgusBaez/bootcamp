import "./PokeCard.css";

export const PokeCard = () => {
  const pokeId = Math.floor(Math.random() * 9) + 1; // Random pokemon ID between 1 and 899 (inclusive)
  const pokeUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`;

  return (
    <div className="Card">
      <h1>Pokemon ID #{pokeId}</h1>
      <img src={pokeUrl} alt="pokeimage" />
    </div>
  );
};
