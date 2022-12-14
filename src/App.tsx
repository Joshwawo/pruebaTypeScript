import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Id";
import Random from "./pages/Random";
import Error404 from "./pages/Error404";
import { Gen1 } from "./interfaces/Gen1";
import Top from "./img/svgTop.svg";
import Bottom from "./img/svgBottom.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";
import { Card } from "./components/Card";
import Generacion2 from "./components/pokegen/Generacion2";
import Equipo from "./components/testeo/Equipo";
import ModernCard from "./components/ayudas/ModernCard";

const App = () => {
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
    <div className=" ">

      
      <div className=" ">
        <p className=" tracking-widest  title-font font-medium   dark:text-white/80 mb-1 text-center py-5 ">
        Welcome choose any C app:
        </p>
        {/* <Link to={`/generaciones`}>
          <p className="">Ir a Equipo</p>
        </Link> */}
        <a target="_blank" href="https://jorgemorales.vercel.app/">AKIIII</a>

        <ToastContainer />

        <img
          src={Top}
          alt=""
          className="fixed dark:bg-slate-400 dark:rounded-lg left-1 bottom-4 animate-bounce duration-600 ease-in-out transform -translate-y-1/2 cursor-pointer"
          onClick={clickToTop}
        />
        <img
          src={Bottom}
          alt=""
          className="fixed dark:bg-slate-400 dark:rounded-lg right-0 bottom-4  animate-bounce duration-600 ease-in-out transform -translate-y-1/2 cursor-pointer"
          onClick={clickToBottom}
        />
      </div>
      <ModernCard/>
    </div>
  );
};


export default App;
