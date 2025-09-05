"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("Heads");
  const [spinning, setSpinning] = useState(false);
  const [face, setFace] = useState("Heads");

  const handleFlip = () => {
    if (spinning) return;

    setSpinning(true);
    const newResult = Math.random() < 0.5 ? "Heads" : "Tails";

    setTimeout(() => {
      setResult(newResult);
      setFace(newResult);
      setSpinning(false);
    }, 1000); // spin duration
  };

  return (
    <main className="flex flex-1 w-full max-w-[1750px] mx-auto flex-col justify-center items-center text-center">
      <h1 className="text-[4rem] font-semibold text-white boxShadow">
        Flip the coin
      </h1>
      <p className="mb-[3rem] text-[1.5rem] font-semibold text-white ">
        Press the coin or the button to flip the coin
      </p>

      <div className={spinning ? "spinY" : ""}>
        <Image
          src={face === "Heads" ? "/heads.svg" : "/tails.svg"}
          alt="coin"
          width={160}
          height={290}
          onClick={handleFlip}
        />
      </div>

      <Image
        src="/shadow.svg"
        alt="shadow"
        width={95}
        height={50}
        className="mt-[2rem]"
      />

      <p className="my-[2rem] text-[1.25rem] font-semibold text-white ">
        {spinning ? "??" : result}
      </p>

      <button
        className="w-[10rem] h-[3rem] rounded-lg text-[1.25rem] font-semibold text-white buttonShadow bg-[#1F6FB0]"
        onClick={handleFlip}
      >
        Flip
      </button>
    </main>
  );
}
