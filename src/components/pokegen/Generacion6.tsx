import { useState, useEffect, Children } from "react";
import axios from "axios";
import { Gen1 } from "../../interfaces/Gen1";
import { Card } from "../Card";
import datagen2 from "../../data/Generacion2.json";
import { buildStyles } from "react-circular-progressbar";
import { Name } from "../../interfaces/HelperXId";
import { Link } from "react-router-dom";

const Generacion6 = () => {
  const [pokeg6, setPokeg6] = useState<Gen1>({} as Gen1);
  const [pokeVacio, setPokeVacio] = useState<Gen1>({} as Gen1);
  const [busqueda, setBusqueda] = useState<string>("");
  const [pokelocalStorage, setPokelocalStorage] = useState<Gen1>(
    JSON.parse(localStorage.getItem("pokeg6") || "[]")
  );

  //   TODO: Hacer una funcion que me devuelva el pokemon que esta en el localStorage
  // TODO:  BORRAR TODO EL CAGADERO QUE HIC

  //   console.log(pokelocalStorage.results);

  const getPokemon = async (): Promise<Gen1> => {
    const { data } = await axios.get<Gen1>(
      `https://pokeapi.co/api/v2/pokemon?limit=72&offset=649`
    );
    return data;
  };

  useEffect(() => {
    if (window.localStorage.getItem("pokeg6") === null) {
      // console.log("No hay nada en el localStorage asi que voy a hacer Fetch ");
      getPokemon().then((data) => {
        setPokeg6(data);
        window.localStorage.setItem("pokeg6", JSON.stringify(data));
      });
    } else {
      console
        .log
        // "Hay algo en el localStorage desde el useEffect y no hago fetch "
        ();
      // setPokeg6(JSON.parse(localStorage.getItem("pokeg6") || "[]"));
      // setPokeg6(localStorage.getItem("pokeg6") || "[]");
      // setPokelocalStorage(JSON.parse(localStorage.getItem("pokeg6") || "[Akitoy]"));
      setPokeg6(JSON.parse(localStorage.getItem("pokeg6") || "[Akitoy]"));
      //Gurdar sola la imgaen en el localStorage
      // console.log(localStorage.getItem("pokeg6"));

      //Obtener el valor de pokeg6 del localStorage
      //  console.log(pokelocalStorage.results);

      // (localStorage.getItem("pokeg6") || "[]").results.map((pokemon: any) => {
      //   localStorage.setItem(pokemon.name, pokemon.url);
      // }
    }
  }, []);

  const handleDeleteLocalStorage = () => {
    // localStorage.removeItem("pokeg6");
    // console.log("LocalStorage borrado");
  };

  // window.localStorage.length == 0
  //   ? console.log("No hay nada en el localStorage desde la funcion >=0")
  //   : console.log("Hay algo en el localStorage desde la comprobacion ===0");

  //?Esta parte es de los filtros

  const handerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
    filtratPokemon(e.target.value);
  };

  const filtratPokemon = (busqueda: string): void => {
    const resultado = pokelocalStorage.results?.filter(
      (pokeBusqueda: any): void => {
        if (
          pokeBusqueda.name
            .toString()
            .toLowerCase()
            .includes(busqueda.toLowerCase())
        ) {
          return pokeBusqueda;
        }
      }
    );

    setPokeg6({ ...pokeg6, results: resultado });
  };

  return (
    <div className=" ">
      {/* <button
        onClick={handleDeleteLocalStorage}
        className="bg-red-200 py-2 px-4  flex justify-center items-center root my-2 rounded-md text-red-500 hover:bg-red-300"
      >
        Eliminar LocalStorage{" "}
      </button> */}
      <form className="md:col-span-4 flex items-center justify-center gap-2 mt-10">
        <input
          type="text"
          value={busqueda}
          onChange={handerChange}
          className="text-center w-full md:w-1/2 bg-gray-100 outline-none p-2 rounded-lg "
          placeholder="Buscar un pokemon de la sexta generación"
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
        {pokeg6.results?.length === 0 ? (
          <div className="max-w-md my-20 py-4 px-6 shadow-2xl shadow-red-800 rounded-lg bg-red-600 mx-auto mt-10">
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
      <Card>{pokeg6}</Card>
    </div>
  );
};

export default Generacion6;
