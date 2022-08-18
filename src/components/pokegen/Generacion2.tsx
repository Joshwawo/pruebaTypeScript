import { useState, useEffect } from "react";
import axios from "axios";
import { Gen1 } from "../../interfaces/Gen1";
import { Card } from "../Card";
import datagen2 from "../../data/Generacion2.json";
import { buildStyles } from "react-circular-progressbar";
import { Name } from "../../interfaces/HelperXId";
import { Link } from "react-router-dom";

const Generacion2 = () => {
  const [pokeg2, setPokeg2] = useState<Gen1>({} as Gen1);
  const [pokeVacio, setPokeVacio] = useState<Gen1>({} as Gen1);
  const [busqueda, setBusqueda] = useState<string>("");

  const getPokemon = async (): Promise<Gen1> => {
    const { data } = await axios.get<Gen1>(
      //   `https://pokeapi.co/api/v2/pokemon-species/2/`
      //   `https://pokeapi.co/api/v2/pokemon?limit=100&offset=151`
      `https://pokeapi.co/api/v2/pokemon?limit=100&offset=151`
    );
    return data;
  };

  useEffect(() => {
    getPokemon().then((data) => {
      setPokeg2(data);
      setPokeVacio(data);
    });
  }, []);

  const handerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
    filtratPokemon(e.target.value);
  };

  const filtratPokemon = (busqueda: string): void => {
    const resultado = pokeVacio.results?.filter((pokeBusqueda: any): void => {
      if (
        pokeBusqueda.name
          .toString()
          .toLowerCase()
          .includes(busqueda.toLowerCase())
      ) {
        return pokeBusqueda;
      }
    });

    setPokeg2({ ...pokeg2, results: resultado });
  };

  

  return (
    <div className=" ">
      <form className="md:col-span-4 flex items-center justify-center gap-2 mt-10">
        <input
          type="text"
          value={busqueda}
          onChange={handerChange}
          className="text-center w-full md:w-1/2 bg-gray-100 outline-none p-2 rounded-lg "
          placeholder="Buscar un pokemon de la segunda generación"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>

      <div className=" ">
        {pokeg2.results?.length === 0 ? (
          <div className="max-w-md py-4 px-6 shadow-2xl shadow-red-800 rounded-lg bg-red-600 mx-auto mt-10">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <h3 className="text-xl text-white font-semibold">Error</h3>
              </div>
              <p className="text-white">No se encontro el Pokemon</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <Card>{pokeg2}</Card>
    </div>
  );
};

export default Generacion2;
