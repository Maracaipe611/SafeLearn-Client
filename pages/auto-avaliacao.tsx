import Router from "next/router";
import "../app/globals.css";

export default function avaliacao() {
  const selfQuestions = `Quanto você acha que seus colegas de classe colaboram com você nas atividades escolares?
    Com que frequência você busca ajuda de seus colegas de classe quando tem dificuldade em uma tarefa?
    Com que frequência você se sente motivado(a) para participar ativamente nas aulas?
    Com que frequência você se envolve em projetos ou atividades extracurriculares na escola?
    Quanto você acha que respeita as opiniões e perspectivas de seus colegas de classe?
    Com que frequência você procura se autoavaliar para identificar áreas de melhoria?
    Com que frequência você se sente confiante para expressar suas ideias em sala de aula?
    Quanto você acha que consegue equilibrar suas responsabilidades escolares com outras atividades fora da escola?
    Com que frequência você se envolve em discussões construtivas sobre temas relevantes durante as aulas?
    Quanto você acredita que está aproveitando as oportunidades de aprendizado oferecidas pela escola?`.split("\n");

  const answers = `Nunca
  Raramente
  Ás vezes
  Frequentemente
  Sempre`.split("\n");

  return (
    <div className="flex flex-col min-h-screen items-center py-2 overflow-y">
      <span className="text-4xl my-2 text-center font-bold text-blue-700">Avaliação</span>
      <div className="flex flex-col items-center w-full px-4 mt-1 justify-center ">
        <span className="text-base font-medium text-center text-gray-800 my-2">Avalie-se nas seguintes questões</span>
      </div>
      <div className="flex flex-col max-h-112 w-11/12 p-2 mt-8 bg-gray-300 rounded-lg overflow-y-auto">
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
      <div className="flex flex-col w-8/12 mt-20 justify-center">
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