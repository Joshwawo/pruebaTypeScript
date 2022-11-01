
const SvgBuscar = () => {
  return (
    <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  text-gray-600 cursor-pointer"
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
  )
}

export{
    SvgBuscar
}
