import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { PokeID } from "../interfaces/Gen1Poke";
import { HelperXID } from "../interfaces/HelperXId";
import Spinner from "../components/Spinner";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Home = () => {
  const [pokeById, setPokeById] = useState<PokeID>({} as PokeID);
  const [helperXId, setHelperXId] = useState<HelperXID>({} as HelperXID);
  const [cargando, setCargando] = useState<boolean>(true);
  const { id } = useParams();
  //TODO:Cambiar el estado del spinner a true y en el useEffect debe cambiar a !cargando todo los en todos lados
  useEffect(() => {
    const getHelperXId = async (): Promise<void> => {
      try {
        const { data } = await axios.get<HelperXID>(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );

        setHelperXId(data);
      } catch (error) {
        console.log(error);
      }
      setCargando(!cargando);
    };

    getHelperXId();
  }, [id]);
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

    getPokemonById();
  }, [id]);

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
    stats: pokeById?.stats,
    weight: pokeById.weight,
    height: pokeById.height,
  };

  const objHelper = {
    specie: helperXId.egg_groups,
    nameJp: helperXId.names?.[0].name,
    colores: helperXId.color?.name,
  };
  const { specie, nameJp, colores } = objHelper;

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
  //TODO:Hacer que cuando le de click a una imagen se cambie por la imagen de la version shiny
  let coloresDFondo = ` ${
    tipo1 == "grass"
      ? "bg-green-200"
      : tipo1 == "poison"
      ? "bg-purple-200"
      : tipo1 == "normal"
      ? "bg-[#A8A878]"
      : tipo1 == "fire"
      ? "bg-[#f08030df]"
      : tipo1 == "water"
      ? "bg-[#6890F0]"
      : tipo1 == "electric"
      ? "bg-[#F8D030]"
      : tipo1 == "ice"
      ? "bg-blue-200"
      : tipo1 == "fighting"
      ? "bg-[#C22E28]"
      : tipo1 == "psychic"
      ? "bg-[#F85888]"
      : tipo1 == "ground"
      ? "bg-[#E0C068]"
      : tipo1 == "flying"
      ? "bg-[#A890F0]"
      : tipo1 == "bug"
      ? "bg-[#A8B820]"
      : tipo1 == "rock"
      ? "bg-[#B8A038]"
      : tipo1 == "ghost"
      ? "bg-[#705898]"
      : tipo1 == "dragon"
      ? "bg-[#7038F8]"
      : tipo1 == "dark"
      ? "bg-[#705848]"
      : tipo1 == "steel"
      ? "bg-[#B8B8D0]"
      : tipo1 == "fairy"
      ? "bg-[#EE99AC]"
      : ""
  } `;

  let cocos = ` ${
    tipo1 == "grass"
      ? "bg-green-300"
      : tipo1 == "poison"
      ? "bg-purple-300"
      : tipo1 == "normal"
      ? "bg-[#bebe6f]"
      : tipo1 == "fire"
      ? "bg-[#f08030]"
      : tipo1 == "water"
      ? "bg-[#4d7dec]"
      : tipo1 == "electric"
      ? "bg-[#f3c715]"
      : tipo1 == "ice"
      ? "bg-blue-300"
      : tipo1 == "fighting"
      ? "bg-[#df2a23]"
      : tipo1 == "psychic"
      ? "bg-[#F85888]"
      : tipo1 == "ground"
      ? "bg-[#e6b93e]"
      : tipo1 == "flying"
      ? "bg-[#987af1]"
      : tipo1 == "bug"
      ? "bg-[#b4c517]"
      : tipo1 == "rock"
      ? "bg-[#cfb22e]"
      : tipo1 == "ghost"
      ? "bg-[#845ec2]"
      : tipo1 == "dragon"
      ? "bg-[#5b1eeb]"
      : tipo1 == "dark"
      ? "bg-[#8a6751]"
      : tipo1 == "steel"
      ? "bg-[#b1b1e4]"
      : tipo1 == "fairy"
      ? "bg-[#f1718d]"
      : ""
  } `;

  let hp2 = stats?.[0]?.base_stat;
  let attack3 = stats?.[1]?.base_stat;
  let defense = stats?.[2]?.base_stat;
  let spAtack = stats?.[3]?.base_stat;
  let spDefense = stats?.[4]?.base_stat;
  let speed6 = stats?.[5]?.base_stat;

  return cargando ? (
    <Spinner />
  ) : Object.keys(pokeById).length === 0 ? (
    <div className="root">
      <p className=" text-2xl font-bold">No existe el pokemon</p>
      <Link to="/">
        <button className=" rounded-md mt-5 font-semibold bg-black text-white pt-2 px-2 hover:bg-gray-400 hover:text-black">
          Regresar
        </button>
      </Link>
    </div>
  ) : (
    <div className={`h-scree ${coloresDFondo} `}>
      <section className=" header root">
        <p className="text-4xl text-gray-500/60 relative top-[5rem] text-center ">
          {nameJp}
        </p>
        <Link to="/">
          <p className="text-center text-2xl">Volver</p>
        </Link>

        <div className="md:flex">
          <div className=" md:w-1/2 //!derecha">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idPoke}.png`}
              alt={name}
              title={name}
              className="mx-auto h-64 mt-10"
            />
            <div className="img-pixeles flex w-[27%] md:w-full ">
              <img
                src={spriteFrontal}
                alt={name}
                title={name}
                className="mx-auto "
              />
              <img
                src={spriteTrasero}
                alt={name}
                title={name}
                className="mx-auto "
              />

              <img
                src={spriteLateral}
                alt={name}
                title={name}
                className="mx-auto "
              />
              <img
                src={spriteTraseroLateral}
                alt={name}
                title={name}
                className="mx-auto "
              />
            </div>
          </div>
          <div className=" md:w-1/2 md:mt-20 text-center //!izquierda">
            <p className="font-bold text-2xl uppercase">{name}</p>
            <p>#{idPoke}</p>
            <div className="tipos flex w-28 gap-2 mx-auto mt-2">
              <img
                src={`https://pokeapp-nvynrgldc-fagru.vercel.app/images/type-${tipo1}.svg`}
                alt=""
                className="mx-auto "
              />
              <img
                src={`https://pokeapp-nvynrgldc-fagru.vercel.app/images/type-${tipo2}.svg`}
                alt=""
                className="mx-auto "
              />
            </div>
            <div className="specie ">
              {specie?.map((specie, index: number) => {
                return (
                  <p className=" font-semibold" key={index}>
                    {specie.name}
                  </p>
                );
              })}
            </div>
            <div className="medidas mt-3 font-semibold">
              <p className="">Weight: {weight}kg</p>
              <p>Height: {height}m</p>
            </div>
          </div>
        </div>
      </section>
      <section className="root //!Circulos">
        <p className=" mb-5 text-center text-2xl">Stats</p>
        <div className=" flex items-center justify-center gap-2   //!CIRCULOS">
          <div className="divo" style={{ width: 100, height: 100 }}>
            {hp2 == undefined ? null : (
              <CircularProgressbar
                value={hp2}
                text={`Hp:${hp2}`}
                styles={buildStyles({
                  textSize: "20px",
                  textColor: `${colores}`,
                  pathColor: `${colores}`,
                  trailColor: "#f3e9e9",
                })}
              />
            )}
          </div>

          <div style={{ width: 100, height: 100 }}>
            {attack3 === undefined ? null : (
              <CircularProgressbar
                value={attack3}
                text={`Attack:${attack3}`}
                styles={buildStyles({
                  // Custom width
                  textSize: "17px",
                  strokeLinecap: "round",
                  rotation: (1 / 3) * Math.PI,
                  trailColor: "#f3e9e9",
                  pathColor: `${colores}`,
                  textColor: `${colores}`,
                })}
              />
            )}
          </div>
          <div style={{ width: 100, height: 100 }}>
            {defense === undefined ? null : (
              <CircularProgressbar
                value={defense}
                text={`Defense:${defense}`}
                styles={buildStyles({
                  // Custom width
                  textSize: "15px",
                  strokeLinecap: "round",
                  rotation: (1 / 3) * Math.PI,
                  trailColor: "#f3e9e9",
                  pathColor: `${colores}`,
                  textColor: `${colores}`,
                })}
              />
            )}
          </div>
          <div style={{ width: 100, height: 100 }}>
            {spAtack === undefined ? null : (
              <CircularProgressbar
                value={spAtack}
                text={`SP Atack:${spAtack}`}
                styles={buildStyles({
                  // Custom width
                  textSize: "15px",
                  strokeLinecap: "round",
                  rotation: (1 / 3) * Math.PI,
                  trailColor: "#f3e9e9",
                  pathColor: `${colores}`,
                  textColor: `${colores}`,
                })}
              />
            )}
          </div>
          <div style={{ width: 100, height: 100 }}>
            {spDefense === undefined ? null : (
              <CircularProgressbar
                value={spDefense}
                text={`SP Defense:${spDefense}`}
                styles={buildStyles({
                  // Custom width
                  textSize: "15px",
                  strokeLinecap: "round",
                  rotation: (1 / 3) * Math.PI,
                  trailColor: "#f3e9e9",
                  pathColor: `${colores}`,
                  textColor: `${colores}`,
                })}
              />
            )}
          </div>
          <div style={{ width: 100, height: 100 }}>
            {speed6 === undefined ? null : (
              <CircularProgressbar
                value={speed6}
                text={`Speed:${speed6}`}
                styles={buildStyles({
                  // Custom width
                  textSize: "15px",
                  strokeLinecap: "round",
                  rotation: (1 / 3) * Math.PI,
                  trailColor: "#f3e9e9",
                  pathColor: `${colores}`,
                  textColor: `${colores}`,
                })}
              />
            )}
          </div>
        </div>
      </section>

      <section className=" root //!abilities">
        <p className=" mb-2 text-2xl text-center">Abilities</p>
        {abilities?.map((abilidad, index: number) => {
          return (
            <p
              key={index}
              className={` inline-block ${cocos} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
            >
              {abilidad.ability.name}
            </p>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
