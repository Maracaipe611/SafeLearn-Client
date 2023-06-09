import { useState } from "react";
import "../app/globals.css";

export default function cadastro(){
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [motherName, setMotherName] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const send = async () => {
    await fetch("https://localhost:5001/Usuarios", {
      method: "POST",
      body: JSON.stringify({
        nome: name,
        sobrenome: surname,
        email: email,
        nomeMae: motherName,
        dataNascimento: birthDate.replace("/", "-").replace("/", "-"),
        senha: password,
        foto: "",
      }),
    });
    alert("Cadastro realizado com sucesso!");
  };

  return(
    <div className="flex flex-col min-h-screen items-center py-4">
      <h1 className="text-xl pt-2 text-center font-bold text-blue-700">Safe Learn</h1>
      <h1 className="text-6xl text-center font-bold text-blue-700">Cadastro</h1>
      <div className="flex flex-col w-8/12 h-screen justify-center items-center space-y-4 pb-28">
        <input type="text" placeholder="Nome" className="w-full border-2 border-black rounded-md p-2 my-2" onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Sobrenome" className="w-full border-2 border-black rounded-md p-2 my-2" onChange={(e) => setSurname(e.target.value)} />
        <input type="text" placeholder="Email" className="w-full border-2 border-black rounded-md p-2 my-2" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" className="w-full border-2 border-black rounded-md p-2 my-2" onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Nome da mãe" className="w-full border-2 border-black rounded-md p-2 my-2" onChange={(e) => setMotherName(e.target.value)} />
        <input type="text" placeholder="Data de nascimento" className="w-full border-2 border-black rounded-md p-2 my-2" onChange={(e) => setBirthDate(e.target.value)} />
        <button
          className="bg-blue-500 mt-12 hover:bg-blue-700 text-4xl text-white font-bold py-2 px-4 rounded-md"
          onClick={() => send()}
        >
          Cadastrar
          </button>
      </div>
    </div>
  )
}