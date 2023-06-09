import Router from "next/router";
import { useEffect, useState } from "react";
import "../app/globals.css";

export default function Emergencia() {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }else {
      //redirect to feedback page
      Router.push("/feedback");
    }
  }, [timer]);

  return (
    <div className="flex flex-col min-h-screen items-center py-2 w-full">
        <span className="text-4xl my-1 text-center font-bold text-red-700">Emergência</span>
        <div className="flex flex-col my-6 justify-center w-40 h-40 border-2 border-red-600 rounded-full">
          <span className="text-6xl text-center font-bold text-red-600">{timer}</span>
        </div>
        <div className="flex flex-col w-full my-8 justify-center">
          <span className="text-2xl text-center font-semibold text-red-600">Você acionou o botão de emergência</span>
        </div>
        <div className="flex flex-col w-full my-8 justify-center px-8">
          <button
          className="bg-red-500 hover:bg-red-700 text-4xl text-white font-bold py-2 px-4 rounded-md text-center flex justify-center"
          onClick={() => Router.push("/ajuda")}
          >
            Cancelar
          </button>
        </div>
    </div>
  );
}