"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("Heads");
  return (
    <main className="flex flex-1 w-full max-w-[1750px] mx-auto flex-col justify-center items-center">
      <h1 className="text-[4rem] font-semibold text-white boxShadow">
        Flip the coin
      </h1>
      <p className="mb-[3rem] text-[1.5rem] font-semibold text-white ">
        Press the coin or the button to flip the coin
      </p>
      <Image
        src={result === "Heads" ? "/heads.svg" : "/tails.svg"}
        alt="coin"
        width={160}
        height={290}
      />
      <Image
        src="/shadow.svg"
        alt="shadow"
        width={95}
        height={50}
        className="mt-[2rem]"
      />
      <p className="my-[2rem] text-[1.25rem] font-semibold text-white ">
        {result}
      </p>
      <button
        className="w-[10rem] h-[3rem] rounded-lg text-[1.25rem] font-semibold text-white buttonShadow bg-[#1F6FB0]"
        onClick={() => {
          const newResult = Math.random() < 0.5 ? "Heads" : "Tails";
          setResult(newResult);
        }}
      >
        Random
      </button>
    </main>
  );
}
