import { useState } from "react";
import InputGroup from "../components/InputGroup";
export default function ContactSection() {
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="h-screen 2xl:py-28 py-10 px-16 ">
      <h2 className="2xl:text-7xl text-6xl font-Poppins font-bold">Let's work together.</h2>
      <div className="flex flex-row gap-10 2xl:mt-36 mt-10 text-black">
        <div className="flex flex-col gap-8 font-Poppins">
          <div className="2xl:h-[190px] 2xl:w-[630px] h-[130px] w-[420px] bg-white rounded-2xl flex flex-col 2xl:p-10 justify-center 2xl:gap-10 gap-5">
            <div className="flex justify-center font-semibold 2xl:text-2xl text-md">
              53 Solsbury Cres, Keysborough VIC 3173
            </div>
            <div className="flex flex-row justify-between 2xl:px-9 px-12 font-semibold text-gray-700 2xl:text-md text-xs">
              <button >skprojx.devstack@gmail.com</button>
              <button>+61 481 776 611</button>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="2xl:h-[190px] 2xl:w-[300px] h-[100px] w-[197px] rounded-2xl cursor-pointer bg-LinkedIn 2xl:bg-cover bg-contain bg-no-repeat bg-center bg-[#2968B2]"></div>
            <div className="2xl:h-[190px] 2xl:w-[300px] h-[100px] w-[200px] rounded-2xl cursor-pointer bg-Github 2xl:bg-cover bg-contain bg-no-repeat bg-center bg-[#1B2C3A]"></div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="2xl:h-[190px] 2xl:w-[300px] h-[100px] w-[200px] rounded-2xl cursor-pointer bg-Discord 2xl:bg-cover bg-contain bg-no-repeat bg-center bg-[#5B67B0]"></div>
            <div className="2xl:h-[190px] 2xl:w-[300px] h-[100px] w-[200px] rounded-2xl cursor-pointer bg-Whatapps 2xl:bg-cover bg-contain bg-no-repeat bg-center bg-[#41B649]"></div>
          </div>
          
        </div>
        <div className="2xl:h-[635px] 2xl:w-[600px] h-[395px] w-[400px] bg-white rounded-2xl p-10 flex flex-col items-center">
          <h1 className="font-Poltawski 2xltext-4xl text-2xl font-bold">Send me a message</h1>
          <div className="flex flex-col gap-5 mt-10 w-full 2xl:px-20 px-5">
              <InputGroup name="Full Name" type="text" labelName="Full Name" placeholder="Norith" onChange={(e)=>{setName(e.target.value)}} value={name} />
              <InputGroup name="Email" type="text" labelName="Email" placeholder="norith@gmail.com" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
              <InputGroup name="Full Name" type="textarea" labelName="Message" placeholder="Hey, Hope you have a nice day!" onChange={(e)=>{setMessage(e.target.value)}} value={message} />
          </div>
        </div>
      </div>
    </div>
  );
}
