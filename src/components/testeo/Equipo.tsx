import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Top from "../../img/svgTop.svg";
import Bottom from "../../img/svgBottom.svg";

const Equipo = () => {
  const clickToTop = (): void => {
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
  const clickToBottom = (): void => {
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
  return (
    <div className="root">
      {/* <p>Desde pagina Equipo</p> */}
      <p className=" tracking-widest  title-font font-medium text-gray-500 mb-1 text-center py-5 ">
      Choose a generation
      </p>
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
      <div className="flex items-center justify-center">
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="toolbar"
        >
          <Link to={"/generaciones/primera"}>
            <button
              type="button"
              className="rounded-l inline-block px-6 py-2.5 bg-gray-300/50 text-gray-400 font-medium text-xs leading-tight uppercase hover:bg-gray-300 focus:bg-gray-400/60 focus:outline-none focus:ring-0 active:bg-b-800 transition duration-150 ease-in-out"
            >
              1
            </button>
          </Link>
          <Link to={"/generaciones/segunda"}>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-gray-300/50 text-gray-400 font-medium text-xs leading-tight uppercase hover:bg-gray-300 focus:bg-gray-400/60 focus:outline-none focus:ring-0 active:bg-b-800 transition duration-150 ease-in-out"
            >
              2
            </button>
          </Link>
          <Link to={`/generaciones/tercera`}>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-gray-300/50 text-gray-400 font-medium text-xs leading-tight uppercase hover:bg-gray-300 focus:bg-gray-400/60 focus:outline-none focus:ring-0 active:bg-b-800 transition duration-150 ease-in-out"
            >
              3
            </button>
          </Link>
          <Link to={`/generaciones/cuarta`}>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-gray-300/50 text-gray-400 font-medium text-xs leading-tight uppercase hover:bg-gray-300 focus:bg-gray-400/60 focus:outline-none focus:ring-0 active:bg-b-800 transition duration-150 ease-in-out"
            >
              4
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center pt-1">
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="toolbar"
        >
          <Link to={`/generaciones/quinta`}>
            <button
              type="button"
              className="rounded-l inline-block px-6 py-2.5 bg-gray-300/50 text-gray-400 font-medium text-xs leading-tight uppercase hover:bg-gray-300 focus:bg-gray-400/60 focus:outline-none focus:ring-0 active:bg-b-800 transition duration-150 ease-in-out"
            >
              5
            </button>
          </Link>
          <Link to={`/generaciones/sexta`}>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-gray-300/50 text-gray-400 font-medium text-xs leading-tight uppercase hover:bg-gray-300 focus:bg-gray-400/60 focus:outline-none focus:ring-0 active:bg-b-800 transition duration-150 ease-in-out"
            >
              6
            </button>
          </Link>

          <Link to={`/generaciones/septima`}>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-gray-300/50 text-gray-400 font-medium text-xs leading-tight uppercase hover:bg-gray-300 focus:bg-gray-400/60 focus:outline-none focus:ring-0 active:bg-b-800 transition duration-150 ease-in-out"
            >
              7
            </button>
          </Link>
          <Link to={`/generaciones/octava`}>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-gray-300/50 text-gray-400 font-medium text-xs leading-tight uppercase hover:bg-gray-300 focus:bg-gray-400/60 focus:outline-none focus:ring-0 active:bg-b-800 transition duration-150 ease-in-out"
            >
              8
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Equipo;
