import Link from "next/link"
import { TbAlertCircleFilled } from "react-icons/tb"
import "../app/globals.css"

export default function Ajuda() {
  return (
    <div className="flex flex-col min-h-screen items-center py-2 h-80">
        <span className="text-4xl text-center font-bold text-yellow-700">Emergência</span>
        
      <div
        className="flex flex-col items-start h-72 w-11/12 my-20 bg-yellow-600 rounded-md justify-center space-y-5"
      >
        <div className="flex flex-col items-start h-72 w-full justify-center">
          <div className="px-10 inline-flex items-center justify-center w-full  h-full">
            <Link href={"/"} className="text-2xl font-semibold text-white">Denúncia</Link>
          </div>
          <div className="w-full bg-white h-0.5"/>
          <div className="px-10 inline-flex items-center justify-center w-full  h-full">
            <Link href={"/telefones"}  className="text-2xl text-center font-semibold text-white px-2">
              Telefones de emergência
            </Link>
          </div>
          <div className="w-full bg-white h-0.5"/>
          <div className="px-4 inline-flex items-center rounded-b-md bg-red-700 h-full justify-between w-full">
            <TbAlertCircleFilled className="text-yellow-600 text-2xl h-8 w-8"/>
            <Link href={"/emergencia"}  className="text-2xl text-center font-semibold text-white px-2">
              SOCORRO
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}