import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Id";
import Random from "./pages/Random";
import Error404 from "./pages/Error404";
import { Gen1 } from "./interfaces/Gen1";
import axios from "axios";

function App() {
  const [pokeg1, setPokeg1] = useState<Gen1>([] as Gen1);

  const getPokemon = async (): Promise<Gen1> => {
    const { data } = await axios.get<Gen1>(
      `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
    );

    return data;
  };

  useEffect(() => {
    getPokemon().then((data) => {
      // setPokeg1(data);
      setPokeg1(data);
    });
  }, []);

  //raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/899.png

  https: return (
    <div className=" ">
      <p className=" text-2xl mb-14">Hola desde la app.tsx</p>
      <div className=" grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
        {pokeg1.results?.map(({ name }, index: number) => {
          // console.log(index + 1);
          return (
            <div key={index} className="div mt-10">
              <div className=" mt-10 p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 hover:text-black/90 hover:font-bold hover:bg-gray-300 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className="-mb-20 -translate-y-1/2 transform">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
                      index + 1
                    }.png`}
                    alt={name}
                    title={name}
                    className="mx-auto h-64 mt-10"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-center text-4xl font-bold mb-5">
                    {name}
                  </h3>
                </div>

                <div className="text-center">
                  <Link to={`/${name}`}>
                    <button className="rounded-xl  py-2 font-semibold  ">
                      Ver Pokémon
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
