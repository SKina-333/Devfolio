import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import InputGroup from "../components/InputGroup"
export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="2xl:h-screen lg:w-1/2  flex flex-col p-5 justify-center items-center gap-10 ">
      <div className="text-6xl font-bold font-Poppins">
        Let&apos;s work together
      </div>
      <div className="flex flex-col lg:flex-row w-full h-3/4 sm:gap-0 gap-10 ">
        <div className="w-full bg-white text-black flex flex-col justify-center items-center gap-20 rounded-xl py-10">
          <div className=" flex flex-col gap-10 2xl:text-3xl text-xl p-5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center font-bold font-Playfair gap-5">
                <MapPinIcon className="2xl:size-10 size-6 text-black" />
                <p>Address</p>
              </div>
              <p className="font-Poppins 2xl:text-xl text-lg font-semibold text-wrap">
                53 Solsbury Cres, Keysborough, 3173, VIC
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center font-bold font-Playfair gap-5">
                <PhoneIcon className="2xl:size-10 size-6 text-black" />
                <p>Phone Number</p>
              </div>
              <p className="font-Poppins 2xl:text-xl text-lg font-semibold">
                +61 481 776 611
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center font-bold font-Playfair gap-5">
                <EnvelopeIcon className="2xl:size-10 size-6 text-black" />
                <p>Email</p>
              </div>
              <p className="font-Poppins 2xl:text-xl text-lg font-semibold">
                skprojx.devstack@gmail.com
              </p>
            </div>
          </div>
          <div>icons linkedin, discord, github</div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="2xl:w-1/2 p-5 w-full flex flex-col gap-5 ">
            <InputGroup name="email" type="email" labelName="Email" placeholder="Please enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <InputGroup name="subject" type="text" labelName="Subject" placeholder="Email Subject" value={subject} onChange={(e)=>{setSubject(e.target.value)}} />
            <InputGroup name="message" type="textarea" labelName="Message" placeholder="Message" value={message} onChange={(e)=>{setMessage(e.target.value)}} />

            <button className="bg-white w-1/2 self-center h-10 rounded-md text-black font-semibold hover:scale-105 transition">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
