import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Id";
import Random from "./pages/Random";
import Error404 from "./pages/Error404";
import { Gen1 } from './interfaces/Gen1';
import axios from "axios";

function App() {
  const [pokeg1, setPokeg1] = useState<Gen1>({} as Gen1);
  const [tablaPokemon, setTablaPokemon] = useState<Gen1>({} as Gen1);
  const [busqueda, setBusqueda] = useState<string>("");

  const getPokemon = async (): Promise<Gen1> => {
    const { data } = await axios.get<Gen1>(
      `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
    );

    return data;
  };

  useEffect(() => {
    getPokemon().then((data) => {
      setPokeg1(data);
      setTablaPokemon(data);
      // console.log(data);
    });
  }, []);

  const handerChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evento.target.value);
    setBusqueda(evento.target.value);
    filtraPokemon(evento.target.value);
    // console.log(filtraPokemon);
    console.log(tablaPokemon);
    console.log(filtraPokemon);
    // console.log(tablaPokemon);
  };

  // console.log(tablaPokemon.results)
  
  const filtraPokemon = (busqueda: string):void => {
    const resultado = tablaPokemon.results?.filter((pokeBusqueda:any):void=>{
      if(pokeBusqueda.name.toString().toLowerCase().includes(busqueda.toLowerCase())){
        return pokeBusqueda;
      }
    })
    //  setPokeg1({...tablaPokemon, results: resultado});
    setPokeg1({...pokeg1, results: resultado});
    // setPokeg1(resultado)
    // console.log(results: resultado):
  }

  // console.log(setBusqueda);
// console.log(pokeg1?.results?.[0]?.url[34]);
// console.log(pokeg1);

// console.log(Object.keys(pokeg1.results));
// console.log(Object.keys(pokeg1));




// length: pokeg1.results?.length;

{/* pokeg1?.results?.length < 1 ? "No hay pokemones" : "Hay pokemones"  */}

// pokeg1?.results?.length < 1 ? "No hay pokemones" : "Hay pokemones"
//Comprobar si hay pokemones 




  return (
    <div className=" root">
      {/* <button className="bg-yellow-300" onClick={actulizarPagina }>Actulizar pagina</button> */}


      <p className=" text-2xl mb-14">
        Hola desde la app.tsx || Pokemon primera generación
      </p>
      <label htmlFor="" className=" font-bold text-xl">
        Buscar un pokemon
      </label>
      <input
        type="text"
        value={busqueda}
        onChange={handerChange}
        className=" mx-2 focus:outline-none border-b-2 border-black"
      />




      <div className=" py-10">
        {
          pokeg1?.results?.length ===0 ? (<p className=" font-semibold text-2xl">¡No se encontro el pokemon!</p>) : ""
        }
      </div>

      <div className=" grid sm:grid-cols-2 md:grid-cols-1 place-items-center xl:grid-cols-3">
        {pokeg1.results?.map(({ name,url }, index: number) => {
          let urlImagen = url.split("/");
          let numerosUrl = urlImagen[urlImagen.length - 2];
          
           

          return (
            <div key={index} className="div mt-10">
              <div className=" mt-10 p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 hover:text-black/90 hover:font-bold hover:bg-gray-300 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className="-mb-20 -translate-y-1/2 transform">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${numerosUrl}.png`}
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
                <p>
                  
                </p>
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
