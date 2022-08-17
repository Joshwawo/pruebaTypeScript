import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Id";
import Random from "./pages/Random";
import Error404 from "./pages/Error404";
import { Gen1 } from "./interfaces/Gen1";
import axios from "axios";
import Top from "./img/svgTop.svg";
import Bottom from "./img/svgBottom.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";
import {Card} from "./components/Card";

const App = () => {
  const [pokeg1, setPokeg1] = useState<Gen1>({} as Gen1);
  const [pokeVacio, setPokeVacio] = useState<Gen1>({} as Gen1);
  const [busqueda, setBusqueda] = useState<string>("");
  const [cargando, setCargando] = useState<boolean>(true);

  const getPokemon = async (): Promise<Gen1> => {
    const { data } = await axios.get<Gen1>(
      `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
    );

    return data;
  };

  useEffect(() => {
    getPokemon().then((data) => {
      setPokeg1(data);
      setPokeVacio(data);
      setCargando(!cargando);
      // console.log(data);
    });
  }, []);

  const handerChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(evento.target.value);
    setBusqueda(evento.target.value);
    filtraPokemon(evento.target.value);
    // console.log(filtraPokemon);
    // console.log(pokeVacio);
    // console.log(filtraPokemon);
    // console.log(pokeVacio);
  };

  // console.log(pokeVacio.results)

  const filtraPokemon = (busqueda: string): void => {
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
    //  setPokeg1({...pokeVacio, results: resultado});
    setPokeg1({ ...pokeg1, results: resultado });
    // setPokeg1(resultado)
    // console.log(results: resultado):
  };

  const clickToTop = () => {
    window.scrollTo(0, 0);

    toast.success("Has regresado al inicio", {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const clickToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
    toast.success("Has llegado al final", {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // console.log(Top)

  return cargando ? (
    <Spinner />
  ) : (
    <div className=" ">
      <div className="root ">
        {/* <p className=" text-2xl mb-14">Pokemon primera generación</p> */}

        <form className="md:col-span-4 flex items-center justify-center gap-2">
          <input
            type="text"
            value={busqueda}
            onChange={handerChange}
            className="text-center w-full md:w-1/2 bg-gray-100 outline-none p-2 rounded-lg "
            placeholder="Buscar un pokemon de la primera generación"
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

        <ToastContainer />

        <img
          src={Top}
          alt=""
          className="fixed left-1 bottom-4 animate-bounce duration-600 ease-in-out transform -translate-y-1/2 cursor-pointer"
          onClick={clickToTop}
        />
        <img
          src={Bottom}
          alt=""
          className="fixed right-0 bottom-4  animate-bounce duration-600 ease-in-out transform -translate-y-1/2 cursor-pointer"
          onClick={clickToBottom}
        />

        <div className=" ">
          {pokeg1.results?.length === 0 ? (
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
      </div>

    <Card pokeg1={pokeg1} />
      
    </div>
  );
};
export default App;
