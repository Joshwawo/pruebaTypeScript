import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ClashHome from "./components/clashroyale/ClashHome";
import Footer from "./components/Footer";
import LolChamps from "./components/lol/LolChamps";
import LolUserPage from "./components/lol/LolUserPage";
import Navbar from "./components/Navbar";
import Generacion1 from "./components/pokegen/Generacion1";
import Generacion2 from "./components/pokegen/Generacion2";
import Generacion3 from "./components/pokegen/Generacion3";
import Generacion4 from "./components/pokegen/Generacion4";
import Generacion5 from "./components/pokegen/Generacion5";
import Generacion6 from "./components/pokegen/Generacion6";
import Generacion7 from "./components/pokegen/Generacion7";
import Generacion8 from "./components/pokegen/Generacion8";
import Equipo from "./components/testeo/Equipo";
import NuevoE from "./components/testeo/NuevoE";
import Une from "./components/testeo/Une";
import "./index.css";
import Error404 from "./pages/Error404";
import Home from "./pages/Id";
import Json from "./pages/Json";
import Random from "./pages/Random";
import RandomId from "./pages/RandomId";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
   <div className=" ">
     <BrowserRouter>
       <Navbar />
    
       <Routes>
         <Route path="/" element={<App />} />
         <Route path="/:id" element={<Home />} />
         <Route path="/random" element={<Random />} />
         <Route path="/random/:id" element={<RandomId />} />
         {/* <Route */}
         <Route path="generaciones" element={<Equipo />}>
           <Route path="primera" element={<Generacion1 />} />
           <Route path="segunda" element={<Generacion2 />} />
           <Route path="tercera" element={<Generacion3 />} />
           <Route path="cuarta" element={<Generacion4 />} />
           <Route path="quinta" element={<Generacion5 />} />
           <Route path="sexta" element={<Generacion6 />} />
           <Route path="septima" element={<Generacion7 />} />
           <Route path="octava" element={<Generacion8 />} />
         </Route>
    
         <Route path="/lol" element={<LolUserPage/>}>
           <Route path="champs" element={<LolChamps/>} />
         </Route>
         <Route path="/clashroyale" element={<ClashHome/>} />
        <Route path="/json" element={<Json/>} />
         
         <Route path="*" element={<Error404 />} />
       </Routes>
    
       <Footer />
     </BrowserRouter>
   </div>
  </React.StrictMode>
);
