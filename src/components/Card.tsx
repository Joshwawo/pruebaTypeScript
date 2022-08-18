import React from 'react'

import {Link} from 'react-router-dom'


const Card = ({children}:any):any => {
  return (
    <div className=" paraXl grid sm:grid-cols-2 md:grid-cols-2 place-items-center xl:grid-cols-3">
        {children.results?.map(({ name, url }:any, index: number) => {
          let urlImagen = url.split("/");
          let numerosUrl = urlImagen[urlImagen.length - 2];
        //   console.log(numerosUrl);

          return (
            <div key={index} className="div mt-10">
               <Link to={`/${name}`}> 
             
                <div className=" mt-10 p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 hover:text-black/90 hover:font-bold hover:bg-gray-300 transition duration-300 ease-in-out hover:scale-90 hover:drop-shadow-2xl">
                  <div className="-mb-20 -translate-y-1/2 transform">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${numerosUrl}.png`}
                      alt={name}
                      title={name}
                      className="mx-auto h-64 mt-10"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-center text-gray-600/100 text-3xl font-bold ">
                      {name}
                    </h3>
                    <p className=" text-gray-800/50 ">#{numerosUrl}</p>
                    <p className="text-gray-800/50 pt-2 font-bold">
                      Ver Pokemon
                    </p>
                  </div>
                </div>
               </Link> 
            </div>
          );
        })}
      </div>
  )
}

export {
    Card
}

// export default Card