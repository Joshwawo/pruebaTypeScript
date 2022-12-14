import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  // const [dark, setDark] = useState(Boolean(localStorage.getItem("dark")));
  // console.log(window.matchMedia.p)
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = "dark";

  if(localStorage.theme === "dark"){
    document.body.style.backgroundColor = "#0f1109";
  }else{
    document.body.style.backgroundColor = "white";
  }

  // localStorage.theme = localStorage.theme == "dark" ? "light" : "dark";
  const toggleDarkMode = () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");

    if(localStorage.theme === "dark"){
      document.body.style.backgroundColor = "#0f1109";
    }else{
      document.body.style.backgroundColor = "white";
    }
    // document.body.style.backgroundColor = localStorage.theme === "dark" ? "white" : "#1a1a1a";
    // console.log(localStorage.theme);
    // if (localStorage.theme === "dark") {
    //   // document.body.removeAttribute("style");
    //   let bgblack = (document.body.style.backgroundColor = "black");
    //   // console.log(bgblack);
    //   localStorage.theme = "dark";
    // } else {
    //   // document.body.removeAttribute("style");
    //   let bgwhite = (document.body.style.backgroundColor = "white");
    //   // console.log(bgwhite);
    //   localStorage.theme = "light";
    // }
  };

  return (
    <nav className="w-full  bg-white dark:bg-[#0f1109]">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <h2 className="text-2xl font-bold dark:text-white/80">
                Arcade<span className="text-blue-500"> Games </span>
              </h2>
            </Link>
            <button className=" dark:text-white" onClick={toggleDarkMode}>
              {" "}
              Mode:????????
            </button>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-green-600">
                <Link to="/">
                  <p className="  dark:text-white/80">Home</p>
                </Link>
              </li>
              <li className="text-gray-600 hover:text-green-600">
                <Link to="random">
                  <p className=" dark:text-white/80">Random Pokemon</p>
                </Link>
              </li>
              {/* <li className="text-gray-600 hover:text-green-600">
                <p>About me</p>
              </li>
              <li className="text-gray-600 hover:text-green-600">
                <p>Contact Me</p>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
