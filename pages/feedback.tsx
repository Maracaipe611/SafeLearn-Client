import Router from "next/router";
import { useEffect } from "react";
import "../app/globals.css";

export default function Feedback() {
  useEffect(() => {
    //send request to server. localhost:5001/Emergency
    (async () => {
      await fetch("https://localhost:5001/Emergency", {
        method: "GET",
      });
    })();
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen items-center">
        <span className="text-4xl my-2 text-center font-bold text-blue-700">Instruções</span>
        <div className="flex flex-col items-center w-full px-4 mt-1 justify-center ">
          <span className="text-base font-medium text-center text-gray-800 my-2">As autoridades foram acionadas nesse instante. Enquanto isso, siga as instruções a seguir</span>
          <div className="flex flex-col bg-gray-500 text-white w-full p-1 rounded-md">
            <span className="text-lg font-semibold ">1. Mantenha a calma</span>
            <span className="text-lg font-semibold">2. Se esconda em baixo da sua mesa.</span>
            <span className="text-lg font-semibold">3. Não chame atenção</span>
            <span className="text-lg font-semibold">4. Siga as orientações dos adultos</span>
            <span className="text-lg font-semibold">5. Se possível, tranque o local</span>
          </div>
        <div className="flex flex-col w-full mt-8 justify-center">
          <button
          className="flex justify-center text-center bg-blue-600 hover:bg-blue-700 text-2xl text-white font-bold p-1 rounded-md"
          onClick={() => Router.push("/ajuda")}
          >
            Entendido
          </button>
        </div>
        </div>
    </div>
  );
}