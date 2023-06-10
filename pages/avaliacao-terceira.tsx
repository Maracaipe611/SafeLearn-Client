import Image from "next/image";
import Router from "next/router";
import "../app/globals.css";

export default function avaliacao() {
  const selfQuestions = `    Na sua opinião, em que medida o NOME colabora com você nas atividades escolares?
    Com que frequência você observa o NOME buscando ajuda quando tem dificuldades em tarefas escolares?
    Quão motivado você acha que o NOME está para participar ativamente nas aulas?
    Com que frequência você percebe o NOME se envolvendo em projetos ou atividades extracurriculares na escola?
    Quanto você acredita que o NOME respeita as opiniões e perspectivas dos outros?
    Com que frequência você observa o NOME se autoavaliando para identificar áreas de melhoria?
    Quanto você percebe que o NOME se sente confiante para expressar suas ideias em sala de aula?
    Na sua percepção, como o NOME equilibra suas responsabilidades escolares com outras atividades fora da escola?
    Com que frequência você observa o NOME se envolvendo em discussões construtivas sobre temas relevantes durante as aulas?
    Quanto você acredita que o NOME está aproveitando as oportunidades de aprendizado oferecidas pela escola?`.split("\n");

  const answers = `Nunca
  Raramente
  Ás vezes
  Frequentemente
  Sempre`.split("\n");

  return (
    <div className="flex flex-col min-h-screen items-center py-2 overflow-y">
      <span className="text-4xl my-2 text-center font-bold text-blue-700">Avaliação</span>
      <div className="bg-gray-500 w-36 h-36 relative my-2 rounded-full p-2 shadow-lg border-4 border-blue-500">
        <Image src="/studant.png" alt="logo" fill className="rounded-full" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">Lucas Carvalho</span>
        <span className="text-xl font-semibold text-gray-800">Estudante</span>
      </div>
      <div className="flex flex-col items-center w-full px-4 mt-1 justify-center ">
        <span className="text-base font-medium text-center text-gray-800 my-2">Avalie a pessoa acima</span>
      </div>
      <div className="flex flex-col max-h-96 w-11/12 p-2 mt-2 bg-gray-300 rounded-lg overflow-y-auto">
        {
          selfQuestions.map((question, index) => {
            return(
              <div className="p-2">
                <span className="text-lgfont-semibold my-2">{index + 1}. {question}</span>
                <div className="flex flex-row justify-between">
                  {
                    answers.map((answer) => {
                      return(
                        <div className="flex flex-col items-center my-1 justify-center">
                          <input type="radio" name={question} value={answer} />
                          <span className="text-xs font-medium text-center text-gray-800 my-2">{answer}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )})}
      </div>
      <div className="flex flex-col w-8/12 mt-12 justify-center">
        <button
        className="flex justify-center text-center bg-blue-600 hover:bg-blue-700 text-2xl text-white font-bold p-1 rounded-md"
        onClick={() => Router.push("/avaliacao-terceira")}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}