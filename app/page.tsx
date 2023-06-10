import Image from "next/image"
import Link from "next/link"
import { FaBell, FaCalendar, FaSignOutAlt } from "react-icons/fa"
import { MdOutlineEditNote, MdOutlineNavigateNext } from "react-icons/md"
import { TbNumbers } from "react-icons/tb"
import "../app/globals.css"
import FrameButton from "./FrameButton"


export default function Home() {
  return (
    <>
    <FrameButton />
    <main className="flex min-h-screen flex-col items-center">
    <div className="flex flex-col items-center w-full min-h-screen py-2">
      <div className="bg-gray-500 w-36 h-36 relative my-6 rounded-full p-2 shadow-lg border-4 border-blue-500">
        <Image src="/studant.png" alt="logo" fill className="rounded-full" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">Lucas Carvalho</span>
        <span className="text-xl font-semibold text-gray-800">Estudante</span>
      </div>
      <div
        className="flex flex-col items-start h-96 w-11/12 my-10 bg-blue-500 rounded-md justify-center space-y-5"
      >
        <div className="px-10 inline-flex items-center justify-between w-full">
          <FaCalendar
            className="text-white text-2xl h-8 w-8"
          />
          <Link href={"/"} className="text-2xl font-semibold text-white">
            Calendário
          </Link>
          <MdOutlineNavigateNext
            className="flex text-white text-2xl h-8 w-8"
          />
        </div>
        <div className="w-full bg-white h-0.5"/>
          <div className="px-10 inline-flex items-center justify-between w-full">
          <TbNumbers
              className="text-white text-2xl h-8 w-8"
            />
          <Link href={"/"}  className="text-2xl font-semibold text-white px-20">
            Notas
          </Link>
            <MdOutlineNavigateNext
              className="flex text-white text-2xl h-8 w-8"
            />
        </div>
        <div className="w-full bg-white h-0.5"/>
          <div className="px-10 inline-flex items-center justify-between w-full">
          <FaBell
              className="text-white text-2xl h-8 w-8"
            />
            <Link href={"/"}  className="text-2xl font-semibold text-white px-20">
              Avisos
            </Link>
            <MdOutlineNavigateNext
              className="flex text-white text-2xl h-8 w-8"
            />
          </div>
        <div className="w-full bg-white h-0.5"/>
          <div className="px-10 inline-flex items-center justify-between w-full">
          <MdOutlineEditNote
              className="text-white text-2xl h-8 w-8"
            />
            <Link href={"/avaliacao-introducao"}  className="text-xl font-semibold text-white px-8 flex-wrap">
              Avaliação 360
            </Link>
            <MdOutlineNavigateNext
              className="flex text-white text-2xl h-8 w-8"
            />
          </div>
          <div className="w-full bg-white h-0.5"/>
          <div className="px-10 inline-flex items-center justify-between w-full">
            <FaSignOutAlt
              className="flex text-white text-2xl h-8 w-8"
            />
            <Link href={"/"}  className="text-2xl font-semibold text-white px-20">
              Sair
            </Link>
            <MdOutlineNavigateNext
              className="flex text-white text-2xl h-8 w-8"
            />
          </div>
      </div>
    </div>
    </main>
    </>
  )
}
