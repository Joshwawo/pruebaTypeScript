import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon } from "../interfaces/Pokemon";
import { HelperXID } from "../interfaces/HelperXId";
import Spinner from "../components/Spinner";
import {
  ComparadorRandom,
  ComparadorRandomTipos,
} from "../components/ComparadorRandom";

function Random() {
  const [pokimon, setPokimon] = useState<Pokemon>();
  const [helperXId, setHelperXId] = useState<HelperXID>({} as HelperXID);
  const [numero, seNumero] = useState<number>(1);
  const [cargando, setCargando] = useState<boolean>(true);

  const randomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const handlePokemon = (): void => {
    seNumero(randomNumber(1, 151));
  };

  const getPokemon = async (numero: number): Promise<Pokemon> => {
    const { data } = await axios.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${numero}`
    );
    // console.log(data);
    // setPokimon(data);

    return data;
  };
  const helperRandom = async (number: number): Promise<void> => {
    try {
      const { data } = await axios.get<HelperXID>(
        `https://pokeapi.co/api/v2/pokemon-species/${number}`
      );

      setHelperXId(data);
    } catch (error) {
      console.log(error);
    }

    setCargando(!cargando);
  };

  useEffect(() => {
    getPokemon(numero).then((data) => {
      setPokimon(data);
    });
    helperRandom(numero);
  }, [numero]);
  const objetoPokemon = {
    id: pokimon?.id,
    name: pokimon?.name,
    weight: pokimon?.weight,
    abilities: pokimon?.abilities,
    tipo1: pokimon?.types?.[0]?.type?.name,
    tipo2: pokimon?.types?.[1]?.type?.name,
  };
  const { id, name, weight, abilities, tipo1, tipo2 } = objetoPokemon;

  return cargando ? (
    <Spinner />
  ) : (
    <section className="text-gray-600 body-font ">
      <div className="container px-5  mt-12 mx-auto ">
        <div className="flex flex-wrap -m-4 ">
          <div className="p-4 mx-auto">
            <div className="h-ful rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden mx-auto ">
              <img
                className=" md:h-[38rem] xl:h-[30rem] w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest  title-font font-medium text-gray-400 mb-1 text-lg">
                  #{id}
                </h2>
                <h1 className="title-font font-medium text-gray-600 mb-3 text-2xl">
                  {name}
                </h1>
                {/* <h2 className="tracking-widest text-md title-font font-medium text-gray-400 mb-1">
                    {tipo1} {tipo2}
                  </h2> */}
                <ComparadorRandomTipos tipo1={tipo1} tipo2={tipo2} />
                {/* <ComparadorRandom>{helperXId.flavor_text_entries?.[6]?.flavor_text}</ComparadorRandom> */}
                <p className="tracking-widest  title-font font-medium text-gray-400 mb-1">
                  {" "}
                  {helperXId.flavor_text_entries?.[6]?.flavor_text}
                </p>
                <div className="flex items-center flex-wrap ">
                  <button
                    onClick={handlePokemon}
                    className="bg-gradient-to-r mx-auto from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"
                  >
                    Generate Random Pokemon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Random;
