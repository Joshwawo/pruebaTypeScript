import React from 'react'

const ClashBg = () => {
  return (
    <div>ClashBg</div>
  )
}

export default ClashBg



// import axios from "axios";
// import { useState, useEffect } from "react";
// import { ClashUserTag } from "../../interfaces/ClashRoyale";

// const ClashHome = () => {
//   const [clashRoyaleData, setClashRoyaleData] = useState<ClashUserTag>(
//     {} as ClashUserTag
//   );
//   const [userChest, setUserChest] = useState<any>([]);
//   const [searchText, setSearchText] = useState<string>("#QPYJPJ20");

//   const getUserTag = async (): Promise<void> => {
//     try {
//       // const url = "http://localhost:3307/clash/user";
//       const url = "https://blogporta.herokuapp.com/clash/user";
//       const urlChest = `https://blogporta.herokuapp.com/clash/userchest`;

//       const respuesta = await axios.get<ClashUserTag>(url, {
//         params: {
//           userHashtag: searchText.toUpperCase().replace("#", "%23"),
//         },
//       });

//       const respuestaChest = await axios.get(urlChest,{
//         params: {
//           userHashtag: searchText.toUpperCase().replace("#", "%23"),
//         }
//       });
//       // console.log(respuestaChest.data);
//       setUserChest(respuestaChest.data.items);
//       //   console.log(respuesta.data);
//       setClashRoyaleData(respuesta.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     // getUserTag()
//   }, []);
//   // console.log(userChest);
//   // console.log(clashRoyaleData);

//   return (
//     <div className="root">
//       <div className="md:col-span-4 flex items-center justify-center gap-2 mt-10">
//         <input
//           type="text"
//           onChange={(evento) => setSearchText(evento.target.value)}
//           className="text-center w-full md:w-1/2 bg-gray-100 outline-none p-2 rounded-lg "
//           placeholder="Ingresa tu gamertag de clashroyale eje: #QPYJPJ20"
//         />
//         <button type="submit" onClick={getUserTag}>
//           Send
//         </button>
//         {/* <input type="submit" value="" onClick={getUserTag} /> */}
//         {/* <button type="submit"  onSubmit={getUserTag} > Enviar</button> */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6 text-gray-600 cursor-pointer"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//             // onClick={getUserTag}
//             className="cursor-pointer bg-black w-10 h-10 rounded-full flex justify-center items-center"
//           />
//         </svg>
//         <p>#QPYJPJ20</p>
//       </div>

//       {Object.keys(clashRoyaleData).length === 0 ? (
//         <p className=" pt-5 text-center text-gray-500/80 outline-none p-2 rounded-lg">
//          Start by looking for someone with a correct gametag Example: #QPYJPJ20{" "}
//         </p>
//       ) : clashRoyaleData === undefined ? (
//         ""
//       ) : (
//         <div className=" pt-10  ">
//           <div className="text-justify dark:text-white">
//             <p>Player Name: {clashRoyaleData.name}</p>
//             <p>Player Tag: {clashRoyaleData.tag}</p>
//             <p>
//               Clan: {clashRoyaleData.clan?.name}{" "}
//               <span>{clashRoyaleData.clan?.tag}</span>
//             </p>
//             <p>Donatios: {clashRoyaleData.donations}</p>
//             <p>Donatios received: {clashRoyaleData.donationsReceived}</p>
//             <p>Total Donations: {clashRoyaleData.totalDonations}</p>
//             <p>Role: {clashRoyaleData.role}</p>
//             <p>Arena: {clashRoyaleData.arena?.name}</p>
//             <p>Start Points: {clashRoyaleData.starPoints}</p>
//             <p>Exp Points: {clashRoyaleData.expPoints}</p>
//             <p>Trophies: {clashRoyaleData.trophies}</p>
//             <p>Best Trophies: {clashRoyaleData.bestTrophies}</p>
//             <p>Exp Level: {clashRoyaleData.expLevel}</p>
//             <p>Wins: {clashRoyaleData.wins}</p>
//             <p>Losses: {clashRoyaleData.losses}</p>
//             {/* <p>Win Percentage: {clashRoyaleData.wins / clashRoyaleData.losses}</p> */}
//             <p>battle Count: {clashRoyaleData.battleCount}</p>
//             <p>three Crown Wins: {clashRoyaleData.threeCrownWins}</p>
//             <p>challenge Max Wins: {clashRoyaleData.challengeMaxWins}</p>
//             <p>challenge Cards Won: {clashRoyaleData.challengeCardsWon}</p>
//             <p>tournament Cards Won: {clashRoyaleData.tournamentCardsWon}</p>
//             <p>
//               tournamentBattleCount: {clashRoyaleData.tournamentBattleCount}
//             </p>
//             <p>War dat wins: {clashRoyaleData.warDayWins}</p>
//             <p>Clan cards collected</p>
//           </div>
//           <p className="py-5">Current Deck: </p>
//           <div className="divo grid md:grid-cols-3 xl:grid-cols-4 place-items-center ">
//             {clashRoyaleData.currentDeck?.map(
//               ({
//                 count,
//                 iconUrls: { medium },
//                 id,
//                 level,
//                 maxLevel,
//                 name,
//                 starLevel,
//               }) => (
//                 <div key={id} className="divo dark:bg-gray-500/20">
//                   <div className="max-w-sm rounded overflow-hidden shadow-lg">
//                     <img
//                       className="w-full object-cover"
//                       src={medium}
//                       alt="Sunset in the mountains"
//                     />
//                     <div className="px-6 py-4">
//                       <div className="font-bold text-xl mb-2 dark:text-white">{name}</div>
//                     </div>
//                     <div className="px-6 pt-4 pb-2">
//                       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                         Level: {level}
//                       </span>
//                       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                         Starlevel: {starLevel}
//                       </span>
//                       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                         MaxLevel:{maxLevel}
//                       </span>
//                       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                         Count: {count}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       )}
//       <p className="py-10 dark:text-white">next chest</p>
//       {userChest?.map((item: any) => (
//         <p key={item.index} className="dark:text-white" >{item.name}</p>
//       ))}
//     </div>
//   );
// };

// export default ClashHome;

