import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke, i) => <div key={poke.pokemon + i}>
        <p>Name: {poke.pokemon}</p>
        <p>Type 1: {poke.type_1}</p>
        <p>Type2 : {poke.type_2}</p>
        <img src={poke.url_image} />
      </div>)}
    </div>
  );
}
