import axios from "axios";
import { useState, useEffect } from "react";
import {
  ClashUserTag,
  ClashUserChest,
  Item,
} from "../../interfaces/ClashRoyale";

const ClashHome = () => {
  const [clashRoyaleData, setClashRoyaleData] = useState<ClashUserTag>(
    {} as ClashUserTag
  );
  const [userChest, setUserChest] = useState<ClashUserChest>(
    {} as ClashUserChest
  );
  const [searchText, setSearchText] = useState<string>("#QPYJPJ20");

  const getUserTag = async (): Promise<void> => {
    try {
      // const url = "http://localhost:3307/clash/user";
      const url = "https://blogporta.herokuapp.com/clash/user";
      const urlChest = `https://blogporta.herokuapp.com/clash/userchest`;

      const respuesta = await axios.get<ClashUserTag>(url, {
        params: {
          userHashtag: searchText.toUpperCase().replace("#", "%23"),
        },
      });

      const respuestaChest = await axios.get<ClashUserChest>(urlChest, {
        params: {
          userHashtag: searchText.toUpperCase().replace("#", "%23"),
        },
      });
      // console.log(respuestaChest.data);
      setUserChest(respuestaChest.data);
      //   console.log(respuesta.data);
      setClashRoyaleData(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getUserTag()
  }, []);
  // console.log(userChest);
  // console.log(clashRoyaleData);

  // console.log(userChest)
  // Object.values(userChest).map((key)=>{
  //   console.log(key)
  // })

  // console.log(userChest.items?.map((chest, index)=>{
  // console.log(chest.name.toLowerCase().replace(" ", "-"))
  //  return console.log(chest.name.toLowerCase()[-2])
  // console.log(chest.name.toLowerCase().replace(" ", "-").replace(" ", "-").includes('overflowing-gold-crate'))

  // }
  // ))

  return (
    <div className="root">
      <div className="md:col-span-4 flex items-center justify-center gap-2 mt-10">
        <input
          type="text"
          onChange={(evento) => setSearchText(evento.target.value)}
          className="text-center w-full md:w-1/2 bg-gray-100 outline-none p-2 rounded-lg "
          placeholder="Ingresa tu gamertag de clashroyale eje: #QPYJPJ20"
        />
        <button type="submit" onClick={getUserTag} className=" dark:text-white">
          Send
        </button>
        {/* <input type="submit" value="" onClick={getUserTag} /> */}
        {/* <button type="submit"  onSubmit={getUserTag} > Enviar</button> */}
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
            // onClick={getUserTag}
            className="cursor-pointer bg-black w-10 h-10 rounded-full flex justify-center items-center"
          />
        </svg>
        <p className=" dark:text-white">#QPYJPJ20</p>
      </div>

      {Object.keys(clashRoyaleData).length === 0 ? (
        <p className=" pt-5 text-center text-gray-500/80 outline-none p-2 rounded-lg">
          Start by looking for someone with a correct gametag Example: #QPYJPJ20{" "}
        </p>
      ) : clashRoyaleData === undefined ? (
        ""
      ) : (
        <div className=" pt-10  ">
          <div className="text-justify bg-red-40 grid md:grid-cols-4 items-start place-items-center gap-y-5 dark:text-white">
            <div className="PERFIl font-medium   b-yellow-200">
              <p className=" font-bold text-xl">Player 😎</p>
              <p className=" ">Player Name: {clashRoyaleData.name}</p>
              <p>Player Tag: {clashRoyaleData.clan?.tag}</p>
              <p>Arena: {clashRoyaleData.arena.name}</p>
              <p>Clan: {clashRoyaleData.clan?.name}</p>
              <p>Role: {clashRoyaleData.role}</p>
              <p>Clan Tag: {clashRoyaleData.clan?.tag}</p>
            </div>
            <div className="trophies font-medium   b-green-300">
              <p className=" font-bold text-xl">TROPHIES🏆</p>
              <p>Highest: {clashRoyaleData.trophies}</p>
              <p>Highest Trophies: {clashRoyaleData.bestTrophies}</p>
            </div>
            <div className="stats font-medium   b-blue-200">
              <p className=" font-bold text-xl">STATS ROYALE📊</p>
              <p>Wins: {clashRoyaleData.wins}</p>
              <p>Losses: {clashRoyaleData.losses}</p>
              <p>Three Crown Wins: {clashRoyaleData.threeCrownWins}</p>
              <p>Total Donations: {clashRoyaleData.donations}</p>
            </div>

            <div className="clanwars font-medium  ">
              <p className=" font-bold text-xl">CLANWARS🏆</p>
              <p>Clan War Wins: {clashRoyaleData.warDayWins}</p>
              {/* <p>Clan Cards Collected: {clashRoyaleData.}</p> */}
            </div>
          </div>
          <p className="py-5 font-bold text-xl dark:text-white">
            Current Deck:{" "}
          </p>
          <div className="divo grid grid-cols-4 md:grid-cols-4 xl:grid-cols-8 place-items-center ">
            {clashRoyaleData.currentDeck?.map(
              ({
                count,
                iconUrls: { medium },
                id,
                level,
                maxLevel,
                name,
                starLevel,
              }) => (
                <div key={id} className="">
                  <img className=" object-cover w-36" src={medium} alt={name} />
                </div>
              )
            )}
          </div>
        </div>
      )}
      {/* <p className="py-10 dark:text-white">next chest</p> */}

      <div className="divos grid grid-cols-5 gap-y-6 mt-10">
        {userChest.items?.map((key, index) => {
          let imga = key.name.toLowerCase().replace(" ", "-");
          let imagenm = key.name
            .toLowerCase()
            .replace(" ", "-")
            .replace(" ", "-")
            .replace("mega-lightning-chest", "super-lightning-chest")
            .replace("overflowing-gold-crate","PlentifulCrate");
          console.log(imagenm);
          return (
            <div key={index} className="flex justify-center items-center">
              {/* <img className="object-cover w-36" src={key.iconUrls.medium} alt={key.name} /> */}
              {/* <p className=" dark:text-white">{key.name}</p> */}
              <p className=" dark:text-white relative left-8 top-9 text-center">{key.index ==0 ? 'Next': key.index }</p>
              {/* <p className=" text-red-600 relative left-7 top-8">{key.index}p</p> */}

              <img
                src={`https://cdn.statsroyale.com/images/${imagenm}.png`}
                alt={`${imagenm}`}
                className=" dark:text-white w-12 after:contents"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClashHome;
