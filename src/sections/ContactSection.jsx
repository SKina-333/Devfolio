import { useState } from "react";
import InputGroup from "../components/InputGroup";
export default function ContactSection() {
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="h-screen py-28 px-16 ">
      <h2 className="text-7xl font-Poppins font-bold">Let's work together.</h2>
      <div className="flex flex-row gap-10 mt-36 text-black">
        <div className="flex flex-col gap-8 font-Poppins">
          <div className="h-[190px] w-[630px] bg-white rounded-2xl flex flex-col p-10 justify-center gap-10">
            <div className="flex justify-center font-semibold text-2xl ">
              53 Solsbury Cres, Keysborough VIC 3173
            </div>
            <div className="flex flex-row justify-between px-9 font-semibold text-gray-700">
              <button >skprojx.devstack@gmail.com</button>
              <button>+61 481 776 611</button>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="h-[190px] w-[300px] rounded-2xl cursor-pointer bg-LinkedIn bg-cover"></div>
            <div className="h-[190px] w-[300px] rounded-2xl cursor-pointer bg-Github bg-cover"></div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="h-[190px] w-[300px] rounded-2xl cursor-pointer bg-Discord bg-cover"></div>
            <div className="h-[190px] w-[300px] rounded-2xl cursor-pointer bg-Whatapps bg-cover"></div>
          </div>
          
        </div>
        <div className="h-[635px] w-[600px] bg-white rounded-2xl p-10 flex flex-col items-center">
          <h1 className="font-Poltawski text-4xl font-bold">Send me a message</h1>
          <div className="flex flex-col gap-5 mt-10 w-full px-20">
              <InputGroup name="Full Name" type="text" labelName="Full Name" placeholder="Norith" onChange={(e)=>{setName(e.target.value)}} value={name} />
              <InputGroup name="Email" type="text" labelName="Email" placeholder="norith@gmail.com" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
              <InputGroup name="Full Name" type="textarea" labelName="Message" placeholder="Hey, Hope you have a nice day!" onChange={(e)=>{setMessage(e.target.value)}} value={message} />
          </div>
        </div>
      </div>
    </div>
  );
}
