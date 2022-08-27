import { Link } from "react-router-dom";
import { useState } from "react";
import loadingSvg from "../img/svg-loading.svg";

const Card = ({ children }: any): any => {
  const [cargando, setCargando] = useState<boolean>(true);

  return (
    <div className=" paraXl grid sm:grid-cols-2 md:grid-cols-2 place-items-center xl:grid-cols-3">
      {children.results?.map(({ name, url }: any, index: number) => {
        let urlImagen = url.split("/");
        let numerosUrl = urlImagen[urlImagen.length - 2];

        let imagenforFetch = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${numerosUrl}.png`;

        // name = 'imageneparaLocalStorage';
        // console.log(name)

        // console.log(imagenLocalStorage);
        // let objCard:any ={
        //   imagenforFetch:imagenforFetch
        // }
        // if( window.localStorage.getItem(name) === null){
        //   window.localStorage.setItem(name, imagenforFetch);
        // }

        // if (window.localStorage.getItem){

        // }

        //  let datos  = numerosUrl + imagenforFetch

        //  window.localStorage.setItem('Imagenes', datos)
        // console.log(imagenforFetch)
        // if(window.localStorage.geItem(numerosUrl) === null){
        //   console.log('go')
        // }else{
        //   console.log('no')
        // }

        //Has una comprobacion para que no se repita la imagen en el localStorage
        if (window.localStorage.getItem(numerosUrl) === null) {
          // console.log('El localStorage esta vacio asi que lo voy a llenar')
          window.localStorage.setItem(numerosUrl, imagenforFetch);
        } else {
          // console.log('El localStorage tiene datos almacenados')
        }

        // console.log(window.localStorage.getItem(numerosUrl));
        let getImage = window.localStorage.getItem(numerosUrl);
        // console.log(getImage);

        //  let SaveData = window.localStorage.setItem(numerosUrl, imagenforFetch)
        //  console.log(SaveData)

        //  let GetData = window.localStorage.getItem(numerosUrl)

        //  console.log(GetData);

        // }
        //! window.localStorage.setItem(numerosUrl, imagenforFetch)

        // console.log();
        // console.log(imagenforFetch);
        // window.localStorage.setItem("imagenes", objCard.imagenforFetch);

        // console.log(window.localStorage.getItem(numerosUrl));
        // console.log( window.localStorage.length)
        // if ( window.localStorage.length) {
        //    console.log('lOCALSTORAGE Vacio Desde Card');
        // }else{
        //   console.log('LocalStorage Tiene datos desde card')
        // }

        // let imgTest = (window.localStorage.getItem(numerosUrl, imagenforFetch) || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/0.png");
        // console.log(imgTest + "Imagenes");

        return (
          <div key={index} className="div mt-10">
            <Link to={`/${name}`}>
              <div className=" mt-10 p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 dark:bg-[#1f1f1f] dark:hover:bg-black/10 dark:hover:bg-[#303030] hover:font-bold hover:bg-gray-300 transition duration-300 ease-in-out hover:scale-90 hover:drop-shadow-2xl">
                <div className="-mb-20 -translate-y-1/2 transform">
                  {/* <img
                    src={`${getImage}`}
                    alt={name}
                    title={name}   
                    className="mx-auto h-64 mt-10"
                    loading="lazy"

                  /> */}

                  {cargando ? (
                    <img
                      src={`${loadingSvg}`}
                      alt={name}
                      className="mx-auto w-20 h-20 mt-10 "
                      onLoad={() => setCargando(false)}
                    />
                  ) : (
                    <img
                      src={`${getImage}`}
                      alt={name}
                      className="mx-auto h-64 mt-10"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-center text-gray-600/100 dark:text-gray-400 text-3xl font-bold ">
                    {name}
                  </h3>
                  <p className=" text-gray-800/50 dark:text-gray-400 ">
                    #{numerosUrl}
                  </p>
                  <p className="text-gray-800/50 pt-2 font-bold dark:text-gray-400">
                    See Pokemon
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export { Card };

// export default Card
