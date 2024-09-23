"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "fvdvfdvfdv",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "fvdvfdvfdv",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Phone",
    description: "fvdvfdvfdv",
  },
];

import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] 
            rounded-xl"
            >
              <h3 className="text-4xl text-accent">let.s work togetaher</h3>
              <p className="text-white/60">
                kjfhkdjgkdjfhgkjfdghkjdfhkgdfj djkghdskhgkdjsghks djgkjsdk
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Firstname" />
                <Input type="email" placeholder="Firstname" />
                <Input type="phone" placeholder="Firstname" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">web</SelectItem>
                    <SelectItem value="et">fgfd</SelectItem>
                    <SelectItem value="es">wfgdf</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textare */}
              <Textarea className="h-[200px]" placeholder="hjfj" />

              <Button size="md" className="max-w-40">
                send messeage
              </Button>
              {/* 2.56.00 */}
            </form>
          </div>

          {/* info */}
          <div
            className="flex-1 flex items-center xl:justify-end 
          order-1 xl:order-none mb-8  xl:mb-0"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] 
                     bg-[#27272c] text-accent rounded-md flex items-center justify-center"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
