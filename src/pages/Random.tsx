import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Pokemon } from "../interfaces/Pokemon";


function Random() {
    const [pokimon, setPokimon] = useState<Pokemon>();
    const [numero, seNumero] = useState(1);
  
    const randomNumber = (min: number, max: number):number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const handlePokemon = (): void => {
      seNumero(randomNumber(1, 151));
    };
  
    const getPokemon = async (numero: number): Promise<Pokemon> => {
      const { data } = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${numero}`
      );
      console.log(data);
      // setPokimon(data);
  
      return data;
    };
    useEffect(() => {
      getPokemon(numero).then((data) => {
        setPokimon(data);
      });
    }, [numero]);
    const objetoPokemon = {
      id: pokimon?.id,
      name: pokimon?.name,
      weight: pokimon?.weight,
      abilities: pokimon?.abilities,
    };
    const { id, name, weight, abilities } = objetoPokemon;
    return (
      <div className="App">
        <p>Hola desde vite + ts - Pagina Random</p>
        <p>Id:{id}</p>
        <p>Name:{name}</p>
        <p>Weight:{weight}</p>
        {abilities?.map((abilitie, index) => {
          return (
            <p key={index}>
              ability{index}: {abilitie.ability.name}
            </p>
          );
        })}
        <button onClick={handlePokemon}>Generar Pokemon Aleatorio</button>
      </div>
    );
  }
  export default Random;
  