import Router from "next/router";
import "../app/globals.css";

export default function AvaliacaoIntroducao()
{
  return (
    <div className="flex flex-col min-h-screen items-center py-2">
      <span className="text-4xl my-2 font-bold text-blue-600 text-center flex justify-center w-full">
        Avaliação 360
      </span>
      <span className="text-3xl my-8 font-bold text-gray-800 text-center flex justify-center w-full">
      Instruções
      </span>
      <span className="text-xl px-8 my-10 text-gray-800 text-center flex justify-center w-full">
      Leia as instruções a seguir para realização das avaliações.
      </span>
      <div className="bg-gray-300 p-2 m-4 h-full flex flex-col items-center">
        <span className="text-lg text-gray-800 flex items-center w-full">
          1. Você começará com uma auto-avaliação
        </span>
        <span className="text-lg text-gray-800 flex items-center w-full">
          2. Você avaliará 5 colegas seus
        </span>
        <span className="text-lg text-gray-800 flex items-center w-full">
          3. Por fim, avaliará seus professores.
        </span>
      </div>
      <div className="flex flex-col w-8/12 mt-32 justify-center">
        <button
        className="flex justify-center text-center bg-blue-600 hover:bg-blue-700 text-2xl text-white font-bold p-1 rounded-md"
        onClick={() => Router.push("/auto-avaliacao")}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}