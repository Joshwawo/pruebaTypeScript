import React from "react";

const ComparadorRandom = ({ tipo1, texto }: any): any => {
  return (
    <span
      className={` block tracking-widest text-md title-font font-medium text-gray-400 mb-1 ${
        tipo1 == "grass"
          ? "text-green-200"
          : tipo1 == "poison"
          ? "text-purple-200"
          : tipo1 == "normal"
          ? "text-[#A8A878]"
          : tipo1 == "fire"
          ? "text-[#F08030]"
          : tipo1 == "water"
          ? "text-[#6890F0]"
          : tipo1 == "electric"
          ? "text-[#F8D030]"
          : tipo1 == "ice"
          ? "text-blue-200"
          : tipo1 == "fighting"
          ? "text-[#C22E28]"
          : tipo1 == "psychic"
          ? "text-[#F85888]"
          : tipo1 == "ground"
          ? "text-[#E0C068]"
          : tipo1 == "flying"
          ? "text-[#A890F0]"
          : tipo1 == "bug"
          ? "text-[#A8B820]"
          : tipo1 == "rock"
          ? "text-[#B8A038]"
          : tipo1 == "ghost"
          ? "text-[#705898]"
          : tipo1 == "dragon"
          ? "text-[#7038F8]"
          : tipo1 == "dark"
          ? "text-[#705848]"
          : tipo1 == "steel"
          ? "text-[#B8B8D0]"
          : tipo1 == "fairy"
          ? "text-[#EE99AC]"
          : ""
      }`}
    >
      {texto}
    </span>
  );
};

const ComparadorRandomTipos = ({ tipo1, tipo2 }: any): any => {
  return (
    <div className="my-2">
      <span
        className={`tracking-widest text-md title-font font-medium text-gray-400 mb-1 pr-4 ${
          tipo1 == "grass"
            ? "text-green-200"
            : tipo1 == "poison"
            ? "text-purple-200"
            : tipo1 == "normal"
            ? "text-[#A8A878]"
            : tipo1 == "fire"
            ? "text-[#F08030]"
            : tipo1 == "water"
            ? "text-[#6890F0]"
            : tipo1 == "electric"
            ? "text-[#F8D030]"
            : tipo1 == "ice"
            ? "text-blue-200"
            : tipo1 == "fighting"
            ? "text-[#C22E28]"
            : tipo1 == "psychic"
            ? "text-[#F85888]"
            : tipo1 == "ground"
            ? "text-[#E0C068]"
            : tipo1 == "flying"
            ? "text-[#A890F0]"
            : tipo1 == "bug"
            ? "text-[#A8B820]"
            : tipo1 == "rock"
            ? "text-[#B8A038]"
            : tipo1 == "ghost"
            ? "text-[#705898]"
            : tipo1 == "dragon"
            ? "text-[#7038F8]"
            : tipo1 == "dark"
            ? "text-[#705848]"
            : tipo1 == "steel"
            ? "text-[#B8B8D0]"
            : tipo1 == "fairy"
            ? "text-[#EE99AC]"
            : ""
        }`}
      >
        {tipo1}
      </span>
      <span
        className={`tracking-widest text-md title-font font-medium text-gray-400 mb-1 ${
          tipo2 == "grass"
            ? "text-green-200"
            : tipo2 == "poison"
            ? "text-purple-200"
            : tipo2 == "normal"
            ? "text-[#A8A878]"
            : tipo2 == "fire"
            ? "text-[#F08030]"
            : tipo2 == "water"
            ? "text-[#6890F0]"
            : tipo2 == "electric"
            ? "text-[#F8D030]"
            : tipo2 == "ice"
            ? "text-blue-200"
            : tipo2 == "fighting"
            ? "text-[#C22E28]"
            : tipo2 == "psychic"
            ? "text-[#F85888]"
            : tipo2 == "ground"
            ? "text-[#E0C068]"
            : tipo2 == "flying"
            ? "text-[#A890F0]"
            : tipo2 == "bug"
            ? "text-[#A8B820]"
            : tipo2 == "rock"
            ? "text-[#B8A038]"
            : tipo2 == "ghost"
            ? "text-[#705898]"
            : tipo2 == "dragon"
            ? "text-[#7038F8]"
            : tipo2 == "dark"
            ? "text-[#705848]"
            : tipo2 == "steel"
            ? "text-[#B8B8D0]"
            : tipo2 == "fairy"
            ? "text-[#EE99AC]"
            : ""
        }`}
      >
        {tipo2}
      </span>
    </div>
  );
};

export { ComparadorRandom, ComparadorRandomTipos };
