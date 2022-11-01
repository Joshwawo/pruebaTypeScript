import { useState, useEffect } from "react";
import axios from "axios";

const Json = () => {
  const [test, setTest] = useState<any>({});
  const url = "http://localhost:3001/me";

  const fetData = async () => {
    try {
        const respuesta = axios.get(url, {
            headers: {
              "x-access-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGU0YjE5OWE3MGMwNTkyOGY2ZDAyMiIsImlhdCI6MTY2MTg4MjI4MH0.u--SBhrFsAlyPMKDDdA60nMF3i6vlZ_dmqTiZefVCA0",
            },
          });
          console.log((await respuesta).data);
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {
    fetData();
  }, []);

  return (
    <div className=" dark:bg-zinc-100 h-screen">
      <p>Hola desde json</p>
    </div>
  );
};

export default Json;
