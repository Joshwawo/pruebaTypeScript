
const Alerta = ({alerta}:any) => {
  return (
    <p className={`${alerta.error ? "bg-red-400": ""} inline-block px-2 rounded-md text-xl text-black dark:text-white`}>
        {alerta.message}
    </p>
  )
}

export default Alerta