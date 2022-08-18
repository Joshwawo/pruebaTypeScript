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
import { Card } from "./components/Card";

const App = () => {
  const [pokeg1, setPokeg1] = useState<Gen1>({} as Gen1);
  const [pokeVacio, setPokeVacio] = useState<Gen1>({} as Gen1);
  const [busqueda, setBusqueda] = useState<string>("");
  const [cargando, setCargando] = useState<boolean>(true);
  const [ocultarGen1, setOcultarGen1] = useState<boolean>(true);
  const [ocultartGen2, setOcultartGen2] = useState<boolean>(true);
  const [ocultarGen3, setOcultarGen3] = useState<boolean>(true);
  const [ocultarGen4, setOcultarGen4] = useState<boolean>(true);
  const [ocultarGen5, setOcultarGen5] = useState<boolean>(true);
  const [ocultarGen6, setOcultarGen6] = useState<boolean>(true);
  const [ocultarGen7, setOcultarGen7] = useState<boolean>(true);
  const [ocultarGen8, setOcultarGen8] = useState<boolean>(true);

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

  //has una funcion para que se cargue el componente y se oculte los demas componentes
  const mostrarGen1 = () => {
    setOcultarGen1(true);
    setOcultartGen2(true);
    setOcultarGen3(true);
    setOcultarGen4(true);
    setOcultarGen5(true);
    setOcultarGen6(true);
    setOcultarGen7(true);
    setOcultarGen8(true);
  };
  const mostrarGen2 = () => {
    setOcultartGen2(false);
    setOcultarGen1(false);
    setOcultarGen3(true);
    setOcultarGen4(true);
    setOcultarGen5(true);
    setOcultarGen6(true);
    setOcultarGen7(true);
    setOcultarGen8(true);
  };
  const mostrarGen3 = () => {
    setOcultarGen3(false);
    setOcultarGen1(false);
    setOcultartGen2(true);
    setOcultarGen4(true);
    setOcultarGen5(true);
    setOcultarGen6(true);
    setOcultarGen7(true);
    setOcultarGen8(true);
  };
  const mostrarGen4 = () => {
    setOcultarGen4(false);
    setOcultarGen1(false);
    setOcultartGen2(true);
    setOcultarGen3(true);
    setOcultarGen5(true);
    setOcultarGen6(true);
    setOcultarGen7(true);
    setOcultarGen8(true);
  };
  const mostrarGen5 = () => {
    setOcultarGen5(false);
    setOcultarGen1(false);
    setOcultartGen2(true);
    setOcultarGen3(true);
    setOcultarGen4(true);
    setOcultarGen6(true);
    setOcultarGen7(true);
    setOcultarGen8(true);
  };
  const mostrarGen6 = () => {
    setOcultarGen6(false);
    setOcultarGen1(false);
    setOcultartGen2(true);
    setOcultarGen3(true);
    setOcultarGen4(true);
    setOcultarGen5(true);
    setOcultarGen7(true);
    setOcultarGen8(true);
  };
  const mostrarGen7 = () => {
    setOcultarGen7(false);
    setOcultarGen1(false);
    setOcultartGen2(true);
    setOcultarGen3(true);
    setOcultarGen4(true);
    setOcultarGen5(true);
    setOcultarGen6(true);
    setOcultarGen8(true);
  };
  const mostrarGen8 = () => {
    setOcultarGen8(false);
    setOcultarGen1(false);
    setOcultartGen2(true);
    setOcultarGen3(true);
    setOcultarGen4(true);
    setOcultarGen5(true);
    setOcultarGen6(true);
    setOcultarGen7(true);
  };

  return cargando ? (
    <Spinner />
  ) : (
    <div className=" ">
      <div className="root ">
        {/* <button className=" bg-yellow-200 py-2 px-2 rounded-md" onClick={hiddenComponent} > componente Generacion 1 </button> */}
        <div className="flex items-center justify-center">
          <div
            className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
            role="toolbar"
          >
            <button
              type="button"
              onClick={mostrarGen1}
              className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              1
            </button>
            <button
              type="button"
              onClick={mostrarGen2}
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              2
            </button>
            <button
              type="button"
              onClick={mostrarGen3}
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              3
            </button>
            <button
              type="button"
              onClick={mostrarGen4}
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              4
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center pt-1">
          <div
            className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
            role="toolbar"
          >
            <button
              type="button"
              onClick={mostrarGen5}
              className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              5
            </button>
            <button
              type="button"
              onClick={mostrarGen6}
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              6
            </button>
            <button
              type="button"
              onClick={mostrarGen7}
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              7
            </button>
            <button
              type="button"
              onClick={mostrarGen8}
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              8
            </button>
          </div>
        </div>

        {ocultartGen2 ? null : "Estoy visible gen 2"}

        {ocultarGen3 ? null : "Estoy visible gen 3"}

        {ocultarGen4 ? null : "Estoy visible gen 4"}

        {ocultarGen5 ? null : "Estoy visible gen 5"}

        {ocultarGen6 ? null : "Estoy visible gen 6"}

        {ocultarGen7 ? null : "Estoy visible gen 7"}

        {ocultarGen8 ? null : "Estoy visible gen 8"}

        {/* {ocultartGen2 && ( <p>Estoy visible gen 2</p> )}
        {ocultarGen3 && ( <p>Estoy visible gen 3</p> )}
        {ocultarGen4 && ( <p>Estoy visible gen 4</p> )}
        {ocultarGen5 && ( <p>Estoy visible gen 5</p> )}
        {ocultarGen6 && ( <p>Estoy visible gen 6</p> )}
        {ocultarGen7 && ( <p>Estoy visible gen 7</p> )}
        {ocultarGen8 && ( <p>Estoy visible gen 8</p> )} */}

        {ocultarGen1 && (
          <>
            <form className="md:col-span-4 flex items-center justify-center gap-2 mt-10">
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
                      <h3 className="text-xl text-white font-semibold">
                        Error
                      </h3>
                    </div>
                    <p className="text-white">No se encontro el Pokemon</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <Card pokeg1={pokeg1} />
          </>
        )}

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
      </div>
    </div>
  );
};
export default App;
