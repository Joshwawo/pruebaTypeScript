import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { PokeID } from "../interfaces/Gen1Poke";
import Spinner from "../components/Spinner";

const Home = () => {
  const [pokeById, setPokeById] = useState<PokeID>({} as PokeID);
  const [cargando, setCargando] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    const getPokemonById = async (): Promise<void> => {
      try {
        const { data } = await axios.get<PokeID>(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        // console.log(data);
        setPokeById(data);
      } catch (error) {
        console.log(error);
      }
      setCargando(!cargando);
    };
    setTimeout(() => {
      getPokemonById();
    }, 0);
  }, []);

  const objPokemon = {
    name: pokeById.name,
    idPoke: pokeById.id,
    tipo1: pokeById.types?.[0]?.type?.name,
    tipo2: pokeById.types?.[1]?.type?.name,
    spriteFrontal: pokeById.sprites?.front_default,
    spriteTrasero: pokeById.sprites?.back_default,
    spriteLateral: pokeById.sprites?.front_shiny,
    spriteTraseroLateral: pokeById.sprites?.back_shiny,
    abilities: pokeById.abilities,
    stats: pokeById.stats,
    weight: pokeById.weight,
    height: pokeById.height,
  };
  const {
    name,
    spriteFrontal,
    spriteTrasero,
    spriteLateral,
    spriteTraseroLateral,
    abilities,
    idPoke,
    tipo1,
    tipo2,
    stats,
    height,
    weight,
  } = objPokemon;

  return cargando ? (
    <Spinner />
  ) : Object.keys(pokeById).length === 0 ? (
    <p>No existe el pokemon</p>
  ) : (
    <div className="">
      <p>{name}</p>
      <p>#{idPoke}</p>
      <div className="tipos  ">
        <img
          src={`https://pokeapp-nvynrgldc-fagru.vercel.app/images/type-${tipo1}.svg`}
          alt=""
          className="mx-auto"
        />
        <img
          src={`https://pokeapp-nvynrgldc-fagru.vercel.app/images/type-${tipo2}.svg`}
          alt=""
          className="mx-auto"
        />
      </div>
      <div className="images flex">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idPoke}.png`}
          alt={name}
          title={name}
          className="mx-auto h-64 mt-10"
        />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${idPoke}.png`}
          alt=""
          className="mx-auto h-64 mt-10"
        />
      </div>

      <div className="sprites flex">
        <img
          src={spriteFrontal}
          alt={name}
          title={name}
          className="mx-auto h-64 object-contain"
        />
        <img
          src={spriteTrasero}
          alt={name}
          title={name}
          className="mx-auto h-64 object-contain"
        />

        <img
          src={spriteLateral}
          alt={name}
          title={name}
          className="mx-auto h-64 object-contain"
        />
        <img
          src={spriteTraseroLateral}
          alt={name}
          title={name}
          className="mx-auto h-64 object-contain"
        />
      </div>
      <div className="medidas">
        <p>Altura: {height}m</p>
        <p>Peso: {weight} Kg</p>
      </div>

      {/* <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idPoke}.png`}
        alt={name}
        title={name}
        className="mx-auto h-64 mt-10"
      /> */}
      <div className="abilities">
        <h3 className="text-2xl">Habilidades</h3>
        {abilities?.map(({ ability: { name } }, index: number) => {
          return (
            <div key={index} className="key">
              {name}
            </div>
          );
        })}
      </div>
      <div className="stats mt-10">
        <h3 className="text-2xl">Stats</h3>
        {stats?.map(({ base_stat, stat }, index: number) => {
          return (
            <div key={index} className="stat">
              <p>
                {stat.name} - <span>{base_stat}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
